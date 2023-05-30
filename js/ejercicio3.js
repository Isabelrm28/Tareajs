let nombre = prompt("Ingrese nombre de trbajador");
let salario = parseFloat(prompt ("Ingrese salario"));
let categoria = prompt ("Ingrese categoria del aumento: A, B, C, D")
var aumento;
var salariototal;


switch(categoria){
    case "A":
        aumento = salario  * 0.15;
        salariototal = aumento + salario;
        document.write("Trabajador con nombre: "+ nombre + " Tiene un salario de: "+ salario + " Con un aumento de categoria: " + categoria + " Tiene como aumento el 15%. Dando como salario total:  " + salariototal);
        break; 
    case "B":
        aumento = salario  * 0.30;
        salariototal = aumento + salario;
        document.write("Trabajador con nombre: "+ nombre + " Tiene un salario de: "+ salario + " Con un aumento de categoria: " + categoria + " Tiene un aumento del 30%. Dando como salario total:  " + salariototal);
        break; 
    case "C":
        aumento = salario  * 0.10;
        salariototal = aumento + salario;
        document.write("Trabajador con nombre: "+ nombre + " Tiene un salario de: "+ salario + " Con un aumento de categoria: " + categoria + " Teniendo un aumento de 10%. Dando como salario total:  " + salariototal);
        break; 
    case "D":
        aumento = salario  * 0.20;
        salariototal = aumento + salario;
        document.write("Trabajador con nombre: "+ nombre + " Tiene un salario de: "+ salario + " Con un aumento de categoria: " + categoria + " Teniendo como aumento un 20%. Dando como salario total:  " + salariototal);
        break; 
    default:
        document.write("Ingresa una categoria correcta");
        break;

}
