<script>
	import SitePath from '../SitePath.svelte';
</script>

<svelte:head>
	<title>À propos</title>
</svelte:head>

<SitePath path={['À propos - Mentions légales']}></SitePath>

<h1>Mentions légales</h1>

<p>
	Ce site a une visée humoristique et de sensibilisation quant à l'existence d'armes non soumises à
	autorisation en France.
</p>
<p>
	Les Gros Cailloux Bien Durs (GCBD) ne sont pas - à ma connaissance - considérés comme des armes de
	catégorie 4, et leur tendance à apparaître naturellement dans les espaces publics rendrait leur
	contrôle effectif complexe ; commencer par contrôler les armes devant être manufacturées serait un
	début plus simple et plus souhaitable.
</p>

<h1>Mentions légales</h1>

<p><strong>Propriétaire :</strong> {import.meta.env.VITE_SITE_OWNER}</p>
<p><strong>Contact :</strong> {import.meta.env.VITE_SITE_CONTACT}</p>

<h1>Crédits illustrations</h1>

<p>
	Les photographies présentes sur le site sont des images libres de droits qui ont été découpées
	pour satisfaire le besoin d'illustration sur le site.
</p>

<ul>
	<li>
		<strong>Illustration de la page d'accueil :</strong>
		<ul>
			<li>
				<a
					href="https://leconservatoiredujeu.fr/index.php/2020/11/10/un-metro-de-retard-02-mai-68-la-nuit-des-barricades/"
					target="_blank"
				>
					GPTD modèle 1968 <em>- Article de blog sur le jeu "Mai 68, La Nuit des Barricades"</em>
				</a>
			</li>
			<li>
				Pistolet automatique Gabbett-Fairfax "Mars" <em
					>- Instantané du jeu "Assassin's Creed: Syndicate"</em
				>
			</li>
			<li>
				Winchester modèle 1887 <em>- Instantané du film "Terminator 2"</em>
			</li>
		</ul>
	</li>
	<li>
		<strong>Illustrations du "magasin" :</strong>
		<ul>
			<li>
				<a
					href="https://www.pexels.com/photo/faceless-man-throwing-stone-on-hand-outdoors-1310759/"
					target="_blank"
				>
					GCBD - L'original
				</a>
			</li>
			<li>
				<a
					href="https://www.pexels.com/photo/close-up-view-of-a-person-holding-a-gym-chalk-7671472/"
					target="_blank"
				>
					GCBD longue distance
				</a>
			</li>
			<li>
				<a
					href="https://www.pexels.com/photo/laborer-carrying-heavy-rocks-outdoors-31137146/"
					target="_blank"
				>
					GCBD - Pack de 8
				</a>
			</li>
			<li>
				<a
					href="https://www.pexels.com/photo/topless-man-in-black-shorts-standing-beside-brown-wooden-table-11241448/"
					target="_blank"
				>
					GCBD d'entraînement
				</a>
			</li>
			<li>
				<a href="https://www.pexels.com/photo/man-holding-rock-17146230/" target="_blank">
					Mon premier GCBD - modèle enfant
				</a>
			</li>
			<li>
				<a
					href="https://commons.wikimedia.org/wiki/File:Sous_les_pav%C3%A9s_-_la_plage.jpg"
					target="_blank"
				>
					GPTD
				</a>
			</li>
		</ul>
	</li>
</ul>
