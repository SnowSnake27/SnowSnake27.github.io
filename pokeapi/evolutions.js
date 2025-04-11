window.onload = function() {
    fetchAllEvos();
};

const button = document.getElementById('PokemonSubmit')
button.addEventListener("click", SearchAfterPokemon)

const randomButton = document.getElementById("RandomPokemon")
randomButton.addEventListener("click", SearchAfterRandomPokemon)

const autocomplete = document.getElementById("PokemonName");
const resultsHTML = document.getElementById("results");

let Complete = []

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


async function fetchAllEvos() {
    const container = document.getElementById("pokemonContainer");
    const allPokemons = []; 
   
    try {
        let response = await fetch("https://pokeapi.co/api/v2/location?limit=2000");

        if (!response.ok) {
            throw new Error("Fehler!");
        }

        let data = await response.json();

        for (let pokemon of data.results) {
            let pokemonDetailsResponse = await fetch(pokemon.url);
            let data = await pokemonDetailsResponse.json();
            console.log(data)

            Complete.push(data.name)

            const pokemonDiv = document.createElement("div");
            pokemonDiv.setAttribute("id", `pokemon-${data.name}`);
            pokemonDiv.classList.add(`pokemon-${data.id}`)



            pokemonDiv.classList.add("pokemon");
     



            
            pokemonDiv.onclick = () => {
              console.log(data)
              


              const ItemCost = document.createElement("a");
              ItemCost.innerText = " Region : " +  data.region.name ;
              ItemCost.setAttribute('href', `https://www.pokewiki.de/${data.region.name}`);



              
             pokemonDiv.appendChild(ItemCost)
            }

            const pokemonImg = document.createElement("img");           const pokemonName = document.createElement("h5");
            pokemonName.innerText = data.name;    
            pokemonName.id = `pokemon-${data.name}`;
            pokemonName.classList.add("PokeName")
           
            const pokemonID = document.createElement("p");
            pokemonID.innerText = "ID: " + data.id;
            pokemonID.setAttribute("id", "ID");

            

            
            pokemonDiv.appendChild(pokemonName);
            pokemonDiv.appendChild(pokemonID);

            container.appendChild(pokemonDiv);
        }
    } catch (error) {
        console.error(error);
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



     function SearchAfterRandomPokemon() {

        const random = Math.floor(Math.random()*1056)
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