<script>
    //import {onMount, onDestroy} from 'svelte'
    import {FeedbackStore} from '../stores';
    import Item from './Item.svelte';
    import {fade, scale} from 'svelte/transition'
    
    //let feedback = [];

    //const unsub = FeedbackStore.subscribe((data)=>feedback = data);

    //onDestroy(()=>{
    //    unsub();
    //})
</script>



    {#each $FeedbackStore as feedbackItem (feedbackItem.id)}
        <div in:scale out:fade>
            <Item data = {feedbackItem}/>
        </div>
    {/each}


