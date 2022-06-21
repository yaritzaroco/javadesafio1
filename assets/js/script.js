
/*Background Style*/

container = document.querySelector(".container")
container.style.backgroundColor = "#228B22"
container.style.width = "50%"
container.style.height = "70%"

resultados = document.querySelector(".resultados")
resultados.style.width = "39%"
resultados.style.height = "60%"


/* variables y funcion*/

const precio1 = 998900


function calcular() {

    let cantidad = document.getElementById('cantidad1');

    let color = document.querySelector ('#color1')
    let colorselector = document.getElementById ('colorselector')

    let cantidad11 = Number(cantidad.value);

    let totalfinal = document.getElementById('totalfinal');
   
    totalfinal.innerHTML = '' + cantidad11 * precio1
    cantidadfinal.innerHTML = '' + cantidad11

    colorselector.style.backgroundColor = color.value


}


