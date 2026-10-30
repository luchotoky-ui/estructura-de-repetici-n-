let n = 4;

for (let fila = 1; fila <= n; fila++) {
    let linea = "";
    
    
    for (let espacio = 1; espacio <= n - fila; espacio++) {
        linea += " ";
    }
    
    
    for (let asterisco = 1; asterisco <= (2 * fila - 1); asterisco++) {
        linea += "*";
    }
    
    console.log(linea);
}


for (let fila = n - 1; fila >= 1; fila--) {
    let linea = "";
    
    
    for (let espacio = 1; espacio <= n - fila; espacio++) {
        linea += " ";
    }
    
    
    for (let asterisco = 1; asterisco <= (2 * fila - 1); asterisco++) {
        linea += "*";
    }
    
    console.log(linea);
}