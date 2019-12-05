<template>
  <div class="container">
    <Navigation />
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
// @ is an alias to /src
import { initialize, queue, show, clear, blackout } from '../utils/lightning.js';

export default {
	async mounted() {
		await initialize();
		await clear();
		blackout();
	}
}
</script>

<style>
.container {
  background: #111;
}
</style>