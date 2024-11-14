<script>
  import { onMount } from 'svelte';
  import { fetchMessage } from './api';
  import { routes } from './routes.js';
  import Router from 'svelte-spa-router';
  import Navbar from './Navbar.svelte';

  let message = '';
  let loading = true;
  let error = '';

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

<Router {routes} />

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