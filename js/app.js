let guessNumber = 0;
let lives = 2;

const closeAlert = () => {
  setTimeout(() => {
    document.querySelector(".error-alert").innerHTML = "";
  }, 2000);
};
const playAgain = document.querySelector("#btn-again");
const playBtn = document.querySelector("#btn-add");

const inputrandomNum = document.querySelector("#inputnumer");

const genaratRandomNumber = () => {
  guessNumber = Math.floor(Math.random() * 10 + 1);
  console.log(guessNumber)
};

const guessNumberSubmit = (e) => {
  e.preventDefault();
  if (inputrandomNum.value == "") {
    document.querySelector(".error-alert").innerHTML = `
    
    <div> please enter number between 1 and 10
    </div>
    `;
  }

  if (inputrandomNum.value != guessNumber) {
    document.querySelector(".error-alert").innerHTML =
      inputrandomNum.value +
      `
     is wrong
    ` +
      lives +
      " guesses left";
  }
  if (inputrandomNum.value == guessNumber) {
    inputrandomNum.disabled = true;
    document.querySelector(".error-alert").innerHTML = inputrandomNum.value = `
    
    <div class="text-success">${guessNumber} is correct, You Win!
    </div>
    `;
    playAgain.classList.remove("d-none");
    playBtn.classList.add("d-none");
  }
  if (lives == 0) {
    inputrandomNum.disabled = true;
    playAgain.classList.remove("d-none");
    playBtn.classList.add("d-none");
    document.querySelector(".error-alert").innerHTML =
      `
    You Lost!, Correct number was 
    ` + guessNumber;
  }

  lives--;
};

// addEventListener
playAgain.addEventListener("click", () => {
  document.querySelector(".error-alert").innerHTML = `
  
  <div > please try again 1 to 10 between
  </div>
  `;
  setTimeout(() => {
    location.reload();
  }, 1500);
});

document
  .querySelector("#add-guess-numer")
  .addEventListener("submit", guessNumberSubmit);

genaratRandomNumber();
