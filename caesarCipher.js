// Get the text to encrypt and the shift number from command line arguments
const input = process.argv[2];            // Phrase to encrypt
const shift = parseInt(process.argv[3]);  // Shift value (converted from string to number)

// Check for missing or invalid input
if (!input || isNaN(shift)) {
  console.log('Usage: node caesarCipher.js "your phrase" shift');
  process.exit(1); // Exit the program early if input is invalid
}

// Define the alphabet for reference
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Main function to encrypt the input text
function caesarEncrypt(text, shiftAmount) {
  return text
    .toLowerCase()     // Convert all letters to lowercase for consistency
    .split('')         // Split the phrase into individual characters
    .map(char => {
      const index = alphabet.indexOf(char); // Find the position of the character in the alphabet

      if (index === -1) {
        return char; // If it's not a letter (like space or punctuation), keep it unchanged
      }

      // Calculate the new shifted index, using modulo to wrap around the alphabet
      let newIndex = (index + shiftAmount) % 26;

      // Handle negative shifts (make sure newIndex is not negative)
      if (newIndex < 0) {
        newIndex += 26;
      }

      return alphabet[newIndex]; // Return the new shifted letter
    })
    .join(''); // Join the characters back into a full string
}

// Call the function and display the encrypted result
const result = caesarEncrypt(input, shift);
console.log("Encrypted:", result);
