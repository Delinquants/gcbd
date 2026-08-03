<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import * as store_access from '$lib/store/access';
	import SitePath from '../SitePath.svelte';
	import StoreListItem from './StoreListItem.svelte';

	let current_page = $state(-1);
	onMount(() => {
		current_page = parseInt(page.url.searchParams.get('page') || '0') || 0;
	});
	const store_page_request = $derived(store_access.list(current_page, 16));
</script>

<svelte:head>
	<title>Pan pan boum boum</title>
</svelte:head>

<SitePath path={['Magasin']}></SitePath>

<shop>
	{#await store_page_request}
		Getting store items
	{:then page_items}
		{#each page_items as page_item (page_item.id)}
			<StoreListItem item={page_item}></StoreListItem>
		{:else}
			No item found for this page
		{/each}
	{:catch}
		Failed to get store items
	{/await}
</shop>
