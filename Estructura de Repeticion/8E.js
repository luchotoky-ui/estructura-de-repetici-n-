function generarPiramideNumerica(n) {
    for (let i = 1; i <= n; i++) {
        let espacios = " ".repeat(n - i);
        let numeros = "";
        for (let j = 1; j <= i; j++) numeros += j;
        for (let j = i - 1; j >= 1; j--) numeros += j;
        console.log(espacios + numeros);
    }
}
generarPiramideNumerica(5);