

function calcularNota(){
    let nota1 = document.querySelector('.nota1');
    console.log(nota1.value)
    let nota2 = document.querySelector('.nota2');
    console.log(nota2.value)

    let nota1por = (parseFloat(nota1.value)*0.30);
    let nota2por = (parseFloat(nota2.value)*0.70);

    let valortotal = nota1por + nota2por;

    alert ("Nota ponderada total es. "+ valortotal)

}

