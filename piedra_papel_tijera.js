/*PROGRAMA PIEDRA-PAPEL-TIJERAS
  ROCK-PAPER-SICISSORS*/


/*secret cheat 
si el usuario introduce ***bomb*** gana siempre
 introducido dentro de user choice*/

//primero declaramos una función sobre la elección del usuario, que podrá introducir 3 opciones de forma manual
const getUserChoice= userInput =>{//FUNCIÓN que recibe como parámetro userInput
    userInput = userInput.toLowerCase();//método para controlar mayúsculas
    //control flow
    if(userInput==='rock' ||userInput==='paper'|| userInput==='scissors'|| userInput==='bomb' ){
  return userInput;
    }
    else{
      console.log('No has introducido un item correcto');
    }
  };
  //hago un testeo sobre la variable
  console.log( getUserChoice('BOMB'));


 //creamos otra función para que la máquina elija una opción
 const getComputerChoice=() =>{
let randomNumber=Math.floor(Math.random()*3 );//con esta expresión obtenemos un número al azar entre 0 y 2
 if(randomNumber===0){
return'rock';
 }
 else if(randomNumber===1){
   return 'paper';
 }
 else{
   return 'scissors';
 }
 }
 //testeamos que funcione la elección al azar de la máquina
//console.log(getComputerChoice());
///////////////////////////////////////////////////
//creamos otr función para determinar el ganador

const determineWinner =function (userChoice,computerChoice){
  //SI INTRODUCE bomb, ¡GANA SIEMPRE!
  if(userChoice==='bomb'){
    return 'WOOOW! has introducido la palabra mágica!--user won'
  }
  //si es un empate
  if(userChoice===computerChoice){
    return 'tie/empate'
  }
  //si no es un empate
  /////si el usuario elige piedra
  if(userChoice==='rock'){
    //if anidado/nested
    if(computerChoice==='paper'){
      return 'Computer won';
    }
    //la otra opción es que la máquina elija tijeras, en cuyo caso gana el usuario
    else{
      return 'User won';
    }
  }
  ////si el usuario elige papel
  if(userChoice==='paper'){
    //la máquina puede elegir tijeras o piedra, porque papel sería un empate que ya está definido
    if(computerChoice==='scissors'){
      return 'computer won';
    }
    else{
      return 'user won';
    }
    }
  ////si el usuario elige tijeras
  if(userChoice==='scissors'){
    //la máquina puede elegir pidra o papel
    if(computerChoice==='rock'){
      return 'computer won';
    }
    else{
      return 'user won';
    }
  }
  }
//TEST para comprobar que la función sea correcta
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'*/

//creamos otra función para mostrar los resultados del juego
const playGame=() =>{
  /*variable que alamcenará una de las 3 elecciones del usuario, y le pasamos como argumento 1 de ellos*/
 const userChoice=getUserChoice('bomb');

 console.log('El usuario eligió '+userChoice);
  //ahora una variable que almacena la elección de la máquina
const computerChoice=getComputerChoice();
//mostrtamos lo que ha elegido cada uno

console.log('La máquina eligió '+computerChoice);

console.log(determineWinner(userChoice,computerChoice));
}


//llamo a la función que me indica quien gana
playGame();

