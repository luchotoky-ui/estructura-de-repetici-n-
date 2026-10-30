let n = 5;
for (let i = 1; i <= n; i++) {
    let fila = "";
    
    for (let j = 1; j <= i; j++) {
        fila += j;
    }
    
    for (let j = i - 1; j >= 1; j--) {
        fila += j;
    }
    console.log(fila);
}