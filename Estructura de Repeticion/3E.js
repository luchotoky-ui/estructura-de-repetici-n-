for(let n=2; n <1000;n++){
    let esPrimo = true;
    let d= 2;
    while(d * d <= n && esPrimo){
        if(n % d === 0){
            esPrimo = false;
        }
        d++;
    }
    if(esPrimo){
        console.log(n);
    }
}