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

Describe: countNum()

Test: "It should return an array of numbers based on the input."
Code:
  function countNum(4) {
    let array = []
    for(let i = 0; i <= array; i++) {
      array.push(i);
    }
  }

Expected Output: [0,1,2,3,4]

Describe: countNum()

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

Test: "It should return an array of numbers based on the input and replace numbers with 1 and 2 with Beep! and Boop!"
Code:
  function countNum(12) {
    let array = [];
    for(let i = 0; i <= number; i++) {
      let newStr = String(i);
      if (newStr.indexOf("1") !== -1) {
      array.push("Beep!");
      } else if (newStr.indexOf("2") !== -2) {
        array.push("Boop!")
      }else {  
      array.push(i);
      }
    }
    return array;
  }

Expected Output: [0,"Beep!","Boop!',3,4,5,6,7,8,9,10,"Beep!", "Boop!"]

Test: "It should return an array of numbers based on the input and replace numbers with 1, 2 and 3 to "Beep!", "Boop!" and "Wont you be me neightbor?"."
Code:
  function countNum(13) {
    let array = [];
    for(let i = 0; i <= number; i++) {
      let newStr = String(i);
      if (newStr.indexOf("1") !== -1) {
      array.push("Beep!");
      } else if (newStr.indexOf("2") !== -1) {
        array.push("Boop!")
      } else if (newStr.indexOf("3") !== -1) {
        array.push("Wont you be my neighbor?")
      }else {  
      array.push(i);
      }
    }
    return array;
  }

Expected Output: [0,"Beep!","Boop!',"Wont you be me neightbor?",4,5,6,7,8,9,10,"Beep!", "Boop!", "Wont you be me neightbor?"]



