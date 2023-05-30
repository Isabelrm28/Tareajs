let coches = prompt("Elija su destino para poderle brindar el descuento respectivo: La costa del Sol, Panchimalco, Puerto el Triunfo")
switch(coches){
    case "La costa del Sol":
        document.write("El descuento es de 5%");
        break;
    case "Panchimalco":
        document.write("El descuento es del 10%");
        break;
    case "Puerto el Triunfo":
        document.write("El descuento es 15%");
        break;
    default:
        document.write("Ingresa el nombre del destino correcto como aparece en la descripcion");
        break;

} 