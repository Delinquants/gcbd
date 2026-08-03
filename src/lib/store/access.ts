/**
 * All store interaction functions
 */
import type { BasketItem, ListingItem, StoreItem } from './types';
import { items_collection } from './collection';
import { writable, type Writable } from 'svelte/store';

/**
 * The current user's basket.
 * `update_basket` should be called on mount to ensure that this is up-to-date.
 */
const basket: Writable<BasketItem[]> = writable([]);

/**
 * List items available in the store
 * @param page The current page's index
 * @param count The number of items expected per page
 * @returns The list of items on the current page
 */
async function list(page = 0, count = 16): Promise<ListingItem[]> {
	return Promise.resolve(items_collection.slice(page * count, (page + 1) * count));
}

/**
 * Get a specific store item's information
 * @param id The store item's ID
 * @returns The store item's information
 */
async function get(id: string): Promise<StoreItem> {
	const item = items_collection.find((i) => i['id'] === id);
	if (item !== undefined) {
		return Promise.resolve(item);
	}
	return Promise.reject('Item not found');
}

/**
 * Update the saved `basket` property
 * @returns The new `basket` value
 */
async function update_basket(): Promise<BasketItem[]> {
	/**
	 * Get the current shopping basket state.
	 */
	if (typeof window === 'undefined') {
		return Promise.reject("Can't get basket on server side");
	}
	const cart = JSON.parse(localStorage.getItem('cart_items') || '[]');
	basket.set(cart);
	return Promise.resolve(cart);
}

/**
 * Add items to the user's basket
 * @param id The item's ID
 * @param quantity The quantity to add
 * @returns The new user basket state
 */
async function add(id: string, quantity: number): Promise<BasketItem[]> {
	/**
	 * Add an item to the basket and obtain the resulting updated basket in return.
	 */
	if (typeof window === 'undefined') {
		return Promise.reject("Can't update basket on server side");
	}
	let cart: BasketItem[] = JSON.parse(localStorage.getItem('cart_items') || '[]');
	const cart_item = cart.find((v) => v.id == id);
	if (cart_item) {
		cart_item.quantity += quantity;
		console.log('QTY', cart_item.quantity, cart_item.quantity <= 0);
		if (cart_item.quantity <= 0) {
			cart = cart.filter((i) => i !== cart_item);
			console.log('filtered', cart);
		}
	} else if (quantity > 0) {
		// TODO: add item existence control
		const store_item = items_collection.find((v) => v.id == id);
		if (store_item === undefined) {
			return Promise.reject(`Unknown item reference: ${id}`);
		}
		cart.push({ ...store_item, quantity: quantity });
	}
	basket.set(cart);
	localStorage.setItem('cart_items', JSON.stringify(cart));
	return Promise.resolve(cart);
}

export { list, get, update_basket, add, basket };
