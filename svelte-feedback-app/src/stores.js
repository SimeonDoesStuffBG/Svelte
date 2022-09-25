import {writable} from 'svelte/store';

export const FeedbackStore = writable([
    {
      id:1,
      rating:10,
      text:'Random BS'
    },
    {
      id:2,
      rating:9,
      text:'More Random BS'
    },
    {
      id:3,
      rating:3,
      text:'Even More Random BS'
    },
  ]);