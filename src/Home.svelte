<script>
    import Navbar from './Navbar.svelte';
    import { onMount } from 'svelte';
  
    onMount(() => {
      // window.location.hash = '#/login';
    });
  </script>
  
  <Navbar />
  <main>
    <h1>Welcome to the Home Page</h1>
    <p><a href="#/login">Go to Login</a></p>
  </main>
  
  <style>
  </style>