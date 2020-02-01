import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './styling.css';

function CodingChallenge() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello World');
    // code for error
  };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Press the button to console log "Hello World"</h1>
          <button>Submit</button>
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
