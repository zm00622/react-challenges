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
          <h1>Enter your name to see if you're welcome here</h1>
          <input id="InputBox" type="text"></input>
          <button id="EnterButton">Enter</button>
          <h3 id="DisplayText"></h3>
        </form>
      </div>
    );
};

export default CodingChallenge;



// The code below is an attempt at trying to figure out how to not have automatic update underneath the text box, but rather
// to update the welcome msg only after the button is clicked again


// displayNameHandler = (e) => {
//   let updatedName = e.target.value;
//   this.setState({ firstName: updatedName });
//   //console.log(updatedName);
// }
//
// handleSubmit = (e) => {
//   e.preventDefault();
//   this.setState({
//     showName: true
//   });
// }





//   resetForm = () => {
//    this.setState({
//        ...this.state,
//        firstname: '',
//        lastname: ''
//    })
// }
