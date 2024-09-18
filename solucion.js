// Selecciona el contenedor donde se agregarán los elementos
const contenedor = document.querySelector(".flex-container");

// Función para crear el HTML de una llave
function crearLlave(nombre, modelo, precio) {
    img = "<img src='llave.png'>"; // Imagen de la llave
    nombre = `<h2>${nombre}</h2>`; // Nombre de la llave
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`; // Modelo de la llave con un ID
    precio = `<p> Precio: <b>${precio}</b> </p>`; // Precio de la llave
    return [img, nombre, modelo, precio];
}

// Función para actualizar el valor del campo oculto
const changeHidden = (number) => {
    document.querySelector(".key-data").value = number;
}

// Crea un fragmento de documento para añadir elementos de manera eficiente
let documentFragment = document.createDocumentFragment();

// Genera 20 llaves con información aleatoria
for (let i = 1; i <= 20; i++) {
    let modeloRamdon = Math.round(Math.random() * 10000); // Número de modelo aleatorio
    let precioRamdon = Math.round(Math.random() * 10 + 30); // Precio aleatorio
    let llave = crearLlave(`Llave: ${i}`, `Modelo ${modeloRamdon}`, precioRamdon); // Crea el HTML de la llave
    let div = document.createElement("DIV"); // Crea un nuevo div para la llave
    div.addEventListener("click", () => { changeHidden(modeloRamdon); }); // Actualiza el campo oculto al hacer clic
    div.tabIndex = i; // Establece tabindex
    div.classList.add(`item${i}`, `flex-item`); // Agrega clases al div
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]; // Inserta el contenido HTML
    documentFragment.appendChild(div); // Añade el div al fragmento
}

// Agrega el fragmento de documento al contenedor
contenedor.appendChild(documentFragment);