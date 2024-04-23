import { renderPokemon, getInput, addCB } from "../views/start-view.js";
import { fetchPokemon } from "../services/start-service.js";

let firstPokemon = 1;

let searchPokemon = async () => {

    try {
        const firstRender = await fetchPokemon(firstPokemon);
        renderPokemon(firstRender);
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
    }

}

const handleSearch = async (searchValue) => {
    try {
        const pokemonData = await fetchPokemon(searchValue.toLowerCase());
        renderPokemon(pokemonData);
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
    }
};

const handlePrev = async () => {
    if (firstPokemon > 1) {
        firstPokemon -= 1;
        try {
            const pokemonData = await fetchPokemon(firstPokemon);
            renderPokemon(pokemonData);
        } catch (error) {
            console.error("Error fetching Pokemon:", error);
        }
    }
};

const handleNext = async () => {
    firstPokemon += 1;
    try {
        const pokemonData = await fetchPokemon(firstPokemon);
        renderPokemon(pokemonData);
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
    }
};

const submitHandler = (event) => {
    event.preventDefault();
    handleSearch(getInput().value.toLowerCase());
};


export function start() {
    addCB(handlePrev, handleNext, submitHandler);
    searchPokemon();
}
