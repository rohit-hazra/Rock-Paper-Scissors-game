let userChoice = "";
let userScore = 0;
let compScore = 0;

function setChoice(choice) {
    userChoice = choice;
    document.getElementById("userInput").value = choice;
}

function compute() {
    userChoice = document.getElementById("userInput").value.trim().toLowerCase();

    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("❌ Please enter or click Rock, Paper, or Scissors.");
        return;
    }

    const choices = ["rock", "paper", "scissors"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === compChoice) {
        result = "🤝 It's a tie!";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        result = "🎉 You win!";
        userScore++;
    } else {
        result = "💻 Computer wins!";
        compScore++;
    }

    document.getElementById("computer").value = compChoice;
    const resultField = document.getElementById("result");
    resultField.innerHTML = result;
    resultField.style.opacity = 1;

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
}

function reset() {
    userChoice = "";
    document.getElementById("userInput").value = "";
    document.getElementById("computer").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.opacity = 0;
    document.getElementById("userInput").focus();
    userScore = 0;
    compScore = 0;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
}