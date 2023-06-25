// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
                    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
                    'y', 'z'];

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    if (encode === false) {
      shift *= -1;
    }
    input = input.toLowerCase();
    let shiftedMessage = '';
    for (let i = 0; i < input.length; i++) {
      if (!alphabet.includes(input[i])) {
        shiftedMessage += input[i];
      } 
      else {
        const origin = alphabet.indexOf(input[i])
        let shifted = origin + shift;
        if (shifted < 0) {
          shifted += 26;
        }
        if (shifted > 25) {
          shifted -= 26;
        }
      let shiftedLetter = alphabet[shifted]
      shiftedMessage += shiftedLetter;
      }
    }
    return shiftedMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
