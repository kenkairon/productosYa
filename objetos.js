/*POO */
/*Definicion y Usos */

/*Ejemplos */

/* Instanciacion*/

/*Clase*/
class Animal {
    /*Constructor */
    constructor(especie,edad,color){
    //Selecciona el objeto
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    /*Metodo */
    verInfo(){
        document.write(this.info + "<br>")
    }
   
}
/* Herencia*/
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null ;
    }
      //métodos Setter
      set setRaza(newName){
        this.raza = newName
    }

      get getRaza(){
        return this.raza;
      }
    // ladrar(){
    //     alert("WAW");
    // }

  
}




/*Objeto  instanciamos con new*/
const perro = new Perro("perro",5,"marrón","doberman");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");

perro.setRaza = "Pedro";

// En aca el perro si Ladra( Polimorfismo)
// perro.ladrar();
// Esto no puede ocurrir debido que el gato no ladra y ademas no es su comportamiento a eso se llama polimorfismo
// gato.ladrar();

// console.log(perro);
// console.log(gato);
// console.log(pajaro);
// document.write(perro);
// document.write(perro.color);
// document.write(perro.edad);
// document.write(perro.especie);
// document.write(perro.info);
// EL MÉTODO REEMPLAZA A ESTO
// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>");

// Trabajando con el Método
// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

/*Atributo */





/*Instanciacion */