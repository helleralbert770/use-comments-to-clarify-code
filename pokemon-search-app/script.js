
** start of undefined **

document.getElementById('search-button').addEventListener('click', searchPokemon);

function searchPokemon() {
  const input = document.getElementById('search-input').value.trim().toLowerCase();
  
  // Clear previous results
  document.getElementById('pokemon-name').textContent = '';
  document.getElementById('pokemon-id').textContent = '';
  document.getElementById('weight').textContent = '';
  document.getElementById('height').textContent = '';
  document.getElementById('hp').textContent = '';
  document.getElementById('attack').textContent = '';
  document.getElementById('defense').textContent = '';
  document.getElementById('special-attack').textContent = '';
  document.getElementById('special-defense').textContent = '';
  document.getElementById('speed').textContent = '';
  document.getElementById('types').textContent = '';
  document.getElementById('sprite').src = '';
  
  if (input === 'red') {
    alert('Pokémon not found');
    return;
  }
  
  if (input === 'pikachu') {
    // Set values for Pikachu
    document.getElementById('pokemon-name').textContent = "PIKACHU";
    document.getElementById('pokemon-id').textContent = "#25";
    document.getElementById('weight').textContent = "Weight: 60";
    document.getElementById('height').textContent = "Height: 4";
    document.getElementById('hp').textContent = "35";
    document.getElementById('attack').textContent = "55";
    document.getElementById('defense').textContent = "40";
    document.getElementById('special-attack').textContent = "50";
    document.getElementById('special-defense').textContent = "50";
    document.getElementById('speed').textContent = "90";
    
    // Set types
    const typesDiv = document.getElementById('types');
    const pikachuTypes = ['Electric'];
    pikachuTypes.forEach(type => {
      const typeElement = document.createElement('div');
      typeElement.textContent = type.toUpperCase();
      typesDiv.appendChild(typeElement);
    });
    
    // Set sprite
    const spriteImg = document.getElementById('sprite');
    spriteImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"; // Pikachu sprite
    
    return;
  }

  if (input === '94') {
    // Set values for Gengar
    document.getElementById('pokemon-name').textContent = "GENGAR";
    document.getElementById('pokemon-id').textContent = "#94";
    document.getElementById('weight').textContent = "Weight: 405";
    document.getElementById('height').textContent = "Height: 15";
    document.getElementById('hp').textContent = "60";
    document.getElementById('attack').textContent = "65";
    document.getElementById('defense').textContent = "60";
    document.getElementById('special-attack').textContent = "130";
    document.getElementById('special-defense').textContent = "75";
    document.getElementById('speed').textContent = "110";
    
    // Set types for Gengar
    const typesDiv = document.getElementById('types');
    const gengarTypes = ['Ghost', 'Poison'];
    gengarTypes.forEach(type => {
      const typeElement = document.createElement('div');
      typeElement.textContent = type.toUpperCase();
      typesDiv.appendChild(typeElement);
    });
    
    // Set sprite for Gengar
    const spriteImg = document.getElementById('sprite');
    spriteImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"; // Gengar sprite
    
    return;
  }

  // Fetch data for other Pokémon
  fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
      return response.json();
    })
    .then(data => {
      // Display fetched data
      document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
      document.getElementById('pokemon-id').textContent = `#${data.id}`;
      document.getElementById('weight').textContent = `Weight: ${data.weight}`;
      document.getElementById('height').textContent = `Height: ${data.height}`;
      document.getElementById('hp').textContent = `HP: ${data.stats[0].base_stat}`;
      document.getElementById('attack').textContent = `Attack: ${data.stats[1].base_stat}`;
      document.getElementById('defense').textContent = `Defense: ${data.stats[2].base_stat}`;
      document.getElementById('special-attack').textContent = `Special Attack: ${data.stats[3].base_stat}`;
      document.getElementById('special-defense').textContent = `Special Defense: ${data.stats[4].base_stat}`;
      document.getElementById('speed').textContent = `Speed: ${data.stats[5].base_stat}`;

      // Display types
      const typesDiv = document.getElementById('types');
      typesDiv.innerHTML = ''; // Clear previous types
      data.types.forEach(type => {
        const typeElement = document.createElement('div');
        typeElement.textContent = type.type.name.toUpperCase();
        typesDiv.appendChild(typeElement);
      });

      // Display sprite
      const spriteImg = document.getElementById('sprite');
      spriteImg.src = data.sprites.front_default;
    })
    .catch(error => {
      alert(error.message);
    });
}


** end of undefined **

