//01IMAGEN

let borderojo = document.getElementById("imgbr");

borderojo.addEventListener("click", function (borde) {
  if (borderojo.style.border == "2px solid red") {
    borderojo.style.border = "none";
  } else {
    borderojo.style.border = "2px solid red";
  }
});

//02 SELECCION DE STICKER

let btnverificado = document.querySelector("#btnverificado");
let mensaje = document.querySelector("#mensaje");
let nrospan = document.querySelector("#nrospan");

btnverificado.addEventListener("click", function verificar() {
  // Leer valores actualizados al hacer clic
  let opcion1 = Number(document.querySelector("#opcion1").value);
  let opcion2 = Number(document.querySelector("#opcion2").value);
  let opcion3 = Number(document.querySelector("#opcion3").value);

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
  } else {
    mensaje.innerText = "No has seleccionado ningún sticker.";
    mensaje.style.color = "black";
    mensaje.style.fontWeight = "normal";
    mensaje.style.fontSize = "20px";
  }
});

//03 INGRESA PASSWORD

function verificaclave() {
  const nro1 = document.getElementById("nro1").value;
  const nro2 = document.getElementById("nro2").value;
  const nro3 = document.getElementById("nro3").value;

  const password = nro1 + nro2 + nro3;
  const mensaje = document.getElementById("mensajeclave");
 

  if (password === "911") {
    mensaje.innerText = "Password 1 correcto";
    mensaje.style.color = "blue";
    mensaje.style.fontWeight = "bold";
  } else if (password === "714") {
    mensaje.innerText = "Password 2 correcto";
    mensaje.style.color = "blue";
    mensaje.style.fontWeight = "bold";
  } else {
    mensaje.innerText = "Password incorrecto";
    mensaje.style.color = "red";
    mensaje.style.fontWeight = "bold";
  }
}