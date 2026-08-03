<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import * as store_access from '$lib/store/access';
	import SitePath from '../../SitePath.svelte';
	import Error from '../../Error.svelte';

	let item_id = $state('');
	onMount(() => {
		item_id = page.url.searchParams.get('id') || '';
	});
	const item_request = $derived(store_access.get(item_id));
</script>

<svelte:head>
	{#await item_request}
		<title>Finding item</title>
	{:then item}
		<title>{item.name}</title>
	{:catch}
		<title>Item not found</title>
	{/await}
</svelte:head>

{#await item_request}
	<SitePath path={[['Magasin', resolve('/store')], 'Pending item']}></SitePath>
	Getting store item
{:then item}
	<SitePath path={[['Magasin', resolve('/store')], item.name]}></SitePath>
	<img src={item.image || '/test'} alt="Image de {item.name}" />
	<name>{item.name}</name>
	{#if item.short_description}
		<description
			>{item.short_description.length > 120
				? `${item.short_description.slice(0, 117)}...`
				: item.short_description}</description
		>
	{/if}
	{#if item.full_description}
		<notes>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html item.full_description}
		</notes>
	{/if}
{:catch}
	<SitePath path={[['Magasin', resolve('/store')], 'Item error']}></SitePath>
	<Error closable={false}>Failed to get store item</Error>
{/await}

<style>
	name {
		font-weight: bold;
		display: block;
		font-size: 2.5em;
		margin: 0 auto 0.5em auto;
		text-align: center;
	}
	img {
		float: right;
		margin: 0 0 1em 2em;
		max-width: 40%;
	}
	notes {
		text-align: justify;
	}
	description {
		display: block;
		font-style: italic;
		font-size: 0.8em;
		text-align: center;
	}
</style>
