function calcularFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("El factorial de 5 es:", calcularFactorial(5));