//01IMAGEN

let borderojo =  document.getElementById("imgbr");

borderojo.addEventListener("click", function (borde)

{
    if(borderojo.style.border == "2px solid red"){borderojo.style.border = 'none'}
    else{borderojo.style.border = "2px solid red" }
} );





//02 SELECCION DE STICKER


//03 INGRESA PASSWORD




    let value = document.querySelector ('#secret').value; 
    
    let parrafo = document.querySelector ('#secret-result');

    if (value === 'Desafio Latam') { parrafo.innerHTML = 'Contraseña Correcta'

    } else { 
    parrafo.innerHTML = 'Contraseña incorrecta'
    }