function recomandar (genero){
    let edad = document.getElementById('edad').value;
    let recomadacion =  document.getElementById('recomendacion')

    switch (genero){
        case 'drama':
            if (edad < 13) {
                recomadacion.textContent = 'Casablanca';
            }else{
                if (edad < 16) {
                    recomadacion.textContent = 'The rock';
                }else{
                    recomadacion.textContent = 'Taxi driver';
                }
            }
            break;
            case 'comedia':
                if (edad < 13) {
                    recomadacion.textContent = 'Back to the futur';
                }else{
                    if (edad < 16) {
                        recomadacion.textContent = 'Scorpion';
                    }else{
                        recomadacion.textContent = 'will smith';
                    }
                }
                break;
                case 'musical':
                    if (edad < 13) {
                        recomadacion.textContent = 'Alpha';
                    }else{
                        if (edad < 16) {
                            recomadacion.textContent = 'Tiken';
                        }else{
                            recomadacion.textContent = 'Yorobo';
                        }
                    }
                    break;
                    case 'crimen':
                        if (edad < 13) {
                            recomadacion.textContent = 'No hay opciones';
                        }else{
                            if (edad < 16) {
                                recomadacion.textContent = 'Black mirror';
                            }else{
                                recomadacion.textContent = 'Dinamique';
                            }
                        }
                        break;
    }

}