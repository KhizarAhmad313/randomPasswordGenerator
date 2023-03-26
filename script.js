let result = document.getElementById("result");
let btn = document.getElementById("btn");

function createPassword() {
  let combination =
    "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@";
  let passLength = 10;
  let password = "";

  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * combination.length);
    password = password + combination.substring(randomNumber, randomNumber + 1);
  }
  result.value = password;
  navigator.clipboard.writeText(password);
}

btn.addEventListener("click", () => {
  createPassword();
});
