import Login from './Login.svelte';
import Home from './Home.svelte';
import Profile from './Profile.svelte';

export const routes = {
  '/': Login,
  '/home': Home,
  '/profile': Profile,
};