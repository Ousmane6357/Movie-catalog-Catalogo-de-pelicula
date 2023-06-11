function evaluar(){
    let elementoRespuesta = document.getElementById('decision');
    let elementoPrecio = document.getElementById('textoPrecio');

    let precio = elementoPrecio.value;
    if (precio < 5) {
        elementoRespuesta.textContent = 'Compra dos cartones de leche';
    }else {
        if(precio < 8) {
            elementoRespuesta.textContent = 'Compra un carton de leche';
        }else {
            elementoRespuesta.textContent = 'No compres nada';
        }
        
    }
}