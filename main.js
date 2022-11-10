
function plus(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function calculator(x, y, cb){
    let total = cb(x, y);
    console.log(`The total is ${total}`)
}

calculator(3, 6, plus);
calculator(5, 8, plus);
calculator(3, 6, subtract);
calculator(5, 2, subtract);