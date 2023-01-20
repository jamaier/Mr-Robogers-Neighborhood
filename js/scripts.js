//Business Logic

function countNum(number) {
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

// function splitNum(number) {
//   const arrayToString = number.toString().split("");
//   const splitArray = arrayToString.map(function(element) {
//     return parseInt(element)
//   })
//   return splitArray;
// }

// function convertNum(number) {
//   let splitArray = splitNum(number)
//   if(splitArray.includes(3)) {
//     return "Won't you be my neighbor?";
//   } else if (splitArray.incudes(2)) {
//     return 
//   }
// }


//UI Logic

