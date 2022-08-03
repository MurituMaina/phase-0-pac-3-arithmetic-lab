function add(a, b) {

    return a + b;
}

add(12, 13);

function subtract(b, a) {

    return b - a;
}
subtract(44, 33);

function multiply(a, b) {
    return a * b;
}
multiply(12, 4);

function divide(a, b) {
    return a / b;
}
divide(44, 11);

function increment(n) {
    n = n + 1;
    return n;

}
increment(552);

function decrement(n) {
    n = n - 1;
    return n;

}
decrement(798);

function makeInt(n, base) {
    parseInt(n);
    return n;
}
console.log(makeInt('54', 2));
console.log(makeInt('sldkjflksjf', 1));


function preserveDecimal(n) {
    parseFloat(n);
    return n;

}

console.log(preserveDecimal("2.222"));
