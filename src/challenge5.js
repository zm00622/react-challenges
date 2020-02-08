import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function CodingChallenge() {

  const handleSubmit = (e) => {

    e.preventDefault();
    
    var InputBoxValue=document.getElementById("InputBox").value;
  
    var myArr = [];
    var i = 0;
    var sum = 0;
    
    for (; InputBoxValue > 0; InputBoxValue--) {
     if (InputBoxValue % 5 === 0 || InputBoxValue % 3 === 0) { 
     myArr.push(InputBoxValue);
     }
    }
    
    for (i=0; i < myArr.length; i++) {
     sum += parseFloat(myArr[i]);
    }
    
    document.getElementById("DisplayText").innerHTML = sum;
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Enter your favorite number...</h1>
          <h1>We'll sum all of the multiples belonging to 5 and 3.</h1>
          <input id="InputBox" type="text"></input>
          <button id="EnterButton">Enter</button>
          <h3 id="DisplayText"></h3>
        </form>
      </div>
    );
};

export default CodingChallenge;