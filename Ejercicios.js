let edad = 20;

let respuesta = (edad>=18? "Mayor de edad":"menor de edad");
console.log(respuesta);


//let nombre = "Elmo Mazo";
let carnet = "5240b";
let examen = 8;
let tareas = 8;
let asistencia = 8;
let investigacion = 2;

let promedio = ((examen*0.2)+(tareas*0.4)+(asistencia*0.1)+(investigacion*0.3));
console.log(`
    El alumno: ${nombre}
    Con el carnet: ${carnet}
    Tiene como promedio: ${promedio}`
);


let nombre = "Elmo Mazo";
salario = 200;
let categoria = 'b';
let aumento = 0;
switch (categoria) {
    case 'a':
        aumento = salario * 1.5;
        console.log(`El trabajador ${nombre}, devengo un total de $${salario} 
            y se le aplico un aumento del 15% quedando $${aumento}.`);
        break;
    case 'b':
        aumento = salario * 3.0;
        console.log(`El trabajador ${nombre}, devengo un tota de $${salario} 
            y se le aplico un aumento del 30% quedando $${aumento}.`);
        break;
    case 'c':
        aumento = salario * 1.0;
        console.log(`El trabajador ${nombre}, devengo un tota de $${salario} 
            y se le aplico un aumento del 10% quedando $${aumento}.`);
        break;

    case 'd':
        aumento = salario * 2.0;
        console.log(`El trabajador ${nombre}, devengo un tota de $${salario} 
            y se le aplico un aumento del 20d quedando $${aumento}.`);
        break;

    default:
        console.log(`Lo siento pana, el capitalismo esta feo, te quedaste solo con $${salario}`);
        break;
}


function mayorque(n1,n2) {
    return n1>n2?n1:n2;
}
console.log(mayorque(4,1));


let carro = "FORDFIESTA";
const carros = {
    FORDFIESTA: 5,
    FORDESCAPE: 10,
    FORDFOCUS: 20
};

function determinarCarro(car){
    return (`En su compra, por el ${car} se le aplicara un descuento del ${carros[car]}% sobre su compra`);
}

console.log(determinarCarro(carro));







function tienePromo(origen, destino) {
    let descuentos = {
        'panchimalco': '5%',
        'costadelsol': '10%',
        'puertoeltriunfo': '15%'
    };
    if (origen === 'lapalma') {
        if (descuentos[destino]){
            console.log(`El viaje desde ${origen} hasta ${destino} tiene un descuento de ${descuentos[destino]}`);
        }
        
    } else {
        console.log("No aplica descuento");
    }
}

tienePromo('lapalma', 'costadelsol'); 
tienePromo('san salvador', 'panchimalco');


let numeros = [1,2,45,76,12,-4,-34,9,200,-1];
let nn=0;
let np =0;
let m15 = 0;
let total = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0){nn += 1;};
    if (numeros[i] > 0){np += 1;};
    if (numeros[i] % 15 === 0){m15 += 1;};
    if (numeros[i] % 2 ===0){total += numeros[i];};
}

console.log(`Valores negativos: ${nn}
    Valores positivos: ${np}
    Valores multiplos de 15: ${m15}
    Valor acumulado de los numeros pares: ${total}`);



let table = 2;
for (let b = 1; b<=10;b++){
    console.log(`${table} * ${b} = ${table*b}`);
}

//el 9
function convertirYClasificarTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
      
    if (fahrenheit >= 14 && fahrenheit < 32) {
      return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
      return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
      return "Temperatura alta";
    } else {
      return "Temperatura desconocida";
    }
  }
  

celsius = 15;
  
  
const resultado = convertirYClasificarTemperatura(celsius);
console.log(resultado);



