<script>
    import {pokemon} from '../stores/pokestore';
	import PokemoncCard from '../components/PokemoncCard.svelte';

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if(searchTerm){
            filteredPokemon = $pokemon.filter(pokeman=>pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else{
            filteredPokemon=[...$pokemon];
        }
    }
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>
<main>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type='text' placeholder="Search Pokemon" bind:value={searchTerm}/>
<div class=" py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman (pokeman.id)}
    <PokemoncCard {pokeman}/>
    {/each}
</div>

</main>
<footer>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</footer>


