
let cantidadNegativos =0;
let cantidadPositivos =0;
let cantidadMultiplos15 =0;
let acumuladoPares =0;

for (let i = 1; i <= 10; i++) {
  let valor = parseInt(prompt("Ingrese el valor" + i + ":"));

  if (valor < 0) {
    cantidadNegativos++;
  }
  else if (valor > 0) {
    cantidadPositivos++;
  }

  if (valor % 15 === 0) {
    cantidadMultiplos15++;
  }

  if (valor % 2 === 0) {
    acumuladoPares += valor;
  }
}

document.write("Cantidad de valores negativos ingresados: " + cantidadNegativos +"<br>");
document.write("Cantidad de valores positivos ingresados: " + cantidadPositivos +"<br>");
document.write("Cantidad de múltiplos de 15 ingresados: " + cantidadMultiplos15 +"<br>");
document.write("Valor acumulado de los números pares ingresados: " + acumuladoPares +"<br>");