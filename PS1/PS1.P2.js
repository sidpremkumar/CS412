function evaluate(input){
    if (input.includes("+")) {
        return (left, right) => left + right
    } else if (input.includes("*")) {
        return (left, right) => left * right
    } else if (input.includes("^")) {
        return (left, right) => left ^ right
    } else if (input.includes("/")) {
        return (left, right) => left / right
    } else if (input.includes("-")) {
        return (left, right) => left - right
    } else if (input.includes("%")) {
        return (left, right) => left % right
    } else {
        console.log("Invalid expression used as input!")
    }
}

function performCalculation(expression, operator) {
    let [number1, number2] = expression.split(/\/|\*|\+|\-|\%/);
    return operator(parseInt(number1), parseInt(number2));
}

const doCalculation = (expression) => performCalculation(expression, evaluate(expression));



const expresion1 = "8%3";
console.log(`${expresion1} = ${doCalculation(expresion1)}`);

const expresion2 = "4*2";
console.log(`${expresion2} = ${doCalculation(expresion2)}`);

const expresion3 = "10/2";
console.log(`${expresion3} = ${doCalculation(expresion3)}`);

const expresion4 = "100-3";
console.log(`${expresion4} = ${doCalculation(expresion4)}`);

const expresion5 = "8+40";
console.log(`${expresion5} = ${doCalculation(expresion5)}`);