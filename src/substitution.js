// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let defaultAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                        'u', 'v', 'w', 'x', 'y', 'z'];

  function substitution(input, alphabet, encode = true) {
    const givenAlphabet = [...new Set(alphabet)];
    if (givenAlphabet.length != 26) {
      return false;
    }
    input = input.toLowerCase();
    let originalAlphabet = defaultAlphabet;
    let codeAlphabet = givenAlphabet;
    if (encode === false) {
      originalAlphabet = givenAlphabet;
      codeAlphabet = defaultAlphabet;
    }
    let codedMessage = '';
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];
      if (!alphabet.includes(letter)) {
        codedMessage += letter;
      } 
      else {
        const origin = originalAlphabet.indexOf(letter);
        const newLetter = codeAlphabet[origin];
        codedMessage += newLetter;
      }
    }
    return codedMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
