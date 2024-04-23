export const fetchPokemon = async (pokemon) => {
    try {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        const data = await APIResponse.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error" + error);
    }

};

