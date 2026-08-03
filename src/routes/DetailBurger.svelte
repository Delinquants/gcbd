<script lang="typescript">
	let { children, name = undefined, details = $bindable() } = $props();
</script>

<details {name} bind:this={details}>
	<summary>
		<burger>
			<bread></bread>
			<meat></meat>
			<bread></bread>
		</burger>
	</summary>
	<detail>{@render children()}</detail>
</details>

<style>
	burger {
		display: flex;
		flex-direction: column;
		align-items: end;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: 2em;
		width: 2em;
		box-sizing: border-box;
		border-width: 0.2em;
		border-color: #000;
		border-style: solid;
		border-radius: 50%;
	}
	bread,
	meat {
		height: 0.2em;
		border-radius: 50%;
		width: 80%;
		background-color: #000;
	}
	@media (prefers-color-scheme: dark) {
		burger {
			border-color: #ccc;
		}
		bread,
		meat {
			background-color: #ccc;
		}
	}
	meat {
		margin: 0.1em;
	}

	burger {
		transition:
			linear 0.2s border-width,
			linear 0.2s rotate,
			linear 0.2s background-color;
	}
	meat,
	bread {
		transition:
			linear 0.2s background-color,
			linear 0.2s border-radius,
			linear 0.2s margin,
			linear 0.2s width,
			linear 0.2s height;
	}

	[open] burger {
		border-width: 0.01em;
		rotate: -90deg;
		background-color: #ccc3;
	}
	[open] meat,
	[open] bread {
		border-radius: 0;
		width: 40%;
		height: 25%;
	}
	[open] meat {
		background-color: #fff;
		margin: 0;
	}
	[open] bread:first-child {
		background-color: #00f;
	}
	[open] bread:last-child {
		background-color: #f00;
	}
</style>
