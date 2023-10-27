let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "/img/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "/img/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "/img/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "/img/drowzee.png",
  level: 33,
};

let player = {
  name: "Bjarne",
  playerImage: "/img/pokemonTrainerIdle.png",
  playerImageShowPokemon: "/img/pokemonTrainerThrow.png",
  playerPokemon: [],
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon;

let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
          <div>health: ${randomPokemon.health}</div>
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${player.playerImage}">
              <div>${player.name}</div>
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  
      </div>
    </div>
    `;
}

function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
      <h1>Du fanget ${
        player.playerPokemon[player.playerPokemon.length - 1].name
      }</h1>
      <div class="buttonContainer">
        <button onclick="updateView()">Finn en annen</button>
        <button onclick="showPokemon()">Vis dine pokemon</button>       
      </div>
    </div>
    `;
}

function catchPokemon() {
  player.playerPokemon.push(randomPokemon);
  caughtPokemonView();
}

function showPokemon() {
  app.innerHTML = /*HTML*/ `
    <div class="showPokemonContainer">
      ${player.playerPokemon[player.playerPokemon.length - 1].name}
      <button class="showPokemonButtons" onclick="updateView()">Finn pokemon</button>
      <div class="showPokemonPlayerView">
        <img src="${player.playerImageShowPokemon}">
        <div>${player.name}</div>
      </div>
    </div>
  `;
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}
