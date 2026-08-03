<script lang="ts">
	import type { BasketItem } from '$lib/store/types';
	import * as store from '$lib/store/access';
	let { item, onUpdate = () => {} }: { item: BasketItem; onUpdate: () => void } = $props();
</script>

<basket-item>
	<basket-item-label>
		<quantity>{item.quantity}</quantity> * <name>{item.name}</name>
	</basket-item-label>
	<controls>
		<button
			type="button"
			onclick={() => {
				store.add(item.id, -1).then(onUpdate);
			}}>-</button
		>
		<button
			type="button"
			onclick={() => {
				store.add(item.id, +1).then(onUpdate);
			}}>+</button
		>
	</controls>
</basket-item>

<style>
	basket-item {
		display: flex;
		flex-direction: row;
	}
	basket-item-label name {
		font-weight: bold;
	}
	quantity,
	name {
		display: inline;
	}
	controls {
		padding-left: 0.8em;
		margin-left: auto;
		margin-right: 0;
	}
</style>
