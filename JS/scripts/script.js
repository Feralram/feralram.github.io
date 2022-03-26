const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
    .then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    })
    .then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            
            var pokemonHTMLString = 
        `
            <li class="card">
            <h2 class="card-title">${data.id}. ${data.name}</h2>
            <p class="card-subtitle">Types: ${data.types.map((type) => type.type.name).join(', ')}</p>
            <p class="card-subtitle">Abilities: ${data.abilities.map((ability) => ability.ability.name).join(', ')}</p>
            
        `

        

        let stringStats =''
        for(var j=0;j<6;j++){
        stringStats += `<p class="card-subtitle"> ${data.stats[j].stat.name}: ${data.stats[j].base_stat}</p>`;
        }

        stringStats+='</li>'

        pokemonHTMLString+=stringStats;

        card.innerHTML = pokemonHTMLString;
        }
    });
    
}



const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

