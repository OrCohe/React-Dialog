import React from 'react';

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

export function drawButton (obj, key=0) {
    return (
    <button 
        key={key}
        style={{float: obj.side || 'right'}} 
        onClick={() => (Array.isArray(obj.func) ? 
            asyncForEach(obj.func, async (func) => await func()) : 
            obj.func())}>{obj.name}
    </button>
    )
}