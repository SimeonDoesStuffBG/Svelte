<script>
  import Items from './components/Items.svelte';
  import Stats from './components/Stats.svelte';
  import FeedbackForm from './components/FeedbackForm.svelte';
  

  //$: count = feedback.length;
  //$: average = (count===0)?0:feedback.reduce((a,{rating})=>a+rating, 0)/count;

  /*const deleteFeedback = (e) =>{
    const itemId = e.detail;
    feedback = feedback.filter(item=>item.id !== itemId);
  }*/

  const addFeedback = (e)=>{
    const newFeedback = e.detail;
    feedback = [newFeedback,...feedback];
  }
</script>

<main class="container">
  <h1>Feedback App</h1>
  <FeedbackForm/>
  <Stats/>
    
    <Items/>
  </main>
  <footer>
    <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
    </p>
  </footer>


<style>
 
</style>
