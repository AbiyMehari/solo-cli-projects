// Get input phrase from command line
const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide a phrase to translate.");
  process.exit(1);
}

console.log("Original:", input);

// Step 1: split the phrase into words
const words = input.split(" ");

const translated = words.map(word => {
  const lower = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  // Rule 3: starts with a vowel
  if (vowels.includes(lower[0])) {
    return lower + "way";
  }

  // Rule 2: starts with 2 consonants
  if (!vowels.includes(lower[0]) && !vowels.includes(lower[1])) {
    return lower.slice(2) + lower.slice(0, 2) + "ay";
  }

  // Rule 1: starts with 1 consonant + vowel
  return lower.slice(1) + lower[0] + "ay";
});

console.log("Pig Latin:", translated.join(" "));
