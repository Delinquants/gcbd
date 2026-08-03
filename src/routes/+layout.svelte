<script lang="ts">
	import { asset } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from './NavBar.svelte';
	import Burger from './DetailBurger.svelte';
	import Basket from './Basket.svelte';

	let { children } = $props();
	let mininav_details: HTMLElement | undefined = $state();
	let onclick = () => {
		mininav_details?.removeAttribute('open');
	};
</script>

<svelte:head>
	<title>Salut les terriens</title>
	<meta name="author" content={import.meta.env.VITE_SITE_OWNER} />
	<meta name="description" content="Achat de GCBB - Arme de catégorie 4" />
	<link rel="icon" type="image/x-icon" href={favicon} />
	<link rel="stylesheet" href={asset('/styles/base.css')} />
</svelte:head>

<header>
	<flagpole></flagpole>
	<logo></logo>

	<nav><NavBar /></nav>
	<mininav>
		<Burger name="dropdown" bind:details={mininav_details}>
			<NavBar {onclick} />
		</Burger>
	</mininav>
	<Basket></Basket>
</header>
<content>
	{@render children()}
</content>

<footer>
	<div style="height: 200px;"></div>
</footer>

<style>
	flagpole {
		content: url('/static/images/flag.svg');
		display: block;
		position: fixed;
		top: 4em;
		right: 0;
		max-width: 10%;
	}
	@media (min-width: 1900px) {
		flagpole {
			max-width: 20%;
			right: 0;
		}
	}
	@media (max-width: 1200px) {
		flagpole {
			display: none;
		}
	}
</style>
