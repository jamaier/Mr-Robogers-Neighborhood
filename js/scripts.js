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

function bolded(countNum) {
  const bold = document.createElement("strong");
  const pElement = document.getElementById("output");
  let text = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  for (let i = 0; i = element; i++) {
    if (element === text){
      return bold.append(pElement)
    }
  } 
}
//UI Logic

function handleForm(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const output = document.getElementById("output");
  const pElement = document.createElement("p");
  const count = countNum(userInput);
  pElement.innerHTML = count.join(", ");
  output.appendChild(pElement);
}

window.addEventListener("load", function () {
  let form = document.getElementById("userForm");
  form.addEventListener("submit", handleForm);
  bolded();
});
