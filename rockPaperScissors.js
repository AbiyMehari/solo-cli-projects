// rockPaperScissors.js

// Step 1: Capture the user's move from the command line
const playerMove = process.argv[2]?.toLowerCase();

// Step 2: Define possible valid moves
const moves = ["rock", "paper", "scissors"];

// Step 3: Check for invalid input
if (!moves.includes(playerMove)) {
  console.log("Invalid move. Please choose rock, paper, or scissors.");
  process.exit(1);
}

// Step 4: Generate a random move for the computer
const computerMove = moves[Math.floor(Math.random() * moves.length)];

// Step 5: Display both moves
console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);

// Step 6: Determine and display the result
if (playerMove === computerMove) {
  console.log("It's a draw!");
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "scissors" && computerMove === "paper") ||
  (playerMove === "paper" && computerMove === "rock")
) {
  console.log("You win!");
} else {
  console.log("You lose!");
}
