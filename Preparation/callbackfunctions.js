function divideByHalf(sum) {
    console.log((sum / 2));
}
function multiplyBy2(sum) {
    console.log(sum * 2);
}
function operationOnSum(num1, num2, operation) {
    const sum = num1 + num2; 
    operation(sum);
}
operationOnSum(3, 2.5, divideByHalf); // Outputs 3
operationOnSum(5, 5, multiplyBy2);//output