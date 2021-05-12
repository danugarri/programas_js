//Pequeño programa que convierte un string en el idioma de los humanos al idioma de las ballenas*/*

/**********Whale Talk**************
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.*/

let input='Daniel se convertira en gran programador con Javascript';
const vowels=['a','e','i','o','u'];
let resultArray=[];

for(let i=0;i<input.length;i++){
  //console.log('la posición de i es: '+i);
  for(let j=0;j<vowels.length;j++){
    //console.log(j);
    if(input[i]===vowels[j]){
      //utilizamos el método .push()
      resultArray.push(input[i]);
      console.log(resultArray);
    }
    if(input[i]==='e'){
      //decimos que las e's y las u's se duplican
      //por eso cuando encuentre una e, la añade otra vez
      resultArray.push(input[i]);

    }
    if(input[i]==='u'){
      //decimos que las e's y las u's se duplican
      //por eso cuando encuentre una u, la añade otra vez
      resultArray.push(input[i]);

    }
  }
}
//imprimo resultado del canto de ballena
console.log(resultArray.join(' ').toUpperCase());
//aquí utilizo el método .join() para que el contenido del array se convierta en un string
//y luego usamos el método .toUpperCase() para convertir las letras en mayúsculas

