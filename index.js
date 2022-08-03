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

function makeInt(n) {
    //Wrong return
    //parseInt(n); return n;
    return parseInt(n, 10);
}
makeInt('0x2328', 10);
makeInt('sldkjflksjf', 10);

function preserveDecimal(n) {
    //lesson wrong return,
    //parseFloat(n); return n;
    return parseFloat(n);

}

console.log(preserveDecimal("2.222"));
