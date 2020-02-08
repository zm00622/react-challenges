import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function CodingChallenge() {

  const handleSubmit = (e) => {
    
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

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Enter your favorite number and we'll sum all of the numbers leading up to it!</h1>
          <input id="InputBox" type="text"></input>
          <button id="EnterButton">Enter</button>
          <h3 id="DisplayText"></h3>
        </form>
      </div>
    );
};

export default CodingChallenge;