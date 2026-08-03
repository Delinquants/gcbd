interface ListingItem {
	/** The store item's ID */
	id: string;
	/** The store item's name */
	name: string;
	/** An illustration for the store item */
	image?: string;
	/** A short description (<100 characters) to display in quick overviews */
	short_description: string;
	/** Whether this item may be ordered */
	available?: boolean;
	/** The item's price */
	price?: number;
}

interface StoreItem extends ListingItem {
	/** An HTML-enabled description assumed to be provided already-sanitized. */
	full_description?: string;
}

interface BasketItem extends ListingItem {
	quantity: number;
}

export type { BasketItem, ListingItem, StoreItem };
