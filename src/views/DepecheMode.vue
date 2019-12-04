<template>
	<div class="c-band">
		<Navigation/>
	</div>
	
</template>

<script>
import { initialize, queue, clear, start } from '../utils/lightning.js';

export default {
	async mounted() {
		await initialize();
	    clear();
		queue(0, 4);
		queue(1, 4);
		queue(0, 4);
		queue(2, 6);
		queue(3, 4);
		queue(4, 5);
		queue(5, 6);
		queue(7, 3);
		queue(6, 2);
		queue(0, 10);
		start();
	}
}
</script>

<style scoped>
  .c-band {
    background-image: url(../assets/depeche.jpg);
  }
</style>