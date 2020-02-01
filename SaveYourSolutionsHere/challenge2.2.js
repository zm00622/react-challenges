import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './styling.css';

// The code I tried here does not work. See problem2.3.js for a working solution

function CodingChallenge() {

  const [updatedName, setUpdatedName] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(updatedName);
      // code for error
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Enter Your Name</h1>
          <input
            id="inputBox"
            type="text"
            name="updatedName"
            value={updatedName}
            onChange={e => setUpdatedName(e.target.value)}
          />
          <button>Submit</button>
          <p>Hello {updatedName}, welcome to the page.</p>
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
