let secretNumber;
let attempts;
function start(){
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 3;
}
start();
document.getElementById("guessButton").addEventListener("click", function () {
  const guess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(guess) || guess < 1 || guess > 10) {
    showMessage("Please enter a valid number between 1 and 10");
  } else {
    attempts--;
    if (guess === secretNumber) {
      showMessage(`Congratulations! You guessed the number ${secretNumber} correctly.`);
      disableInputAndButton();
      displayimg(1);
      setTimeout(function (){
        const message=
        `        HURRAY YOU WON!!!
         Want to play again!!! Click on reset`;
        sendAlert(message);
      },2000);
    } else if (attempts === 0) {
      showMessage(`Sorry, you're out of attempts. The correct number was ${secretNumber}.`);
      disableInputAndButton();
      displayimg(0);
      setTimeout(function (){
        const message="your are out of attempts, Click on reset to play again!!!";
        sendAlert(message);
      },2000);
    } else {
      document.getElementById("guessInput").value='';
      showMessage(`Incorrect! You have ${attempts} attempts left.`);
    }
  }
});
let element;
function displayimg (a){
  if(a){
    element=document.getElementById("won");
  }
  else{
    element=document.getElementById("lost");
  }
  element.style.display="block";
};
function showMessage(message) {
  document.getElementById("message").textContent = message;
}

function disableInputAndButton() {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("guessButton").disabled = true;
}
function sendAlert(message){
  alert(message);
  document.getElementById("resetbtn").style.display="block";
  document.getElementById("resetbtn").style.margin="auto";
}
function enableInputAndButton(){
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessButton").disabled = false;
}
document.getElementById("resetbtn").addEventListener("click",function(){
  start();
  document.getElementById("message").textContent = "";
  enableInputAndButton();
  document.getElementById("guessInput").value='';
  document.getElementById("resetbtn").style.display="none";
  element.style.display="none";
})