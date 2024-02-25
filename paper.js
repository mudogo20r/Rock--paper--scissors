document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const buttons = document.querySelectorAll("button");
    const result = document.getElementById("result");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const userChoice = e.target.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();
  
        if (userChoice === computerChoice) {
          result.textContent = "It's a tie!";
        } else if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "scissors" && computerChoice === "paper") ||
          (userChoice === "paper" && computerChoice === "rock")
        ) {
          result.textContent = `You win! Computer chose ${computerChoice}.`;
        } else {
          result.textContent = `You lose! Computer chose ${computerChoice}.`;
        }
      });
    });
});


document.addEventListener("DOMContentLoaded",instructions )
  function instructions(){
    const choices = ["Rock", "Paper", "Scissors"];
    const buttons = document.querySelectorAll("button");
    const result = document.getElementById("result");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const userChoice = e.target.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();
  
        if (userChoice === computerChoice) {
          result.textContent = "It's a tie!";
        } else if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "scissors" && computerChoice === "paper") ||
          (userChoice === "paper" && computerChoice === "rock")
        ) {
          result.textContent = `You win! Computer chose ${computerChoice}.`;
        } else {
          result.textContent = `You lose! Computer chose ${computerChoice}.`;
        }
      });
    });
  }
  
