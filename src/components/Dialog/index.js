import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import {drawButton} from './functions.js'


class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.style = {
            ...this.props.style
        }; 
        this.rootHandle = document.getElementById(this.props.appElement);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this); 
        this.escFunction = this.escFunction.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.wrapper = null;
    }
    componentDidUpdate() {
        if(this.props.modalIsOpen) {
            this.openModal();
        } else {
            if(this.state.isOpen) this.closeModal();
        }
        let firstNode;
        if(this.wrapper !== null) firstNode = this.wrapper.querySelector('input,textarea,select');
        if(firstNode !== undefined && firstNode !== null) firstNode.focus();
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.escFunction, false);
    }
    escFunction(event){
        if(event.keyCode === 27) {
            this.closeModal();
        }
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
        this.wrapper = node;
      }
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.closeModal();
      }
    }
    closeModal() {
        if(this.state.isOpen) {
            this.props.closeModal();
            this.rootHandle.classList.remove('modal-open'); 
            this.rootHandle.parentElement.style.overflow = "auto";
            this.setState({isOpen: false});
        }
    }
    openModal() {
        if(!this.state.isOpen) {
            this.setState({isOpen: true});
            document.addEventListener('mousedown', this.handleClickOutside);
            document.addEventListener("keydown", this.escFunction, false);
            this.rootHandle.classList.add('modal-open');
            this.rootHandle.parentElement.style.overflow = "hidden";
        }
    }
    modalHeader(props) {
        return <header id="header" style={props.headerStyle}>{props.header}</header>
    }
    modalCloseBtn(props) {
        return <button style={{float: 'right'}} onClick={() => props.closeBtn()}>X</button>
    }
    modalFooter(props) {
        return <div id="footer" style={props.footerStyle}> 
        {Array.isArray(props.footer) ? 
            props.footer.map((element,key) => {
                return drawButton(element,key);
            }) : drawButton(props.footer)
        }
        </div>
    }
    render() {
        if(this.props.modalIsOpen) {
            return ReactDOM.createPortal(
                <div className="modal" ref={this.setWrapperRef} role="document" style={this.style}>
                    {(this.props.closeBtn ? <this.modalCloseBtn closeBtn={this.props.closeBtn}/> : null)}
                    {(this.props.header ? <this.modalHeader header={this.props.header} headerStyle={this.props.headerStyle}/> : null)}
                    <div id="body" style={this.props.bodyStyle}>{(this.props.children ?  this.props.children : "Empty Dialog!")}</div>
                    {(this.props.footer ? <this.modalFooter footer={this.props.footer} footerStyle={this.props.footerStyle}/> : null)}
                </div>
            ,this.rootHandle.parentElement)
        } else {
            return null;
        }
    }
}
Dialog.propTypes = {
    appElement: PropTypes.string.isRequired || PropTypes.element.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    style: PropTypes.object,
    header: PropTypes.string,
    headerStyle: PropTypes.object,
    footer: PropTypes.oneOfType(
        [PropTypes.shape(
            {name: PropTypes.string, func: PropTypes.oneOfType(
                [PropTypes.func, PropTypes.arrayOf(PropTypes.func)])}), PropTypes.array],
        [PropTypes.arrayOf(PropTypes.shape(
            {name: PropTypes.string, func: PropTypes.oneOfType(
                [PropTypes.func, PropTypes.arrayOf(PropTypes.func)])}), PropTypes.array)]),
    footerStyle: PropTypes.object,
}

export default Dialog;