function reverseAlphabetical(originalString) {
    alphabet = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0,
        'e': 0,
        'f': 0,
        'g': 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0,
    }
    var result = "";

    for (var i = 0; i < originalString.length; i++) {
        var letter = originalString.charAt(i);
        alphabet[letter] += 1;
      }
    
    Object.keys(alphabet).forEach(function(key) {
        // Add as many letters that we've found
        for (var x = 0; x < alphabet[key]; x++){
            result += key;
        }
    });

    // Reverse the string 
    var stringAsChar = result.split("");
    var reverseStringAsChat = stringAsChar.reverse(); 
    return reverseStringAsChat.join("");

    // Used: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ as refrence

}

// var input = "supercalifragilisticexpialidocious";
// console.log(`Input: ${input}`);
// console.log(`Output: ${reverseAlphabetical(input)}`);

module.exports = {reverseAlphabetical};