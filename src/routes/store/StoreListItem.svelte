<script lang="ts">
	import { resolve } from '$app/paths';
	import * as store_access from '$lib/store/access';
	import type { ListingItem } from '$lib/store/types';

	const { item }: { item: ListingItem } = $props();
	let added_count = $state(0);
	let last_timeout: number | undefined = undefined;
	async function add_handler() {
		await store_access.add(item.id, 1);
		added_count += 1;
		if (last_timeout !== undefined) {
			window.clearTimeout(last_timeout);
		}
		last_timeout = window.setTimeout(() => {
			last_timeout = undefined;
			added_count = 0;
		}, 1000);
	}
</script>

<shop-item>
	<a class="item" href={resolve(`/store/item?id=${item.id}`)}>
		<name>{item.name}</name>
		<img src={item.image || '/test'} alt={item.name} />
		{#if item.short_description}
			<description
				>{item.short_description.length > 120
					? `${item.short_description.slice(0, 117)}...`
					: item.short_description}</description
			>
		{/if}
	</a>
	<button onclick={add_handler}
		>Ajouter au sac {#if added_count}
			+{added_count}{/if}</button
	>
</shop-item>
