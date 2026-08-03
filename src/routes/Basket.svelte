<script lang="ts">
	import bag_base from '$lib/assets/bag_base.svg';
	import bag_full from '$lib/assets/bag_full.svg';
	import * as store from '$lib/store/access';
	import { onMount } from 'svelte';
	import BasketItem from './BasketItem.svelte';
	const cart = $state(store.basket);

	let show_alert = $state(false);
	function update_cart() {
		store.update_basket();
		show_alert = false;
	}
	onMount(update_cart);
</script>

<basket>
	<details name="dropdown">
		<summary onclick={update_cart}>
			<img src={$cart.length > 0 ? bag_full : bag_base} alt="Shopping cart" />
		</summary>
		<detail>
			{#each $cart as cart_item (cart_item.id)}
				<BasketItem item={cart_item} onUpdate={update_cart}></BasketItem>
			{:else}
				<p>Votre sac de pierres est vide</p>
			{/each}
			{#if $cart.length > 0}
				<button onclick={() => (show_alert = true)}>Commander</button>
				{#if show_alert}
					<alert>
						Nous n'avons plus de stock pour certains éléments de votre commande, veuillez les
						retirer de votre panier et réessayer:
						<ul>
							{#each $cart as cart_item (cart_item.id)}
								<li>{cart_item.name}</li>
							{/each}
						</ul>
					</alert>
				{/if}
			{/if}
		</detail>
	</details>
</basket>
