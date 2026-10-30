let n = 5; 
let totalFilas = 2 * n - 1;

for (let i = 1; i <= totalFilas; i++) {
    let filaActual = i <= n ? i : 2 * n - i;
    let espacios = " ".repeat(n - filaActual);
    let asteriscos = "*".repeat(2 * filaActual - 1);
    console.log(espacios + asteriscos);
}