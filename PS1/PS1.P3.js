function stringFunc(string, func) {
    return func(string);
}

var input = "supercalifragilisticexpialidocious";
// console.log("First Expression")
// console.log(`Input: ${input}`);
// console.log(`Output: ${stringFunc(input, (input) => input.split(/(?=c)/g))}`);
/*
 Sources that I used to create "input.split(/(?=c)/g))":
    * https://stackoverflow.com/questions/3559883/javascript-split-regex-question
    * https://stackoverflow.com/questions/3617797/regex-to-match-only-letters
*/

// console.log("Second Expression")
// console.log(`Input: ${input}`);
var output = stringFunc(input, (input) => {
    let resultNew = input.replace("a", "A");
    let numberReplaced = input.match(/a/g).length;
    return {
        originalString: input, 
        modifiedString: resultNew, 
        numberReplaced: numberReplaced,
        length: resultNew.length,
    }
})
// console.log(`Output:`);
// console.table(output);

module.exports = {stringFunc};