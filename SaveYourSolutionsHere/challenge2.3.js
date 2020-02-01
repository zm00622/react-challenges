import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function CodingChallenge() {

  const handleSubmit = (e) => {
    e.preventDefault();
    var InputBoxValue = document.getElementById("InputBox").value;
    document.getElementById("DisplayText").innerHTML=InputBoxValue;
    // code for error
  };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Enter your name and see it displayed below!</h1>
          <input id="InputBox" type="text"></input>
          <button>Submit</button>
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
