
//PROGRAMA para calcular tu deuda de sueño semanal

//función que determina las horas que has dormido cada día de la semana
const getSleepHours = day => {
    switch(day){
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 8;
      break;
      case 'wednesday':
      return 8;
      break;
      case 'thursday':
      return 8;
      break;
      case 'friday':
      return 12;
      break;
      case 'saturday':
      return 10;
      break;
      case 'sunday':
      return 10;
      break;
      default:
      return 'error';
      break;
  }
  };
  
  const getActualSleepHours= () => 
  /*ojo porque si el return es implícito no se ponen {}*/
  
  getSleepHours('monday')+
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday'); 
   
  
  /* test para comrpbar que devuelve las horas dormiddas cada día*/
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  
  const getIdealSleepHours=() =>{
    const idealHours=9;
    return idealHours *7;
  }
  //testeo
  console.log(getIdealSleepHours());

  const calculateSleepDebt= () => {

   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours();
     
  //control flow para verificar la deuda de horas de sueño
   if(actualSleepHours=== idealSleepHours){
  
   return 'perfect amount of sleep' 
   }
   else if(actualSleepHours > idealSleepHours){
     const exceed= actualSleepHours-idealSleepHours;
     return 'user got more sleep than needed. porque te has pasado '+exceed+ ' hora/s'
    
   }
   else{
     const rest=idealSleepHours-actualSleepHours;
   return 'user should get some rest. porque te han faltado '+rest+ ' horas para llegar tus horas'
   }
  }
  //imprimo por consola
  console.log(calculateSleepDebt());
  
  
  