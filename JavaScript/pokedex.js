const poke_ctonainer = document.getElementById("poke_container")
const pokemon_number = 649
const colors = {
    normal: "#F5F5F5",
    fire: "#ff9999",
    water: "#abd5ff",
    grass: "#c7fcac",
    electric: "#fff459",
    ice: "#c2fcff",
    fighting: "#cf6651",
    poison: "#e573ff",
    ground: "#F4E7DA",
    flying: "#e6fbfc",
    psychic: "#ffbfe2",
    bug: "#ffb947",
    rock: "#a37c6c",
    ghost: "#bd86fc",
    dragon: "#97B3E6",
    dark: "#5e5e5e",
    steel: "##d9d9d9",
    fairy: "#ffedfd"
}

const fetchPokemon = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i)
    }
}

const mainTypes = Object.keys(colors)

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    createPokemonCard(pokemon)
}

fetchPokemon();

function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement("div")
    pokemonElement.classList.add("pokemon")

    const pokemonTypes = pokemon.types.map(element => element.type.name)
    const typeOne = mainTypes.find(
        type => pokemonTypes.indexOf(type) > -1
    )
    
    const typeTwo = function () {
        let type = mainTypes.find(type => pokemonTypes.indexOf(type) > 0)

        if (type != undefined) {
            return " / " + type[0].toUpperCase() + type.slice(1)
        } else {
            return ""
        }
    }


    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const color = colors[typeOne]

    pokemonElement.style.backgroundColor = color

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" />
        </div>
        <div class = "info">
            <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
            <h3 class="name">${name}</h3>
            <small class="type">type: <span>${typeOne[0].toUpperCase() + typeOne.slice(1) + typeTwo()}</span></small>
        </div>
    `
    pokemonElement.innerHTML = pokeInnerHTML

    poke_ctonainer.appendChild(pokemonElement)
}