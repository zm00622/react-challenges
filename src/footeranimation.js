import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function HackerAnimation() {

// When style.display is set to "none", the div with id "console" is given no room to display. When style.display is set to "block" the element is made visible
  const instructionsToggle = (e) => {
    var onoff = document.getElementById("console");
    if (onoff.style.display === "none") {
    onoff.style.display = "block";
  } else {
    onoff.style.display = "none";
  }
}

    return (
      <div>
        <div>
          <button class="msg" onClick={instructionsToggle}>React Challenges</button>
        </div>
          <div id="console">
            1. Write a program that prints "Hello World" to the screen. <br></br><br></br> 2. Write a program that asks the user for their name and greets them with their name. <br></br><br></br> 3. Modify the previous program such that only the user Alic and Bob are greeted with their names. <br></br><br></br> 4. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n. <br></br><br></br> 5. Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n = 17 <br></br><br></br> 6. Write a porgram that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,...,n. <br></br><br></br> 7. Write a program that prints a multiplication table for numbers up to 12. <br></br><br></br> Challenges 1 through 7 are courtesy of GitHub user Adrian Neumann
          </div>
      </div>
    );
}

export default HackerAnimation;



// Copy of CODE

// import ReactDOM from 'react-dom';
// import React from 'react';
// import './styling.css';
//
// function HackerAnimation() {
//
//     return (
//       <div>
//         <div><button class="msg">React Challenges</button></div>
//           <div id="console">
//           "FORCE: XX0022. ENCYPT://000.222.2345"
//           "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//           "RETRY: ITALIAN JOB",
//           "Z: /MATRIX/JAMES/BOND/ EXECUTE -PLAYERS 0",
//           "================================================",
//           "Priority 1 // local / scanning...",
//           "scanning ports...",
//           "BACKDOOR FOUND (23.45.23.12.00000000)",
//           "BACKDOOR FOUND (13.66.23.12.00110000)",
//           "BACKDOOR FOUND (13.66.23.12.00110044)",
//           "...",
//           "...",
//           "BRUTE.EXE -r -z",
//           "...locating vulnerabilities...",
//           "...vulnerabilities found...",
//           "MCP/ DEPLOY CLU",
//           "SCAN: __ 0100.0000.0554.0080",
//           "SCAN: __ 0020.0000.0553.0080",
//           "SCAN: __ 0001.0000.0554.0550",
//           "SCAN: __ 0012.0000.0553.0030",
//           "SCAN: __ 0100.0000.0554.0080",
//           "SCAN: __ 0020.0000.0553.0080",
//           "RETURN: IT'S ALIVE!"
//           </div>
//       </div>
//     );
// }
//
// export default HackerAnimation;

// End of code copy
























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
