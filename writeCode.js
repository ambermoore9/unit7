// Sum Zero 
function sumZero(nums) {
    seenNumbers = new Set();
    for (let num of nums) {
        if (seenNumbers.has(-num)){
        return true;
        }
    seenNumbers.add(num);
    }
    return false;
}
console.log(sumZero([]));
console.log(sumZero([1]));
console.log(sumZero([1,2,3]));
console.log(sumZero([1,2,3,-2]));
// Runtime? 0.15 seconds

// Unique Characters
function uniqueChar(word) {
    let uniqueChars = new Set();
    for (let char of word) {
        if (uniqueChars.has(char)){
            return false;
        }
    uniqueChars.add(char);
    }
    return true;
}
console.log(uniqueChar("Monday"));
console.log(uniqueChar("Moonday"));
// Runtime? 0.10 seconds

// Pangram Sentence
function pangram(sentence) {
    sentence = sentence.toLowerCase();
    let uniqueLetters = new Set();
    for (let char of sentence) {
        if (/^[a-z]$/.test(char)) {
            uniqueLetters.add(char);
        }
    }
    return uniqueLetters.size === 26;
}
console.log(pangram("The quick brown fox jumps over the lazy dog!"));
console.log(pangram("I like cats, but not mice"));
// Runtime? 0.10 seconds

// Longest Word
function find_longest_word(words) {
    let longestWord = 0;
    for (let word of words) {
        if (word.length > longestWord) {
            longestWord = word.length;
        }
    }
    return longestWord;
}
console.log(find_longest_word(["hi", "hello"]));
console.log(find_longest_word(["amber", "greg", "deborah"]));
// Runtime? 0.09 seconds