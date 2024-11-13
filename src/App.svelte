  <!-- for new -> npm install -->
  <!-- npm run dev -->
  <script>
	import { onMount } from 'svelte';
	import { fetchMessage } from './api'; // Import the fetchMessage function from api.js
  
	let message = '';
	let loading = true;
	let error = '';
  
	// Fetch message on component mount
	onMount(async () => {
	  try {
		message = await fetchMessage();
	  } catch (err) {
		error = err.message || 'Failed to load message';
	  } finally {
		loading = false;
	  }
	});
  </script>
  
  <main>
	{#if loading}
	  <h1>Loading...</h1>
	{:else if error}
	  <h1>Error: {error}</h1>
	{:else}
	  <h1>{message}</h1>
	{/if}
  </main>

  <link rel="stylesheet" href="styles.css" />