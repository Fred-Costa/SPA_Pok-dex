const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

export async function renderPokemon(data) {
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    try {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    } catch (error) {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found :c';
        pokemonNumber.innerHTML = '';
        console.error('Error fetching Pokemon:', error);
    }
}

export function addCB(handlePrev, handleNext, submitHandler){

    buttonPrev.addEventListener('click', handlePrev);
    
    buttonNext.addEventListener('click', handleNext);
    
    form.addEventListener('submit', submitHandler);
}

export function getInput () {
    return input;
}
