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

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        return this.power;
    }
    defend(damage) {
        this.life -= damage;
        return `Su vide restante es ${this.life}`;
    }
};

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkColaCao() {
        this.power += 10;
    }
};

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkNesquik() {
        this.life += 10;
    }
};

const pichincho = new Maya(79, 83);

const chinchopo = new Aztec(100, 75);

console.log('Batalla');

chinchopo.drinkNesquik();

console.log('Azteca bebe Nesquik', chinchopo.life);

pichincho.drinkColaCao()

console.log('Maya bebe Cola Cao', pichincho.power);

chinchopo.defend(pichincho.attack());

console.log('Los Maya han atacado a los Azteca. Tu vide es', chinchopo.life);

pichincho.defend(chinchopo.attack());

console.log(pichincho);