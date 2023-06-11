



function consultarPrecio(){

    let elementoRespuesta = document.getElementById('textoPrecio');
    let elementoFruta =  document.getElementById('numeroFruta');
    let fruta = elementoFruta.value;

    switch (fruta)
    {
        case '1':
            elementoRespuesta.textContent = '$8.90'
            break;
        case '2':
            elementoRespuesta.textContent = '$5.09'
            break;

        case '3':
            elementoRespuesta.textContent = '$0.41'
            break;

        case '4':
            elementoRespuesta.textContent = '$1.50'
            break;

        case '5':
            elementoRespuesta.textContent = '$6.00'
            break;
    }
}