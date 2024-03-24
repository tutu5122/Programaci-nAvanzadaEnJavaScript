import {Animal} from "./Animal.js";

//clase hija
export class Leon extends Animal {
    constructor ( nombre, edad, img, comentario, sonido){
        super ( nombre, edad, img, comentario, sonido)
    }

    rugir () {
       return super.getSonido()
    }
};

export class Lobo extends Animal {
    constructor ( nombre, edad, img, comentario, sonido){
        super ( nombre, edad, img, comentario, sonido)
    }

    aullar () {
        return super.getSonido()
    }
};

export class Oso extends Animal {
    constructor ( nombre, edad, img, comentario, sonido){
        super ( nombre, edad, img, comentario, sonido)
    }

    grunir () {
        return super.getSonido()
    }
};

export class Serpiente extends Animal {
    constructor ( nombre, edad, img, comentario, sonido){
        super ( nombre, edad, img, comentario, sonido)
    }

    sisear () {
        return super.getSonido()
    }
};

export class Aguila extends Animal {
    constructor ( nombre, edad, img, comentario, sonido){
        super ( nombre, edad, img, comentario, sonido)
    }

    chillar () {
        return super.getSonido() 
    }
};