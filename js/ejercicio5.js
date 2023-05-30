let coches = prompt("Eliga el vehiculo que desea para poder indicarle su descuento: Ford Fiesta, Ford Focus, Ford Escape")
switch(coches){
    case "Ford Fiesta":
        document.write("El desceunto es de 5%");
        break;
    case "Ford Focus":
        document.write("El descuento es del 10%");
        break;
    case "Ford Escape":
        document.write("El descuento es 20%");
        break;
    default:
        document.write("Ingresa el nombre del vehiculo como aparece en la descripcion");
        break;

}
