function findFirstNonRepeatingCharacter(str) {
    const charCount = new Map();
  
    for (const char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    for (const char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }

    return null;
  }
  
  module.exports = findFirstNonRepeatingCharacter;
  