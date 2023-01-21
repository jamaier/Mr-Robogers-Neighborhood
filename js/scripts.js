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

function hideOldResults() {
  const output = document.getElementById("output");
  output.innerHTML = "";
}
//UI Logic

function handleForm(event) {
  event.preventDefault();
  hideOldResults();
  const userInput = document.getElementById("userInput").value;
  const output = document.getElementById("output");
  let count = countNum(userInput);
  output.append(count.join(", "));
}

window.addEventListener("load", function () {
  let form = document.getElementById("userForm");
  form.addEventListener("submit", handleForm);
});
