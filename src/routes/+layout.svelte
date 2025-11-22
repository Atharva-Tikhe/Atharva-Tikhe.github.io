<script lang="ts">
	import '../app.css';
	import Nav from '$lib/nav.svelte';
</script>

<svelte:head>
	<title>Atharva Tikhe</title>
</svelte:head>

<Nav />

<main>
	<slot />
</main>
