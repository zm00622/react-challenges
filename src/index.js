 import React from 'react';
 import ReactDOM from 'react-dom';
 import './footerstyling.css';
 import HackerAnimation from './footeranimation.js';
 import './styling.css';
 import CodingChallenge from './challenge5.js';

// HTML FILE    !!!!!!!!!!!!!!!!!

const App = () => {

    return (
      <div class="react-challenges">
        <CodingChallenge>
        </CodingChallenge>
        <HackerAnimation>
        </HackerAnimation>
      </div>
    );
  };

ReactDOM.render(<App />, document.querySelector('#root'));


// File Copy

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './footerstyling.css';
// import HackerAnimation from './footeranimation.js';
// import './styling.css';
// import CodingChallenge from './challenge3.js';

// HTML FILE    !!!!!!!!!!!!!!!!!

// const App = () => {
//
//
//
//    return (
//      <div>
//        <CodingChallenge>
//        </CodingChallenge>
//        <HackerAnimation>
//        {window.onload = (event) => {
//          return HackerAnimation();
//        }}
//        </HackerAnimation>
//      </div>
//    );
//  };
//
// ReactDOM.render(<App />, document.querySelector('#root'));


// End of file copy
















/*
const App = () => {
  return (
<div>
//Solution 4.1 - Works as stand alone code
function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr = [];
  var i = 0;
  var sum = 0;

  for (; n > 0; n--) {
   myArr.push(n);
  }

  for (i=0; i < myArr.length; i++) {
   sum += parseFloat(myArr[i]);
  }

  document.getElementById("demo").innerHTML = sum;
}
</div>
);
};

ReactDOM.render(<App />, document.querySelector('#root'));

*/


// Solution 6
/*
function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr = [];
  var i = 0;
  var sum = 0;

  for (; n > 0; n--) {
   if (n % 5 === 0 || n % 3 === 0) {
   myArr.push(n);
   }
  }

  for (i=0; i < myArr.length; i++) {
   sum += parseFloat(myArr[i]);
  }

  document.getElementById("demo").innerHTML = sum;
}

*/

// Solution 5
/*
function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr = [];
  var i = 0;
  var sum = 0;

  for (; n > 0; n--) {
   if (n % 5 === 0 || n % 3 === 0) {
   myArr.push(n);
   }
  }

  for (i=0; i < myArr.length; i++) {
   sum += parseFloat(myArr[i]);
  }

  document.getElementById("demo").innerHTML = sum;
}
*/

// Solution 5 - In Progress

/* function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr = [];
  var i = 0;
  var sum = 0;

  for (; n > 0; n--) {
   myArr.push(n);
  }

  for (i=0; i < myArr.length; i++) {
   sum += parseFloat(myArr[i]);
  }

  document.getElementById("demo").innerHTML = sum;
}

*/

/*
const App = () => {
  return (

//Solution 4.1 - Works as stand alone code
function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr = [];
  var i = 0;
  var sum = 0;

  for (; n > 0; n--) {
   myArr.push(n);
  }

  for (i=0; i < myArr.length; i++) {
   sum += parseFloat(myArr[i]);
  }

  document.getElementById("demo").innerHTML = sum;
}

);
};

ReactDOM.render(<App />, document.querySelector('#root'));

*/


/* 4. Works as stand alone code
function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr = [];

  for (; n > 0; n--) {
  myArr.push(n);
  }
  document.getElementById("demo").innerHTML = myArr.toString();
}
*/


/* 4. Works as stand alone code
function myFunc() {

  var myArr = [];

  var nums=document.getElementById("inputBox").value;

  myArr.push(nums);

  document.getElementById("demo").innerHTML = myArr.toString();
}
*/


/* 4. Works as stand alone code
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
*/

/* 4. Does not work
function myFunc() {

  var n=document.getElementById("inputBox").value;

  var myArr[];

  for (; n > 0; n--) {
  myArr.push(n);
  }
  document.getElementById("demo").innerHTML = n.toString();
}
*/


// Solution 3.2

/*
function myFunc() {

  var nameToGreet = document.getElementById('inputBox').value;

  var nameUPPERCASE = nameToGreet.toUpperCase();

  if (nameUPPERCASE == 'ALIC' || nameUPPERCASE == 'BOB')  {
 document.getElementById('greetingMessage').innerHTML= "Hello " + nameToGreet;
  } else {
  document.getElementById('greetingMessage').innerHTML= "Sorry, you are not Alic or Bob. We only say hello to Alic and Bob";
  }
}
*/

// Solution 3.1
/*
function myFunc() {

  var nameToGreet = document.getElementById('inputBox').value;

  if (nameToGreet == 'Alic' || nameToGreet == 'Bob') {
 document.getElementById('greetingMessage').innerHTML= "Hello " + nameToGreet;
  } else {
  document.getElementById('greetingMessage').innerHTML= "Sorry, you are not Alic or Bob and we only say hello to Alic and Bob";
  }
}
*/

// Solution 2.1
/*
function myFunc() {
  var nameToGreet = document.getElementById('inputBox').value;

  document.getElementById('greetingMessage').innerHTML= "Hello " + nameToGreet;
}
*/


// Solution 1.1
/*
document.write('Hello World');
*/

// Solution 1.2
/*
function hello(){
var mytext = 'Hello World';

document.getElementById('mylabel').innerHTML = mytext;
}

document.write=hello();
*/
