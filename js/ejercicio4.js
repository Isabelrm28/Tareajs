let numero1 = parseFloat(prompt ("Ingrese primer numero: "));
let numero2 = parseFloat(prompt ("Ingrese segundo numero: "));

if(numero1 > numero2){
    document.write("El numero :"+ numero1+ " es mayor");
} else if(numero1 < numero2){
    document.write("El numero :"+ numero2+ " es mayor");
}else if(numero1 == numero2){
    document.write("Los numeros son iguales");
} else {
    document.write("Ingrese valores validos");
}
