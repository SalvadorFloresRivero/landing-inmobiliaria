function mi_funcion(){
    let casa = true;
    let suma = 7 + 5 + 3;
    let nombre = 'Salvador' + ' ' + 'Flores';
    let cadName='Volvo';

    let a = 10;
    let b = 8;
    let c = 4;
    let d = 4;

    //let edad=30;
    //let nombre = `Salvador flores. Edad ${edad}`;

    if(a > b && d == c){
        console.log("Se cumple 1!");
    }
    let x=1, z=2, y=5;
    if(x < z || y > z){
        console.log("Se cumple 2!");
    }
    let j=2, i= 4, h =10, f=1;
    if(j < i && (h > i || i > f)){
        console.log("Se cumple 3!");
    }

    let muestra=console.log.bind(document);
    muestra("Hola mundo!");
}

mi_funcion();