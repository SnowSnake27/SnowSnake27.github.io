
const button = document.getElementById('PokemonSubmit')
button.addEventListener("click", SearchAfterPokemon)

const randomButton = document.getElementById("RandomPokemon")
randomButton.addEventListener("click", SearchAfterRandomPokemon)


const autocomplete = document.getElementById("PokemonName");
const resultsHTML = document.getElementById("results");

let Complete = []
console.log(Complete)
autocomplete.oninput = function () {
   
   const userInput = this.value;
   resultsHTML.innerHTML = "";
   if (userInput.length > 0) {
     results = getResults(userInput);
     resultsHTML.style.display = "block";
     for (i = 0; i < 4; i++) {
       resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
     }
   }
  
 };

 function getResults(input) {
   const results = [];
   for (i = 0; i < Complete.length; i++) {
     if (input == Complete[i].slice(0, input.length)) {
       results.push(Complete[i]);
     }
   
   }
   return results;
 }

 resultsHTML.onclick = function (event) {
   const setValue = event.target.innerText;
   autocomplete.value = setValue;
   this.innerHTML = "";
 };

async function fetchAllPokemon() {
    const container = document.getElementById("pokemonContainer");
    const allPokemons = []; 

    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
        
        if (!response.ok) {
            throw new Error("Fehler!");
        }
        
        let data = await response.json();

        for (let pokemon of data.results) {
            let pokemonDetailsResponse = await fetch(pokemon.url);
            let data = await pokemonDetailsResponse.json();

            Complete.push(data.name)
            console.log(Complete)

            const pokemonDiv = document.createElement("div");
            pokemonDiv.setAttribute("id", `pokemon-${data.name}`);
            pokemonDiv.classList.add(`pokemon-${data.id}`)



            pokemonDiv.classList.add("pokemon");
            let pokemonTypes = data.types.map(type => type.type.name) .join(', '); 
if (pokemonTypes.includes('grass')) {
    pokemonDiv.classList.add('pokemon-grass');
    
}
if (pokemonTypes.includes('fire')) {
    pokemonDiv.classList.add('pokemon-fire');
    
}
if (pokemonTypes.includes('water')) {
    pokemonDiv.classList.add('pokemon-water');
    
}
if (pokemonTypes.includes('bug')) {
    pokemonDiv.classList.add('pokemon-bug');
    
}
if (pokemonTypes.includes('normal')) {
    pokemonDiv.classList.add('pokemon-normal');
    
}
if (pokemonTypes.includes('poison')) {
    pokemonDiv.classList.add('pokemon-poison');
    
}
if (pokemonTypes.includes('electric')) {
    pokemonDiv.classList.add('pokemon-electric');
    
}
if (pokemonTypes.includes('ground')) {
    pokemonDiv.classList.add('pokemon-ground');
    
}
if (pokemonTypes.includes('psychic')) {
    pokemonDiv.classList.add('pokemon-psychic');
    
}
if (pokemonTypes.includes('fairy')) {
    pokemonDiv.classList.add('pokemon-fairy');
    
}
if (pokemonTypes.includes('fighting')) {
    pokemonDiv.classList.add('pokemon-fighting');
    
}
if (pokemonTypes.includes('dragon')) {
    pokemonDiv.classList.add('pokemon-dragon');
    
}
if (pokemonTypes.includes('flyi1ng')) {
    pokemonDiv.classList.add('pokemon-flying');
    
}
if (pokemonTypes.includes('ice')) {
    pokemonDiv.classList.add('pokemon-ice');
    
}
if (pokemonTypes.includes('steel')) {
    pokemonDiv.classList.add('pokemon-steel');
    
}
if (pokemonTypes.includes('ghost')) {
    pokemonDiv.classList.add('pokemon-ghost');
    
}
if (pokemonTypes.includes('dark')) {
    pokemonDiv.classList.add('pokemon-dark');
    
}
if (pokemonTypes.includes('rock')) {
    pokemonDiv.classList.add('pokemon-rock');
    
}
if (pokemonTypes.includes('flying')) {
   pokemonDiv.classList.add('pokemon-flying')
   
}


let pokeHeight = data.height/10
if (pokeHeight>0) {
   pokemonDiv.classList.add('pokemon-small')
   
}


if (pokeHeight>2) {
   pokemonDiv.classList.add('pokemon-medium')
   
}

if (pokeHeight>9) {
   pokemonDiv.classList.add('pokemon-big')
   
}

let pokeWeight = data.weight/10
if (pokeWeight>0) {
   pokemonDiv.classList.add('pokemon-light')
}
if (pokeWeight>200) {
   pokemonDiv.classList.add('pokemon-middle')
}
if (pokeWeight>300) {
   pokemonDiv.classList.add('pokemon-heavy')
}

let PokeID = data.id 
if (PokeID <= 151) {
   pokemonDiv.classList.add('pokemon-one')
}
if (PokeID > 151   ){
   pokemonDiv.classList.add('pokemon-two')
   
}
if (PokeID > 251 ) {
   pokemonDiv.classList.add('pokemon-three')
   
}

if (PokeID > 386) {
   pokemonDiv.classList.add('pokemon-four')
   
}
if (PokeID > 493) {
   pokemonDiv.classList.add('pokemon-five')
}
if (PokeID > 649) {
   pokemonDiv.classList.add('pokemon-six')
}
if (PokeID > 721) {
   pokemonDiv.classList.add('pokemon-seven')
}
if (PokeID > 809) {
   pokemonDiv.classList.add('pokemon-eight')
}
if (PokeID > 905) {
   pokemonDiv.classList.add('pokemon-nine')
}
if (PokeID > 1025) {
   pokemonDiv.classList.add('pokemon-ten')
}


            
            pokemonDiv.onclick = (event) => {
              console.log(data)

                pokemonDiv.classList.add("onclick")
               

                const pokemonHeight = document.createElement("p");
                pokemonHeight.innerText = "Height : " + data.height/10 + " Meters";

                const pokemonWeight = document.createElement("p");
                pokemonWeight.innerText = "Weight :        " + data.weight/10 + " Kilogramm"

                const pokemonType = document.createElement("p")
                
                pokemonType.innerText = "Type :  " + data.types.map(type => type.type)
                                                        .map(type => type.name)
                                                        .join(', ');
                const pokemonHP = document.createElement("p")
                pokemonHP.innerText = "HP : " + data.stats.find(({stat}) => stat.name === 'hp')?.base_stat
                const pokemonSpeed = document.createElement("p")
                pokemonSpeed.innerText = "Speed : " + data.stats.find(({stat}) => stat.name === 'speed')?.base_stat
               const pokemonAtck = document.createElement("p")
               pokemonAtck.innerText = "Attack : " + data.stats.find(({stat}) => stat.name === 'attack')?.base_stat
               const pokemonDef = document.createElement("p")
               pokemonDef.innerText = "Defense : " + data.stats.find(({stat}) => stat.name === 'defense')?.base_stat  

               const PokeStats = document.createElement("h5")
               const PokeInfo = document.createElement("h5")

               const secondIMG = document.createElement("img")
               secondIMG.src = data.sprites.back_default
               console.log(secondIMG)
               secondIMG.alt = data.name
               PokeStats.innerText = "Stats : "
               PokeInfo.innerText = "Info : "

               PokeStats.classList.add("Stat")
               PokeInfo.classList.add("Info")

               pokemonAtck.classList.add("StatA")
               pokemonDef.classList.add("StatD")
               pokemonSpeed.classList.add("StatS")
               pokemonHP.classList.add("StatHP")

               pokemonHeight.classList.add("InfoH")
               pokemonWeight.classList.add("InfoW")
               pokemonType.classList.add("InfoT")
               


               
                pokemonDiv.appendChild(PokeStats);
                pokemonDiv.appendChild(pokemonHP);
                pokemonDiv.appendChild(pokemonAtck)
                pokemonDiv.appendChild(pokemonDef);
                pokemonDiv.appendChild(pokemonSpeed);
                pokemonDiv.appendChild(PokeInfo);                                  
                pokemonDiv.appendChild(pokemonHeight);
                pokemonDiv.appendChild(pokemonWeight);
                pokemonDiv.appendChild(pokemonType);

             
            }

            const pokemonImg = document.createElement("img");
            pokemonImg.classList.add("PokeIMG")
            pokemonImg.src = data.sprites.front_default;
            pokemonImg.alt = data.name;
            
            const pokemonName = document.createElement("h5");
            pokemonName.innerText = data.name;    
            pokemonName.id = `pokemon-name-${data.name}`;
            pokemonName.classList.add("PokeName")
           
            const pokemonID = document.createElement("p");
            pokemonID.innerText = "ID: " + data.id;
            pokemonID.setAttribute("id", "ID");

            

            pokemonDiv.appendChild(pokemonImg);
            pokemonDiv.appendChild(pokemonName);
            pokemonDiv.appendChild(pokemonID);

            container.appendChild(pokemonDiv);
        }
    } catch (error) {
        console.error(error);
    }
}

function getOnTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function SearchAfterRandomPokemon() {

   const random = Math.floor(Math.random()*1025)
   const pokemonDiv2 = document.getElementsByClassName(`pokemon-${random}`)

   if (pokemonDiv2.length > 0) {
      const firstPokemonDiv2 = pokemonDiv2[0];
      firstPokemonDiv2.scrollIntoView({behavior: "smooth", block: "center"});
      firstPokemonDiv2.classList.add(`pokemon-search`);
      setTimeout(() => {
          firstPokemonDiv2.classList.remove("pokemon-search");
      }, 5000);
      return random
  }
}

function SearchAfterPokemon() {
   let search = document.getElementById("PokemonName").value.toLowerCase();
   const pokemonDiv = document.getElementById(`pokemon-${search}`);
   const pokemonDiv2 = document.getElementsByClassName(`pokemon-${search}`)

   if (pokemonDiv) {
       console.log(pokemonDiv)
       pokemonDiv.scrollIntoView({behavior: "smooth", block: "center"})
       pokemonDiv.classList.add(`pokemon-search`)
       setTimeout(() => {
           console.log("back to default");
           pokemonDiv.classList.remove( `pokemon-search`)
         }, 5000);
   } 

   if (pokemonDiv2.length > 0) {
      const firstPokemonDiv2 = pokemonDiv2[0];
      firstPokemonDiv2.scrollIntoView({behavior: "smooth", block: "center"});
      firstPokemonDiv2.classList.add(`pokemon-search`);
      setTimeout(() => {
          firstPokemonDiv2.classList.remove("pokemon-search");
      }, 5000);
  }
}









window.onload = function() {
    fetchAllPokemon();
};

const pokemonGewichte = ['light', 'middle', 'heavy']

function showPokemonsOfWeight(weight) {
   for (const pokemonWeight of pokemonGewichte) {
      const WeightClassName = `pokemon-${pokemonWeight}`;
      for (const element of document.getElementsByClassName(WeightClassName)) {
         showIf(element, weight == WeightClassName);
         console.log(WeightClassName)
      }
   }
}

function showLight() {
showPokemonsOfWeight('pokemon-light')   
}

function showMiddle() {
   
   showPokemonsOfWeight('pokemon-middle')   
   }
  
   function showHeavy() {
      showPokemonsOfWeight('pokemon-heavy')   
      
      }   


const pokemonTypen = ['normal', 'grass', 'fire', 'water', 'bug', 'poison', 'electric', 'ground', 'psychic', 'fairy', 'fighting', 'dragon', 'ice', 'steel', 'rock', 'ghost', 'dark'];

function showPokemonsOfType(type) {
   for (const pokemonType of pokemonTypen) {
      const typeClassName = `pokemon-${pokemonType}`;
      for (const element of document.getElementsByClassName(typeClassName)) {
         showIf(element, type == typeClassName);
      }
   }
}

function showIf(element, showPokemon) {
   if (showPokemon) {
      element.style.display="block";
   } else {
      element.style.display="none";
   }
}

function showNormal() {
   showPokemonsOfType('pokemon-normal');
}

function showGrass() {
   showPokemonsOfType('pokemon-grass')
   
}

function showFire() {
   showPokemonsOfType('pokemon-fire')
   
}

function showWater() {
   showPokemonsOfType('pokemon-water')
   
}

function showBug() {
   showPokemonsOfType('pokemon-bug')
   
}

function showPoison() {
   showPokemonsOfType('pokemon-poison')
   
}

function showElectric() {
   showPokemonsOfType('pokemon-electric')
   
}

function showGround() {
   showPokemonsOfType('pokemon-ground')
   
}

function showPsychic() {
   showPokemonsOfType('pokemon-psychic')
   
}

function showFairy() {
   showPokemonsOfType('pokemon-fairy')
   
}

function showFighting() {
   showPokemonsOfType('pokemon-fighting')
   
}

function showDragon() {
   showPokemonsOfType('pokemon-dragon')
   
}

function showIce() {
   showPokemonsOfType('pokemon-ice')
   
}

function showSteel() {
   showPokemonsOfType('pokemon-steel')
   
}

function showGhost() {
   showPokemonsOfType('pokemon-ghost')
   
}

function showDark() {
   showPokemonsOfType('pokemon-dark')
   
}

function showRock() {
   showPokemonsOfType('pokemon-rock')
}
function showFlying() {
   showPokemonsOfType('pokemon-flying')
   
}


addEventListener("keypress", function(event) {
   
   if (event.key === "Enter") {
     
     event.preventDefault();
     
     document.getElementById("PokemonSubmit").click();
   }
 
  });
 
 


 const pokemonGrößen = ['small', 'medium', 'big']

function showPokemonsOfHeight(height) {
   for (const pokemonSize of pokemonGrößen) {
      const HeightClassName = `pokemon-${pokemonSize}`;
      for (const element of document.getElementsByClassName(HeightClassName)) {
         showIf(element, height == HeightClassName);
      }
   }
}

const PokeGen = ['one','two','three','four','five','six','seven','eight','nine','ten']
function showPokemonsGen(id) {
   for (const Gen of PokeGen) {
      const GenClassName = `pokemon-${Gen}`;
      for (const element of document.getElementsByClassName(GenClassName)) {
         showIf(element, id == GenClassName);
         console.log(GenClassName)
      }
   }
}

function show1() {
   showPokemonsGen('pokemon-one')
 
}
function show2() {
   showPokemonsGen('pokemon-two')
 
}
function show3() {
   showPokemonsGen('pokemon-three')
   
}
function show4() {
   showPokemonsGen('pokemon-four')
}
function show5() {
   showPokemonsGen('pokemon-five')
}
function show6() {
   showPokemonsGen('pokemon-six')
}
function show7() {
   showPokemonsGen('pokemon-seven')
}
function show8() {
   showPokemonsGen('pokemon-eight')
}
function show9() {
   showPokemonsGen('pokemon-nine')
}
function showExtra() {
   showPokemonsGen('pokemon-ten')
}
function showSmall() {
   showPokemonsOfHeight('pokemon-small')
 }

 function showMedium() {
   
  showPokemonsOfHeight('pokemon-medium')
   
 }

 function showBig() {
  showPokemonsOfHeight('pokemon-big')
 }


 function showSearch() {
   const Typenbutton = document.getElementById('Typenbutton')
   let x = document.getElementById("hidden");
   if (x.style.display === "none") {
     x.style.display = "block";
     Typenbutton.innerText = '↑↑↑ Advanced Search ↑↑↑'
     Typenbutton.classList.add("noBorder")
     Typenbutton.scrollIntoView({behavior: "smooth", block: "center"});
   } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
 Typenbutton.innerText = '↓ ↓ ↓ Advanced Search ↓ ↓ ↓'
 Typenbutton.classList.remove("noBorder")
 
         x.style.display = "none";
          

   }
 }
function toGerman() {
   
}