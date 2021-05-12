/*We want to create and extract information about your favorite sports team., you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.*/


//create object team
const team={
    _players:[{ firstName: 'Pablo',lastName: 'Sanchez',
    age: 11},
     { firstName: 'Daniel', lastName: 'Garrido',
    age: 12},
    {  firstName: 'Adrián',
    lastName: 'Garrido',
    age: 9}],
  
    _games:[{
    opponent: 'Atlético de Madrid',
    teamPoints: 42,
    opponentPoints: 27
  },{
    opponent: 'Real Madrid',
    teamPoints: 49,
    opponentPoints: 17
  },{
    opponent: 'Barsa',
    teamPoints: 41,
    opponentPoints: 29
  }],
  //create getters
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  }, 
  //method
  addPlayer(firstName,lastName,age){
    const player={
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  //method
  addGame(teamName,teamPoints,opponentPoints){
    const game={
      teamName,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
  };
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  
  
  // add 3 games
  team.addGame('Manchester',45,34);
  team.addGame('Liverpool',25,34);
  team.addGame('roma',40,34);
  //IMPRIMO RESULTADOS almacenados en el objeto team
  //llamando a una propiedad
  console.log('IMPRIMO PROPIEDADES');
  console.log('imprimo games', team._games);
  console.log('\n');
  console.log(team._players);
  console.log('\n');
  //llamando a los getters
  console.log('IMPRIMO GETTERS');
  console.log(team.games);
  console.log(team.players);
  
  
  
  
  