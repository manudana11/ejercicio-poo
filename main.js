console.log('hola caracola');

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        return `Tu nombre es ${this.nombre}, tienes ${this.edad} años y eres ${this.genero}.`;
    }
};

let miPersona = new Persona('Manuel', 27, 'Hombre');
console.log(miPersona.obtDetalles());

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        return `Tu nombre es ${this.nombre}, tienes ${this.edad} años y eres ${this.genero}. Estudias un curso de ${this.curso} y tu grupo es el ${this.grupo}`;
    }
};

let miEstudiante = new Estudiante('Pedro', 19, 'Hombre', 'Full Stack', 'A');
console.log(miEstudiante.registrar());

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        return `Tu nombre es ${this.nombre}, tienes ${this.edad} años y eres ${this.genero}. Impartes ${this.asignatura} y tu nivel es ${this.nivel}`;
    }
}

let miProfesor = new Profesor('Marta', 30, 'Mujer', 'Informatica', 'Alto');
console.log(miProfesor.asignar());