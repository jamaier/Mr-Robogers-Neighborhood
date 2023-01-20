//Business Logic

//Changing numbers to the replaced string value of the text.
function countNum(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    let newStr = String(i);
    if (newStr.indexOf("1") !== -1) {
      array.push("Beep!");
    } else if (newStr.indexOf("2") !== -1) {
      array.push("Boop!");
    } else if (newStr.indexOf("3") !== -1) {
      array.push("Won't you be my neighbor?");
    } else {
      array.push(i);
    }
  }
  return array;
}

function bolded(str) {
  const toBold = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  let words = str.split(" ");
  let newStr = "";
  for(let i = 0; i < words.length; i++) {
    if (toBold.includes(words[i])) {
      words[i] = `<strong>${toBold[i]}</strong>`;
      newStr.push(i)
    } else {
      newStr.push(i)
    }
  }
  return newStr;
}

// function bolded(text) {
//   let words = text.split(" ");
//   words.forEach(function(word, index) {
//     if (word === "Beep!" || word === "Boop!" || word === "Won't you be my neighbor?") {
//       words[index] = '<strong> ${words} </strong>';
//     }
//   });
//   return words.join(" ");
// }

//UI Logic

function handleForm(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const output = document.getElementById("output");
  const pElement = document.createElement("p");
  let count = countNum(userInput);
  let str = count.join(", ");
  pElement.innerHTML = bolded(str);
  output.append(pElement);
}

window.addEventListener("load", function () {
  let form = document.getElementById("userForm");
  form.addEventListener("submit", handleForm);
});
