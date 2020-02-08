import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function CodingChallenge() {

  const addValues = (e) => {
    
    let InputBoxValue = document.getElementById("InputBox").value;

    let myArr = [];
    let i = 0;
    let sum = 0;

    e.preventDefault();
    

    for (; InputBoxValue > 0; InputBoxValue--) {
      myArr.push(InputBoxValue);
    }

    for (i=0; i < myArr.length; i++) {
      
    sum += parseFloat(myArr[i]);
    // code for error
  }
  document.getElementById("DisplayText").innerHTML=sum;
}


const multiplyValues = (e) => {
    
  let InputBoxValue = document.getElementById("InputBox").value;

  let myArr = [];
  let i = 0;
  let product = 1;

  e.preventDefault();
  

  for (; InputBoxValue > 0; InputBoxValue--) {
    myArr.push(InputBoxValue);
  }

  for (i=0; i < myArr.length; i++) {
    
  product *= parseFloat(myArr[i]);
  // code for error
}
document.getElementById("DisplayText").innerHTML=product;
}

    return (
      <div>
          <h1>Enter your favorite number and we'll either sum or multiply the numbers leading up to it!</h1>
          <input id="InputBox" type="text"></input>
          <button id="EnterButton" onClick={addValues}>Add</button>
          <button id="EnterButton" onClick={multiplyValues}>Multiply</button>
          <h3 id="DisplayText"></h3>
      </div>
    );
};

export default CodingChallenge;