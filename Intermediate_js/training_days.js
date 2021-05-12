/*As a seasoned athlete, one of your favorite activities is running marathons.
 You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.*/

 //arrow function
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);/*con esto conseguimos un número entero aleatorio en tre 0 y 2*/
  /*colocamos la variable random dentro de la función para convertirla en ******una VARIABLE DE BLOQUE****
  ya que si lo dejamos en el scope gloval el valor de random sería siempre el mismo para todos los corredores*/
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // arrow function
  const getTrainingDays = event => {
  
     let days;
     
    if (event === 'Marathon') {
         days=50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  
  const name = 'Nala';
  const logEvent = (name,event) => {
   
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name,days) => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  //TESTING RESULTS
  
  logEvent(name,event);
  logTime(name,days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);
  