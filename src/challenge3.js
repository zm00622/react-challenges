import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function CodingChallenge() {

  const handleSubmit = (e) => {
    e.preventDefault();
    var InputBoxValue = document.getElementById("InputBox").value;

    if (InputBoxValue.toUpperCase() == "ALIC" || InputBoxValue.toUpperCase() == "BOB") {
      document.getElementById("DisplayText").innerHTML="Welcome to the website " + InputBoxValue + "!";
    } else {
      document.getElementById("DisplayText").innerHTML="Your name is not Bob or Alic. We only welcome Bob and Alic.";
    }
    // code for error
  };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Enter your name to see if you're welcome here</h1>
          <input id="InputBox" type="text"></input>
          <button>Enter</button>
          <h3 id="DisplayText"></h3>
        </form>
      </div>
    );
}

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
