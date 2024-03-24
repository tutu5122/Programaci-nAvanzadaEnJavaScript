// Clase Padre
export class Animal {
    _nombre;
    _edad;
    _img;
    _comentario;
    _sonido;

    constructor ( nombre, edad, img, comentario, sonido ){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentario = comentario;
        this._sonido = sonido;
    }

    getNombre(){
        return this._nombre
    }

    getEdad(){
        return this._edad
    }

    getImagen(){
        return this._img
    }

    getComentario(){
        return this._comentario
    }

    setComentario(nuevoComentario){
        this._comentario = nuevoComentario
    }

    getSonido(){
        return `./assets/sounds/${this._sonido}`
    }
};


