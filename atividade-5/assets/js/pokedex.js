console.log("Carregando Pokemons");
fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
  .then((response) => response.json())
  .then(carregaPokemons)
  .catch((erro) => console.log(erro));
console.log("Pokemons Carregados");
let pokemonLength = 0;
let loadingPokemon = false;

async function carregaPokemons(response) {
  const pokemons = response.results;
  for (let i in pokemons) {
    const pokeResponse = await fetch(pokemons[i].url);
    const pokemon = await pokeResponse.json();
    const specieResponse = await fetch(pokemon.species.url);
    pokemon.species = await specieResponse.json();
    showPokemon(pokemon);
  }
  pokemonLength += pokemons.length;
  loadingPokemon = false;
}

function showPokemon(pokemon) {
  const pokemonListEl = document.getElementById("pokemons");
  const name = pokemon.name;
  const weight = pokemon.weight / 10;
  const height = pokemon.height / 10;
  const id = `${pokemon.id}`.padStart(4, 0);
  const tags = pokemon.types.map((item) => {
    return item.type.name;
  });
  const tag = tags[0];
  let image = pokemon.sprites.front_default;
  if (pokemon.sprites.other["official-artwork"]) {
    image = pokemon.sprites.other["official-artwork"].front_default;
  }
  const flavorText = pokemon.species.flavor_text_entries.find((item) => {
    if (item.language.name == "en") {
      return true;
    }
    return false;
  });

  const text = flavorText.flavor_text
    .replaceAll("\n", " ")
    .replaceAll("\t", " ")
    .replaceAll("", " ");

  pokemonListEl.innerHTML += `
    <article class="card ${tag}">
      <span class="number">${id}</span>
      <div class="texts">
        <h2>${name}</h2>
        <p><strong>Altura: </strong>${height} m</p>
        <p><strong>Peso: </strong>${weight} kg</p>
        <p>${text}</p>
        <div class="tags">
          ${tags
            .map((tag) => `<span class="tag ${tag}">${tag}</span>`)
            .join("")}
        </div>
      </div>
      <img src="${image}" alt="${name}" />
    </article>
  `;
}

window.addEventListener("scroll", carregaPokemon);

function carregaPokemon() {
  const scrollPercent =
    window.scrollY / (document.body.scrollHeight - innerHeight);
  if (scrollPercent > 0.8 && !loadingPokemon) {
    loadingPokemon = true;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=" + pokemonLength)
      .then((response) => response.json())
      .then(carregaPokemons)
      .catch((erro) => console.log(erro));
  }
}
