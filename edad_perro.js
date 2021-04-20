///PROGRAMA para calcular tu edad en años de perro

//los 2 primeros años de vida de un perro equivalen a 10.5 en la vida de un humano
const myAge=23;//my actual age
let earlyYears=2;//
earlyYears*=10.5;//multiplicamos y reasignamos valor

let laterYears=myAge-2;//ya hemos vivido 2 años

laterYears*=4; //a partir del 3er año los años de vida de un perro se multiplican por 4
console.log(`los 2 primeros años de vida de un perro equivalen a ${earlyYears} en la vida de un humano,
 y el resto de años se multuplican por 4. Por tanto mis últimos años vividos son ${laterYears}`);

const myAgeInDogYears=earlyYears+laterYears;
myName='Daniela'.toLowerCase();//método de string para controlar mayúsculas en la introducción por el usuario

//RESULTADO
console.log(`Mi nombre es ${myName},tengo ${myAge} años y ${myAgeInDogYears} en años de perro`);

//Usando un operador ternario

myAge ? console.log("tiens menos de 30 años")
: console.log('tienes mñas de 30 años');

//equivale a usar un if...else