//Business Logic

function countNum(number) {
  let array = [];
  for(let i = 0; i <= number; i++) {
      array.push(i);
  }
}

function splitNum(number) {
  const arrayToString = number.toString().split("");
  const splitArray = arrayToString.map(function(element) {
    return parseInt(element)
  })
  return splitArray;
}



// function convertNum(number) {

//   if(number.includes(3)) {
//     return "Won't you be my neighbor?";
//   }
//   console.log()
// }


//UI Logic