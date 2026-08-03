<script lang="ts">
	const { children, closable = true } = $props();
	let closed = $state(false);
</script>

{#if !closed}
	<style>
		error {
			display: block;
			width: 80%;
			margin: 0 auto;
			padding: 0.8em 1em;
			border-color: #e00;
			border-width: 1px;
			border-radius: 1em;
			border-style: solid;
			background-color: #600;
		}
		.error-button {
			border: none;
			background-color: transparent;
			float: right;
		}
		.error-button:hover {
			cursor: pointer;
		}
	</style>
	<error>
		{#if closable}
			<button class="error-button" type="button" onclick={() => (closed = true)}>X</button>
		{/if}
		{@render children()}
	</error>
{/if}
