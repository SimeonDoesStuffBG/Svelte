import { writable } from "svelte/store";

export const pokemon = writable([]);
const fetchPokemon = async()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const res = await fetch(url);
    const data = await res.json();

    const availablePokemon = data.results.map((datum,index)=>{
        return {
            name:datum.name,
            id:index+1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
        }
    });
    pokemon.set(availablePokemon);
}
fetchPokemon();