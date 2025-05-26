//01IMAGEN

let borderojo =  document.getElementById("imgbr");

borderojo.addEventListener("click", function (borde)

{
    if(borderojo.style.border == "2px solid red"){borderojo.style.border = 'none'}
    else{borderojo.style.border = "2px solid red" }
} );





//02 SELECCION DE STICKER

let btnverificado = document.querySelector('#btnverificado');
let mensaje = document.querySelector('#mensaje');
let nrospan = document.querySelector('#nrospan');

btnverificado.addEventListener('click', function verificar() {
  // Leer valores actualizados al hacer clic
  let opcion1 = Number(document.querySelector('#opcion1').value);
  let opcion2 = Number(document.querySelector('#opcion2').value);
  let opcion3 = Number(document.querySelector('#opcion3').value);

  let conteototal = opcion1 + opcion2 + opcion3;

  // Actualizar el span con el total
  nrospan.textContent = conteototal;

  // Mostrar el mensaje correspondiente
  if (conteototal > 10) {
    mensaje.innerText = "Llevas demasiados stickers";
    mensaje.style.color = "red";
    mensaje.style.fontWeight = "bold";
    mensaje.style.fontSize = "20px";
  } else if (conteototal === 10) {
    mensaje.innerText = "Has alcanzado el límite máximo de 10 stickers";
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
    mensaje.style.fontSize = "20px";
  } else if (conteototal > 1) {
    mensaje.innerText = `Llevas solo ${conteototal} stickers`;
    mensaje.style.color = "black";
    mensaje.style.fontWeight = "normal";
    mensaje.style.fontSize = "20px";
  }  else {
    mensaje.innerText = "No has seleccionado ningún sticker.";
    mensaje.style.color = "black";
    mensaje.style.fontWeight = "normal";
    mensaje.style.fontSize = "20px";
  }
});





/* vladi */

/* let totalQty = 0;
const btnVerify = document.querySelector("#btnVerify");
//const inputs = document.querySelectorAll(".inputQty");
const input1 = document.querySelector('input[name="input1"]');
const input2 = document.querySelector('input[name="input2"]');
const input3 = document.querySelector('input[name="input3"]');

const msg = document.querySelector(".msg");

btnVerify.addEventListener('click', function(event) {
  totalQty = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);} */


  //Giordan

 /*  const inputA = document.getElementById("bichoA");
const inputB = document.getElementById("bichoB");
const inputC = document.getElementById("bichoC");
let conteo = document.getElementById("conteo");
let contadorTotal = 0;
let check = document.getElementById("mensaje");

inputA.addEventListener("input", actualizarTotal);
inputB.addEventListener("input", actualizarTotal);
inputC.addEventListener("input", actualizarTotal);

function actualizarTotal() {
  contadorTotal = suma(inputA, inputB, inputC);

  conteo.innerText = contadorTotal;
}

function suma(a, b, c) {
  console.log(a);
  const sumaTotal = Number(a.value) + Number(b.value) + Number(c.value);
  return sumaTotal > 0 ? sumaTotal : 0;
}

function verificar() {
  if (contadorTotal > 10) {
    check.innerText = "Llevas demasiados bichos";
    check.style.color = "red";
    check.style.fontWeight = "bold";
    check.style.fontSize = "20px";
  } else if (contadorTotal > 1 && contadorTotal <= 10) {
    check.innerText = `Estás llevando ${contadorTotal} bichos`;
    check.style.color = "black";
    check.style.fontWeight = "normal";
    check.style.fontSize = "20px";
  } else if (contadorTotal == 1) {
    check.innerText = "Estas llevando 1 bicho";
    check.style.color = "black";
    check.style.fontWeight = "normal";
    check.style.fontSize = "20px";
  } else {
    check.innerText = "No has seleccionado bichos.";
    check.style.color = "black";
    check.style.fontWeight = "normal";
    check.style.fontSize = "20px";
  }
} */







//03 INGRESA PASSWORD




    let value = document.querySelector ('#secret').value; 
    
    let parrafo = document.querySelector ('#secret-result');

    if (value === 'Desafio Latam') { parrafo.innerHTML = 'Contraseña Correcta'

    } else { 
    parrafo.innerHTML = 'Contraseña incorrecta'
    }