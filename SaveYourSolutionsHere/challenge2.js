// Working solution but not optimized


// import ReactDOM from 'react-dom';
// import React, { Component } from 'react';
// import './styling.css';
//
// class CodingChallenge extends Component {
//   state = {
//     firstName: '',
//     showName: false
//   }
//
//   displayNameHandler = (e) => {
//     let updatedName = e.target.value;
//     this.setState({ firstName: updatedName });
//     //console.log(updatedName);
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       showName: true
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <h1>Enter Your Name</h1>
//           <input id="inputBox" type="text" name="firstName" onChange={this.displayNameHandler} value={this.state.firstName} />
//           <button type="submit" onClick={this.handleSubmit}>Submit</button>
//           {this.state.showName && <p>Hello {this.state.firstName}, welcome to the page.</p>}
//         </form>
//       </div>
//     );
//   }
// }
//
// export default CodingChallenge;
