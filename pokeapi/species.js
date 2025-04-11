window.onload = function() {
    fetchAllItems();
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

 const Bilder = []
 

 for (let i = 1; i < 1025; i++) {
  let  pokepng = document.createElement("img")

 pokepng.src =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
 pokepng.alt = "Bild"
 
 pokepng.setAttribute("id", `Bilder.`)
 console.log(pokepng.src.replace(/^https?:\/\//,""));

 Bilder.push(pokepng.src)

 
}



 async function fetchAllItems() {
  const container = document.getElementById("pokemonContainer");

  try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=2000");
      
      if (!response.ok) {
          throw new Error("Fehler!");
      }
     
      let data = await response.json();

      for (let Adesso of data.results) {
          let pokemonDetailsResponse = await fetch(Adesso.url);
          let data = await pokemonDetailsResponse.json();

          Complete.push(data.name)

          const pokemonDiv = document.createElement("div");
          
          pokemonDiv.setAttribute("id", `pokemon-${data.name}`);
          pokemonDiv.classList.add(`pokemon-${data.id}`)



          pokemonDiv.classList.add("pokemon");
   



          
          pokemonDiv.onclick = () => {
            console.log(data)
            

          
        

            
const Text = document.createElement("p")
Text.innerText =  data.flavor_text_entries.find(({language}) => language.name === 'en')?.flavor_text
Text.classList.add('Text')
console.log(Text)


const Fangrate = document.createElement("p")
Fangrate.innerText = "Capture Rate : " + data.capture_rate

const Happiness = document.createElement("p")
Happiness.innerText = "Happiness : " + data.base_happiness

          
          pokemonDiv.appendChild(Text)
          pokemonDiv.appendChild(Happiness)
          pokemonDiv.appendChild(Fangrate)
          
           
          }

          const PokeIMG = document.createElement("img")
          PokeIMG.src =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
          PokeIMG.alt = "Pokemon"
          console.log(PokeIMG)




          const pokemonName = document.createElement("h5");
          pokemonName.innerText = data.name;    
          pokemonName.id = `pokemon-${data.name}`;
        
          const pokemonID = document.createElement("p");
          pokemonID.innerText = "ID: " + data.id;
          pokemonID.setAttribute("id", "ID");



          

          pokemonDiv.appendChild(PokeIMG)
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

      const random = Math.floor(Math.random()*2051)
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
   
 


   
 