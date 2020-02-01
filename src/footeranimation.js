import ReactDOM from 'react-dom';
import React from 'react';
import './styling.css';

function HackerAnimation() {

    return (
      <div>
        <div class="msg">Coding Challenges</div>
          <div id="console">
          "FORCE: XX0022. ENCYPT://000.222.2345"
          "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
          "RETRY: ITALIAN JOB",
          "Z: /MATRIX/JAMES/BOND/ EXECUTE -PLAYERS 0",
          "================================================",
          "Priority 1 // local / scanning...",
          "scanning ports...",
          "BACKDOOR FOUND (23.45.23.12.00000000)",
          "BACKDOOR FOUND (13.66.23.12.00110000)",
          "BACKDOOR FOUND (13.66.23.12.00110044)",
          "...",
          "...",
          "BRUTE.EXE -r -z",
          "...locating vulnerabilities...",
          "...vulnerabilities found...",
          "MCP/ DEPLOY CLU",
          "SCAN: __ 0100.0000.0554.0080",
          "SCAN: __ 0020.0000.0553.0080",
          "SCAN: __ 0001.0000.0554.0550",
          "SCAN: __ 0012.0000.0553.0030",
          "SCAN: __ 0100.0000.0554.0080",
          "SCAN: __ 0020.0000.0553.0080",
          "RETURN: IT'S ALIVE!"
          </div>
      </div>
    );
}

export default HackerAnimation;



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
