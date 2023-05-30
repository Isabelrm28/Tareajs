let temperatura_celsius = parseFloat(prompt ("Ingrese la temperatura en en Celsius: "));

//°F = (°C x 1,8) + 32
temperatura_far = (temperatura_celsius * 1.8) +32;
document.write("La temeperatura es: "+ temperatura_far + "<br>")
if( temperatura_far >= 14 && temperatura_far <= 32 ){
    document.write("Temperatura baja");
} else if(temperatura_far >= 32 && temperatura_far <= 68){
    document.write("Temperatura adecuada");
}else if(temperatura_far >= 68 && temperatura_far <= 96){
    document.write("Temperatura adecuada");
}else{
    document.write("Temperatura desconocida");
}
