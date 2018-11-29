import React, { Component } from 'react';
import Dialog from '../Dialog'

const customStyles = {
    position              : 'absolute',
    height                : 'auto',
    width                 : '600px',
    backgroundColor       : 'grey',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
};

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen1: false,
      modalIsOpen2: false,
      modalIsOpen3: false,
      lastRef: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal(num) {
    const name = `modalIsOpen${num}`
    this.setState({[name]: true});
  }
  closeModal(num) {
    const name = `modalIsOpen${num}`
    this.setState({[name]: false});
  }
  render() {
    return (
      <div>
        <button onClick={() => this.openModal(1)}>Open Modal1</button>
        <button onClick={() => this.openModal(2)}>Open Modal2</button>
        <button onClick={() => this.openModal(3)}>Open Modal3</button>
        <Dialog
          appElement="root"
          modalIsOpen={this.state.modalIsOpen3}
          closeModal={() => this.closeModal(3)}
          closeBtn={() => this.closeModal(3)}
          footer={{name: 'Alert!!', func: () => {
            alert("ALERTTT!@#!@#");
          },side: 'center'}}
          footerStyle={{backgroundColor: 'red'}}
          style={{width: '300px'}}
          header= "This is third Modal"
          headerStyle={{backgroundColor: 'blue'}}
          bodyStyle={{backgroundColor: 'yellow', fontWeight: 'bold'}}
        >
          <p>Hello World!</p>
          <textarea placeholder="Write Some" name="" id="" cols="30" rows="10"></textarea>
        </Dialog>
        <Dialog
        appElement="root"
        modalIsOpen={this.state.modalIsOpen1}
        closeModal={() => this.closeModal(1)}
        footer={{name: 'Close',func: () => this.closeModal(1),side: 'left'}}
        >
        <div>
          <p>deadead</p>
        </div>
        <div>
          <p>deadedede</p>
        </div>
        </Dialog>
        <Dialog  
          appElement="root"
          modalIsOpen={this.state.modalIsOpen2}
          closeModal={() => this.closeModal(2)}
          header="This is header" 
          headerStyle={{backgroundColor: 'green', fontColor: 'red'}}
          closeBtn={() => this.closeModal(2)}
          style={{...customStyles}}
          footer={[{name: 'Close',func: () => this.closeModal(2),side: 'left'},{name: 'Next',func: [() => this.closeModal(2),() => this.openModal(1)],side: 'right'}]}
          footerStyle={{backgroundColor: 'orange'}}
        >
          <input type="text" name="" id=""/>
          <div>
            <input type="text" name="" id=""/>
          </div>
        </Dialog>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
 
export default App;
