// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const code = {'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 
                'h': '32', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 
                'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 
                'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'};

  const decode = {'11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', 
                  '32': 'h', '42': '(i/j)', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 
                  'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 
                  'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'};

  function polybius(input, encode = true) {
    const message = input.toLowerCase().split(" ");
    if (encode === false) {
      if (input.replace(" ", "").length%2 !== 0) {
      return false;
      }
    let codedMessage = [];
    for (let i = 0; i < message.length; i++) {
      let codedWord = '';
      const numbers = message[i];
      let start = 0;
      let end = 2;
      for (let j = 0; j < (numbers.length / 2); j++) {
        let letter = numbers.slice(start, end);
        codedWord += decode[letter];
        if (numbers.length >= end) {  
          start += 2;
          end += 2;
        }  
      }
      codedMessage.push(codedWord);
      }
      return codedMessage.join(" ");
    }
  
    let codedMessage = [];
    for (let i = 0; i < message.length; i++) {
      let codedWord = '';
      const word = message[i];
      for (let j = 0; j < word.length; j++) {
        let poly = code[word[j]];
        codedWord += poly;
      }
      codedMessage.push(codedWord);
    }
    return codedMessage.join(" ");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
