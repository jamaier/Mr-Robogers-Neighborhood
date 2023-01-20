# _Mr. Roboger's Neighborhood_

#### By _Jacob Maier_

#### _Webpage will take input and return an array based on the input._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _GIT_

## Description

_This webpage will take a user inputed number and return an array altering certain numbers or numbers contained in a particular number._

## Setup/Installation Requirements

* _Clone this repository to your local machine_
* _navigate to the top level of the file_
* _Open the Index.html file in your browser_


__

## Known Bugs

* _N/A_


## License

_MIT_

Copyright (c) _2023_ _Jacob Maier_


### TDD:

Describe: containOne()

Test: "It should return an array of numbers based on the input."
Code:
  function countNum(4) {
    let array = []
    for(let i = 0; i <= array; i++) {
      array.push(i);
    }
  }
Expected Output: [0,1,2,3,4]

Describe: containOne()

Test: "It should return an array of numbers based on the input and replace numbers with 1 in it to Beep!"
Code:
  function countNum(11) {
    let array = [];
    for(let i = 0; i <= number; i++) {
      let newStr = array.toString();
      if (newStr.indexOf("1") !== -1) {
      array.push("Beep!");
      } else {
      array.push(i);
      }
    }
    return array;
  }
Expected Output: [0,"Beep!",2,3,4,5,6,7,8,9,10,"Beep!"]



<!-- Describe: splitNum()

Test: "It should return an array of split numbers"
Code:
  function splitNum(14) {
    const arrayToString = number.toString().split("");
    const splitArray = arrayToString.map(function(element) {
      return parseInt(element)
    })
    return splitArray;
  }
Expected Output: [1,4]

Describe: convertNum()

Test: "It should return an array of split numbers"
Code:
  function splitNum(14) {
    const arrayToString = number.toString().split("");
    const splitArray = arrayToString.map(function(element) {
      return parseInt(element)
    })
    return splitArray;
  }
Expected Output: [1,4] -->

