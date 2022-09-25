<script>
    //import {createEventDispatcher} from 'svelte'
    import Card from './Card.svelte';
    import {FeedbackStore} from '../stores';

    export let data = {};

    //const dispatch = createEventDispatcher();

    const handleDelete = (itemId)=> {
        //dispatch('delete-feedback',itemId)
        FeedbackStore.update((current)=>{
            return current.filter(item=>item.id!==itemId);
        })
    }
</script>

    <Card>
        <div class="num-display">
            {data.rating}
        </div> 
        
        <button class="close" on:click="{()=>handleDelete(data.id)}">X</button>
        
        <p class="text-display">
            {data.text}
        </p>
    </Card>

    <style>
        .num-display{
            position:absolute;
            top:-10px;
            left:-10px;
            width:50px;
            height:50px;
            background:#ff6a95;
            color:fff;
            border:1px #eee solid;
            border-radius: 50%;
            padding: 10px;
            text-align: center;
            font-size: 19px;
        }

        .close{
            position:absolute;
            top:10px;
            right:20px;
            cursor:pointer;
            color:red;
            font-weight: bold;
            background: none;
            border:none;
        }
    </style>