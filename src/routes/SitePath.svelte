<script lang="ts">
	const { path }: { path: (string | [string, string])[] } = $props();
</script>

<sitepath>
	{#each path as p (p)}
		<span class="secondary"> &gt;&gt; </span>
		{#if typeof p === 'string'}
			{p}
		{:else}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={p[1]}>{p[0]}</a>
		{/if}
	{/each}
</sitepath>
