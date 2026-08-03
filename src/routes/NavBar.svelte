<script lang="ts">
	import { resolve } from '$app/paths';
	const { onclick = undefined } = $props();
</script>

<ul>
	<li>
		<a href={resolve('/')} {onclick}>Accueil</a>
	</li>
	<li>
		<a href={resolve('/store')} {onclick}>Magasin</a>
	</li>
	<li>
		<a href={resolve('/history')} {onclick}>Histoire du GCBD</a>
	</li>
	<li>
		<a href={resolve('/about')} {onclick}>À propos</a>
	</li>
</ul>
