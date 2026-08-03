<script lang="ts">
	import { asset } from '$app/paths';
	import SitePath from './SitePath.svelte';
</script>

<svelte:head>
	<title>GCBD - Accueil</title>
</svelte:head>

<SitePath path={['Accueil']}></SitePath>

<em>
	Toutes nos armes sont de catégorie 4 et peuvent être acquises par toute personne majeure sur
	simple présentation d'une pièce d'identité en cours de validité. Aucun permis ou autorisation
	spécifique ne sont requis.
</em>
<h2>Les armes de catégorie 4 dans les médias</h2>

<p>
	Les armes de catégorie 4 (ou catégorie D) sont divisées en plusieurs sous-catégories dont on peut
	retrouver des exemples dans divers médias. Les critères et listes d'exceptions sont consultables
	sur <a href="https://www.legifrance.gouv.fr/loda/id/LEGISCTA000037392711" target="_blank"
		>Légifrance</a
	>
	et
	<a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31877" target="_blank"
		>Service Public</a
	>, qui divise la catégorie 4 en sous-catégories allant de la lettre <strong>a</strong> à la lettre
	<strong>l</strong>:
</p>

<showcase>
	<weapon>
		<name>Winchester modèle 1887</name>
		<subcategory>f - Arme à poudre noire</subcategory>
		<img
			src={asset('/images/media/Terminator2_Winchester1887.png')}
			alt="T-800 de Terminator 2 sur une moto avec une Winchester modèle 1887 modifiée"
		/>
		<context
			>Dans le film <strong>Terminator 2</strong>, arme emblématique utilisée par le T-800.</context
		>
		<note
			>Contrairement à ce qui est montré dans le film, il ne faut pas jouer les majorettes lorsqu'on
			recharge l'arme.</note
		>
	</weapon>
	<weapon>
		<name>Pistolet automatique Gabbett-Fairfax "Mars"</name>
		<subcategory>g - Arme sur liste blanche</subcategory>
		<img src={asset('/images/media/AssassinsCreedSyndicate_GabettFairfaxMars.jpg')} alt="" />
		<context
			>Dans le jeu <strong>Assassin's Creed: Syndicate</strong>, arme améliorée la plus puissante du
			jeu de base.</context
		>
		<note
			>L'arme en jeu est plus petite que l'arme réelle. Elle est aussi utilisée par l'antagoniste
			éponyme du DLC <strong>Jack the Ripper</strong>.</note
		>
	</weapon>
	<weapon>
		<name>GPTD modèle 1968</name>
		<subcategory
			>a - Objets pouvant constituer une arme dangereuse pour la sécurité publique</subcategory
		>
		<img
			src={asset('/images/media/Mai68LaNuitDesBarricades_GPTD.jpg')}
			alt="Jeu 'Mai 68: La Nuit des Barricades' avec son plateau et sa boîte"
		/>
		<context
			>Dans le jeu de société <strong>Mai 68: La Nuit des Barricades</strong>, ils sont entassés au
			premier plan sur l'illustration de la boîte.</context
		>
		<note
			>Lors des évènements historiques sur lesquels se base le jeu, les Gros Pavés Tout Durs étaient
			sourcés localement afin d'en minimiser le transport.</note
		>
	</weapon>
</showcase>
