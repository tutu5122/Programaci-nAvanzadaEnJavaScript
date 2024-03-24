import { Animal } from "./Animal.js";
import { Aguila, Leon, Lobo, Oso, Serpiente } from "./Especies.js";

//Realizar una consulta asíncrona utilizando una función async/await 
//Realizar por lo menos una función autoejecutable IIFE
const listaAnimales = ( async () => {
    const respuesta = await fetch('/animales.json');
    const data = await respuesta.json();
    return data;
})();


const selectAnimal= document.getElementById('animal');
const registrar= document.getElementById('btnRegistrar');
const edad = document.getElementById('edad');
const comentario = document.getElementById('comentarios');
const audio = document.getElementById('player');
const mostrarAnimales = document.getElementById('Animales');
const modalAnimal = document.getElementById('modalAnimal');
const imagenAnimal= document.getElementById('preview');

const tablaAnimales = [];

const obtenerAnimal =  (async () => {
    const { animales } = await listaAnimales;
    const animalSelecionado = selectAnimal.value;
    const animalEncontrado = animales.find((ele) => ele.name == animalSelecionado);
    
    return animalEncontrado;
 });


// seleciono un animal y le dejo la imagen abajo en el formulario
selectAnimal.addEventListener("change", async () => {

    const { imagen } = await obtenerAnimal();
    imagenAnimal.style.backgroundImage = `url(assets/imgs/${imagen})`;

});

// Creo mi nuevo animal 
registrar.addEventListener("click", async () => {

    if (!edad.value || !comentario.value || !selectAnimal.value) {
        alert("Por favor complete todos los campos antes de agregar el animal a la tabla.");
        return; 
    }

   const id = tablaAnimales.length

   const { name, imagen, sonido } = await obtenerAnimal();

   const cadenaHTML = `<div>
        <img src="assets/imgs/${imagen}" class="card-img-top imgAnimales mx-2 mt-2" id="${id}">
        <br> 
        <img src="assets/imgs/audio.svg" class="imgSonido" alt="" idSonido="${id}">                
    </div>`;

    mostrarAnimales.innerHTML += cadenaHTML;
    
    let nuevoAnimal;

    switch (selectAnimal.value) {
        case 'Leon':
            nuevoAnimal = new Leon(name, edad.value, imagen, comentario.value, sonido);
            break;
        case 'Lobo':
            nuevoAnimal = new Lobo(name, edad.value, imagen, comentario.value, sonido);
            break;
        case 'Oso':
            nuevoAnimal = new Oso(name, edad.value, imagen, comentario.value, sonido);
            break;
        case 'Serpiente':
            nuevoAnimal = new Serpiente(name, edad.value, imagen, comentario.value, sonido);
            break;
        case 'Aguila':
            nuevoAnimal = new Aguila(name, edad.value, imagen, comentario.value, sonido);
            break;
    }


    tablaAnimales.push(nuevoAnimal);


    comentario.value = '';
    edad.value = '';
    selectAnimal.value = '';
    imagenAnimal.style.backgroundImage = `url(assets/imgs/lion.svg)`;
});

mostrarAnimales.addEventListener("click", (e) => {
    const animalSeleccionado = e.target;

    if (animalSeleccionado.classList.contains('imgAnimales')) {
        const id = animalSeleccionado.getAttribute('id');
        const animal = tablaAnimales[id];

        // creo la modal
        modalAnimal.innerHTML = `<div>
            <img src="assets/imgs/${animal.getImagen()}" class="card-img-top imgAnimales"  ">
            <h2>${animal.getNombre()}</h2>
            <p>${animal.getEdad()}</p>
            <p>Comentario:</p>
            <p>${animal.getComentario()}</p>                        
            </div>`;

        $('#exampleModal').modal('show');
    }

    // reproduzco el sonido
    if (animalSeleccionado.classList.contains('imgSonido')) {
        const idSonido = animalSeleccionado.getAttribute('idSonido');
        const animal = tablaAnimales[idSonido];

        switch (animal.getNombre()) {
            case 'Leon':
                audio.setAttribute('src', animal.rugir())
                break;
            case 'Lobo':
                audio.setAttribute('src', animal.aullar())
                break;
            case 'Oso':
                audio.setAttribute('src', animal.grunir())
                break;
            case 'Serpiente':
                audio.setAttribute('src', animal.sisear())
                break;
            case 'Aguila':
                audio.setAttribute('src', animal.chillar())
                break;
        }

        audio.play();
    }
});

