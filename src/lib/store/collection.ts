/**
 * In a proper store implementation, this file would be removed and the corresponding data fed from a server API.
 */
import { asset } from '$app/paths';
import type { StoreItem } from './types';

/**
 * Mocked store content.
 * This should only be accessed through the store access functions.
 */
const items_collection: StoreItem[] = [
	{
		id: 'gcbd_original',
		name: "GCBD - l'original",
		image: asset('/images/store/pexels-igrevsky-1310759_cr.jpg'),
		short_description:
			'Indémodable et intemporel,  ce modèle bien connu de tous vous permettra une défense efficace en toutes situations.',
		price: 60,
		available: true,
		full_description: `
            <p>
                Le Gros Caillou Bien Dur est l'arme de défense non létale de référence, plébiscitée par les défenseurs de la société pour son pouvoir d'intimidation exceptionnel.
                Ce projectile de 30 à 80 mm est conçu pour neutraliser instantanément toute menace sans recours à la force létale.
                Propulsable à plus de 50 km/h, il délivre une énergie de 500 Joules, soit l'équivalent du choc d'un boxeur poids lourd.
                Précis, robuste et extrêmement dissuasif, il constitue la solution de protection souveraine pour sécuriser votre domicile ou intervenir en milieu professionnel.
            </p>

            <h2>Puissance d'Arrêt et Impact Dissuasif</h2>

            <p>
                Une efficacité de zone combinée à un choc cinétique hors norme :
            </p>
            <ul>
                <li>
                    <strong>Projectiles de 30 à 80 mm :</strong> Le diamètre impressionnant des GCBD assure une surface de contact large et adaptable à la situation, maximisant le transfert d'énergie pour stopper l'assaillant sans perforation.
                </li>

                <li>
                    <strong>Puissance de 500 Joules :</strong> Une force de frappe doublement supérieure aux pistolets de défense classiques, garantissant une mise hors d'état de nuire immédiate jusqu'à 15 mètres.
                </li>

                <li>
                    <strong>Equipement à deux mains :</strong> Ce système permet de disposer de deux tirs rapides. La forme facilite un rechargement instinctif même sous haute tension.
                </li>

                <li>
                    <strong>Effet Psychologique Majeur :</strong> Le geste de propulsion ainsi que son design tactique imposant suffisent souvent à intimider un agresseur.
                </li>
            </ul>

            <h2>Ergonomie Tactique et Précision</h2>

            <p>
                Une manipulation simplifiée pour tous les profils d'utilisateurs :
            </p>
            <ul>
                <li>
                    <strong>Structure Composite Haute Densité :</strong> Le corps de l'arme est fabriqué dans un matériau ultra-résistant aux chocs et aux intempéries, tout en maintenant un poids équilibré.
                </li>
                <li>
                    <strong>Prise en Main Ambidextre :</strong> Sa forme ergonomique et sa taille modérée permettent une utilisation sûre et efficace pour tous.
                </li>
                <li>
                    <strong>Pack Prêt à l'Emploi :</strong> Livré seul ou en lot allant jusqu'à 8 pour une protection opérationnelle dès la réception.
                </li>
                <li>
                    <strong>Efficience stratégique :</strong> L'arme et la munition ne font qu'un, pour une émission de 100% de plus de munition par munition.
                </li>
            </ul>

            <h2>Pourquoi Choisir le GCBD ?</h2>

            <ul>
                <li>
                    <strong>Référence Professionnelle :</strong> Utilisé mondialement pour la défense de la société, c'est l'outil de défense le plus éprouvé du marché.
                </li>
                <li>
                    <strong>Neutralisation Sans Danger Mortel :</strong> Une alternative crédible aux armes à feu permettant de rester dans le cadre de la légitime défense avec une efficacité maximale.
                </li>
                <li>
                    <strong>Précision Longue Distance :</strong> Contrairement aux sprays ou petits modèles de poche, il conserve une trajectoire stable et précise jusqu'à 12-15 mètres.
                </li>
            </ul>

            <h2>Fiche Technique</h2>
            <table class="techspec"><tbody>
            <tr><th>Caractéristique</th><th>Spécification Technique</th></tr>
            <tr><td>Catégorie</td><td>D</td></tr>
            <tr><td>Diamètre Projectile</td><td>50 à 80 mm</td></tr>
            <tr><td>Puissance</td><td>500 Joules</td></tr>
            <tr><td>Vitesse de sortie</td><td>Env. 40 km/h</td></tr>
            <tr><td>Capacité</td><td>1 ou 2 coups</td></tr>
            <tr><td>Longueur</td><td>60 à 80 mm</td></tr>
            <tr><td>Poids</td><td>Env. 0,500 kg (Selon approvisionnement)</td></tr>
            <tr><td>Recharge</td><td>Ramassage manuel recommandé</td></tr>
            </tbody></table>

            <h2>L'avis de l'Expert</h2>

            <cite>
                Le GCBD original de France reste le roi incontesté de la défense personnelle. Avec ses 500 Joules, il joue dans une catégorie à part. Ce que j'apprécie, c'est sa simplicité désarmante : on vise, on tire, et l'effet est immédiat. C'est une arme qui impose le respect instantanément. Si vous cherchez le maximum de sécurité pour votre foyer avec un matériel indestructible, c'est l'investissement numéro un.
            </cite>
        `
	},
	{
		id: 'gcbd_ld',
		name: 'GCBD longue distance',
		image: asset('/images/store/pexels-cottonbro-7671472_cr.jpg'),
		short_description:
			"Avec sa forme ergonomique et son encoche facilitant la prise en main, ce modèle permet d'atteindre des cibles lointaines sans coup férir. Ne pas utiliser au-dessus d'un lac ou étang.",
		available: true,
		full_description: `
            <p>
                Le GCBD Longue Distance est le modèle spécialisé dans la défense face à des unité lointaines du Gros Cailloux Bien Dur connu et éprouvé.
                Ce projectile de 20 à 40 mm est conçu pour atténue efficacement toute menace sans recours à la force létale.
                Propulsable à plus de 50 km/h, il délivre une énergie de 300 Joules, soit l'équivalent du choc d'un boxeur poids lourd.
                Précis, robuste et extrêmement dissuasif, il constitue la solution de protection souveraine pour sécuriser votre quartier ou intervenir en milieu urbain.
            </p>

            <h2>Puissance d'Arrêt et Impact Dissuasif</h2>

            <p>
                Une efficacité de zone combinée à un choc cinétique hors norme :
            </p>
            <ul>
                <li>
                <strong>Projectiles de 20 à 40 mm :</strong> La forme aérodynamique des GCBD Longue Distance assure une surface de contact connue et adaptée à la situation, maximisant le transfert d'énergie pour stopper l'assaillant sans perforation.
                </li>

                <li>
                <strong>Puissance de 300 Joules :</strong> Une force de frappe légèrement inférieure aux GCBD standards, garantissant une intimidation efficace jusqu'à 40 mètres.
                </li>

                <li>
                <strong>Equipement à deux mains :</strong> Ce système permet de disposer de deux tirs rapides. La forme facilite un rechargement instinctif même sous haute tension.
                </li>

                <li>
                <strong>Effet Psychologique Majeur :</strong> Le geste de propulsion ainsi que son design tactique imposant suffisent souvent à intimider un agresseur.
                </li>
            </ul>

            <h2>Ergonomie Tactique et Précision</h2>

            <p>
                Une manipulation simplifiée pour tous les profils d'utilisateurs :
            </p>
            <ul>
                <li>
                    <strong>Structure Composite Haute Densité :</strong> Le corps de l'arme est fabriqué dans un matériau ultra-résistant aux chocs et aux intempéries, tout en maintenant un poids équilibré.
                </li>
                <li>
                    <strong>Prise en Main Ambidextre :</strong> Sa forme ergonomique et sa taille modérée permettent une utilisation sûre et efficace pour tous.
                </li>
                <li>
                    <strong>Efficience stratégique :</strong> L'arme et la munition ne font qu'un, pour une émission de 100% de plus de munition par munition.
                </li>
            </ul>

            <h2>Pourquoi Choisir le GCBD Longue Distance ?</h2>

            <ul>
                <li>
                <strong>Référence Professionnelle :</strong> Utilisé mondialement pour la défense de la société, c'est l'un des outils de défense les plus éprouvés du marché.
                </li>
                <li>
                <strong>Neutralisation Sans Danger Mortel :</strong> Une alternative crédible aux armes à feu permettant de rester dans le cadre de la légitime défense avec une efficacité maximale.
                </li>
                <li>
                <strong>Précision Longue Distance :</strong> Contrairement aux sprays ou petits modèles de poche, il conserve une trajectoire stable et précise jusqu'à 40 mètres.
                </li>
            </ul>

            <h2>Fiche Technique</h2>
            <table class="techspec"><tbody>
            <tr><th>Caractéristique</th><th>Spécification Technique</th></tr>
            <tr><td>Catégorie</td><td>D</td></tr>
            <tr><td>Diamètre Projectile</td><td>60 à 100 mm</td></tr>
            <tr><td>Puissance</td><td>300 Joules</td></tr>
            <tr><td>Vitesse de sortie</td><td>Env. 40 km/h</td></tr>
            <tr><td>Capacité</td><td>2 coups (Double canon)</td></tr>
            <tr><td>Longueur</td><td>60 à 100 mm</td></tr>
            <tr><td>Poids</td><td>0,300 kg</td></tr>
            </tbody></table>

            <h2>L'avis de l'Expert</h2>

            <cite>
                Le GCBD Longue Distance reste le roi incontesté de la défense personnelle . Avec sa portée de 40 mètres , il joue dans une catégorie à part. Ce que j'apprécie, c'est sa simplicité désarmante : on vise, on tire, on compte jusqu'à 3, et l'effet est immédiat. C'est une arme imposante qui impose le respect instantanément. Si vous cherchez le maximum de sécurité pour votre quartier avec un matériel indestructible, c'est l'investissement numéro un.
            </cite>
        `
	},
	{
		id: 'gcbd_p8',
		name: 'GCBD - Pack de 8',
		image: asset('/images/store/pexels-chris-wade-ntezicimpa-564856410-31137146_cr.jpg'),
		short_description:
			'Le format familial du GCBD original, pour un usage à plusieurs ou des lancers répétés sans récupération. Assurez-vous de la position de vos cibles entre chaque lancer.',
		full_description: `
        <p>
            Le Pack de 8 GCBD est la solution de protection ultime pour disposer en permanence d'une réserve tactique complète.
            Pensé pour les utilisateurs exigeants, ce lot permet d'équiper plusieurs postes de défense ou de bénéficier d'un stock stratégique immédiatement opérationnel.
            Avec huit Gros Cailloux Bien Durs soigneusement sélectionnés, vous disposez d'une puissance d'intimidation inégalée et d'une capacité de réponse adaptée à toutes les situations.
        </p>

        <h2>Puissance de Feu Multipliée par Huit</h2>

        <p>
            Huit fois plus de possibilités d'intervention, sans compromis sur les performances :
        </p>
        <ul>
            <li>
                <strong>8 Projectiles Haute Performance :</strong> Chaque GCBD conserve les mêmes caractéristiques balistiques et le même pouvoir dissuasif que le modèle individuel.
            </li>

            <li>
                <strong>Réserve de 4 000 Joules :</strong> Avec huit projectiles de 500 Joules chacun, ce pack développe un potentiel énergétique total digne des plus grandes unités de protection.
            </li>

            <li>
                <strong>Autonomie Maximale :</strong> Permet jusqu'à quatre tirs avec un équipement double canon avant tout besoin de réapprovisionnement.
            </li>

            <li>
                <strong>Supériorité Psychologique :</strong> La simple vision d'un stock rempli de GCBD suffit généralement à rétablir un climat de dialogue respectueux.
            </li>
        </ul>

        <h2>Organisation Tactique Optimisée</h2>

        <p>
            Une logistique pensée pour les défenseurs les plus prévoyants :
        </p>
        <ul>
            <li>
                <strong>Sélection Homogène :</strong> Les huit GCBD sont appairés pour offrir un équilibre optimal lors des changements de munitions.
            </li>

            <li>
                <strong>Rotation Simplifiée :</strong> Passez instantanément d'un GCBD à l'autre afin de maintenir un rythme opérationnel constant.
            </li>

            <li>
                <strong>Répartition Stratégique :</strong> Idéal pour équiper simultanément le domicile, le véhicule, l'atelier, ou le bureau.
            </li>

            <li>
                <strong>Efficience économique :</strong> Le pack de huit permet de constituer une véritable réserve de sécurité tout en réduisant le coût par GCBD.
            </li>
        </ul>

        <h2>Pourquoi Choisir le Pack de 8 GCBD ?</h2>

        <ul>
            <li>
                <strong>Stock Opérationnel :</strong> Ne soyez jamais pris au dépourvu grâce à une réserve immédiatement disponible.
            </li>

            <li>
                <strong>Protection Multi-Sites :</strong> Équipez plusieurs lieux sensibles avec le même niveau de sécurité.
            </li>

            <li>
                <strong>Excellent Rapport Quantité/Puissance :</strong> Huit GCBD, c'est huit fois plus de tranquillité d'esprit.
            </li>
        </ul>

        <h2>Fiche Technique</h2>

        <table class="techspec"><tbody>
        <tr><th>Caractéristique</th><th>Spécification Technique</th></tr>
        <tr><td>Catégorie</td><td>D</td></tr>
        <tr><td>Nombre de projectiles</td><td>8</td></tr>
        <tr><td>Diamètre individuel</td><td>50 à 80 mm</td></tr>
        <tr><td>Puissance</td><td>500 Joules</td></tr>
        <tr><td>Puissance totale disponible</td><td>4 000 Joules</td></tr>
        <tr><td>Vitesse de sortie</td><td>Env. 40 km/h</td></tr>
        <tr><td>Vitesse de propulsion</td><td>Jusqu'à 50 km/h (selon l'opérateur)</td></tr>
        <tr><td>Poids du pack</td><td>Env. 4kg (Selon approvisionnement)</td></tr>
        <tr><td>Recharge</td><td>Ramassage manuel recommandé</td></tr>
        </tbody></table>

        <h2>L'avis de l'Expert</h2>

        <cite>
            Posséder un seul GCBD, c'est déjà envoyer un message clair. En avoir huit, c'est montrer que vous prenez votre logistique au sérieux. Ce pack est idéal pour ceux qui refusent la panne sèche au mauvais moment. La qualité est identique sur chaque exemplaire, avec ce supplément de sérénité qu'offre une réserve stratégique complète. Un incontournable pour toute personne organisée et prévoyante.
        </cite>
        `,
		available: true
	},
	{
		id: 'gcbd_train',
		name: "GCBD d'entraînement",
		image: asset('/images/store/pexels-alexapopovich-11241448_cr.jpg'),
		short_description:
			'Un GCBD lesté pour pratiquer le geste du lancer et se renforcer musculairement.',
		full_description: `
        <p>
            Le GCBD d'Entraînement est spécialement conçu pour perfectionner votre gestuelle et développer votre puissance de propulsion avant de passer au GCBD opérationnel.
            Plus massif, plus dense et volontairement surdimensionné, il permet de renforcer naturellement la musculature tout en améliorant la précision des lancers.
            Après quelques séances d'entraînement, le GCBD standard procure une sensation de légèreté déconcertante.
        </p>

        <h2>Préparation Physique Intensive</h2>

        <p>
            Un outil conçu pour repousser les limites de votre condition physique :
        </p>

        <ul>
            <li>
                <strong>Poids Surdimensionné :</strong> Avec une masse environ vingt fois supérieure au modèle standard, chaque lancer sollicite efficacement les bras, les épaules et le dos.
            </li>

            <li>
                <strong>Volume Majoré :</strong> Son diamètre accru impose une prise en main exigeante afin d'améliorer la coordination et la stabilité du geste.
            </li>

            <li>
                <strong>Renforcement Fonctionnel :</strong> Quelques minutes d'utilisation suffisent pour transformer une séance de lancer en véritable entraînement musculaire complet.
            </li>

            <li>
                <strong>Progression Naturelle :</strong> Revenir au GCBD classique après entraînement procure une impression de vitesse et de maniabilité spectaculaire.
            </li>
        </ul>

        <h2>Conçu pour les Conditions les Plus Exigeantes</h2>

        <p>
            Le partenaire idéal des utilisateurs les plus motivés :
        </p>

        <ul>
            <li>
                <strong>Densité Maximale :</strong> Fabriqué dans un matériau encore plus compact afin d'augmenter l'effort à chaque mouvement.
            </li>

            <li>
                <strong>Résistance Absolue :</strong> Supporte sans difficulté les chocs répétés contre le sol, les murs ou le corps de son utilisateur.
            </li>

            <li>
                <strong>Usure Positive :</strong> Plus il est utilisé, plus son propriétaire devient performant.
            </li>

            <li>
                <strong>Compatible Toutes Mains :</strong> Convient aussi bien aux droitiers, gauchers et aux ambidextres.
            </li>
        </ul>

        <h2>Pourquoi Choisir le GCBD d'Entraînement ?</h2>

        <ul>
            <li>
                <strong>Développe la Puissance :</strong> Idéal pour gagner en explosivité avant le passage au modèle opérationnel.
            </li>

            <li>
                <strong>Améliore la Technique :</strong> Chaque défaut de lancer devient immédiatement perceptible.
            </li>

            <li>
                <strong>Endurance Renforcée :</strong> Les longues séances deviennent un véritable travail physique.
            </li>

            <li>
                <strong>Effet Placebo Garanti :</strong> Après quelques semaines, le GCBD standard semble presque flotter dans la main.
            </li>
        </ul>

        <h2>Fiche Technique</h2>

        <table class="techspec">
        <tbody>
        <tr><th>Caractéristique</th><th>Spécification Technique</th></tr>
        <tr><td>Catégorie</td><td>Non classé</td></tr>
        <tr><td>Diamètre</td><td>300 à 350 mm</td></tr>
        <tr><td>Poids</td><td>Env. 10 kg (Selon approvisionnement)</td></tr>
        <tr><td>Version</td><td>GCBD d'Entraînement</td></tr>
        <tr><td>Diamètre</td><td>60 à 120 mm</td></tr>
        <tr><td>Poids</td><td>2,8 kg</td></tr>
        <tr><td>Densité</td><td>Très élevée</td></tr>
        <tr><td>Énergie potentielle</td><td>Dépend principalement de votre motivation</td></tr>
        <tr><td>Utilisation recommandée</td><td>Préparation physique et perfectionnement technique</td></tr>
        <tr><td>Compatibilité</td><td>GCBD Standard</td></tr>
        <tr><td>Durée de vie</td><td>Supérieure à celle de la plupart des programmes de musculation</td></tr>
        </tbody>
        </table>

        <h2>L'avis de l'Expert</h2>

        <cite>
            Beaucoup pensent que lancer un GCBD est une question de force alors que, comme pour un javelot, une bonne technique est primordiale. Le GCBD d'Entraînement permet de construire une technique propre et une endurance impressionnante. Les premières séances sont mémorables, l'entraînement exigeant, et le retour au GCBD classique donne l'impression d'avoir activé un bonus de mobilité. Attention toutefois : il est recommandé de commencer avec un bon échauffement, et une certaine dose d'humilité.
        </cite>
        `,
		available: true
	},
	{
		id: 'gcbd_child', // TODO: Add full description
		name: 'Mon premier GCBD - modèle enfant',
		image: asset('/images/store/pexels-nc-farm-bureau-mark-17146230_cr.jpg'),
		short_description:
			"Un GCBD adapté aux plus jeunes. A n'utiliser que sous supervision d'un adulte dans les zones de lancer agréées.",
		available: true
	},
	{
		id: 'gcbd_repub',
		name: 'GCBD - Collection républicaine',
		image: asset('/images/store/pexels-nc-farm-bureau-mark-17146230_cr.jpg'), // TODO: find image
		short_description: 'Une collection de trois GCBD pour porter haut les couleurs de la France.',
		available: true,
		full_description: `
        <p>
            Le <strong>GCBD - Collection Républicaine</strong> célèbre les couleurs de la France à travers un coffret réunissant trois modèles colorés : un bleu, un blanc et un rouge.
            Cette édition collector rend hommage à l'esprit républicain avec une sélection chromatique iconique, destinée aux plus fervents défenseurs de la nation qu'ils rappellent.
        </p>

        <h2>Une Collection Tricolore Emblématique</h2>

        <p>
            .
        </p>

        <ul>
            <li>
                <strong>GCBD Bleu :</strong> Inspiré de la sérénité et de la détermination, il ouvre la marche avec élégance.
            </li>

            <li>
                <strong>GCBD Blanc :</strong> Sobre, intemporel et lumineux, il apporte l'équilibre au trio.
            </li>

            <li>
                <strong>GCBD Rouge :</strong> Audacieux et éclatant, il complète l'ensemble avec caractère.
            </li>

            <li>
                <strong>Édition Collector :</strong> Les trois modèles réunis dans un même coffret constituent une série incontournable pour les passionnés de GCBD.
            </li>
        </ul>

        <h2>Fabrication et Présentation</h2>

        <p>
            Une finition soignée pensée pour les collectionneurs :
        </p>

        <ul>
            <li>
                <strong>Coloration Haute Résistance :</strong> Chaque GCBD reçoit une finition durable mettant en valeur les couleurs nationales.
            </li>

            <li>
                <strong>Format Uniforme :</strong> Les trois modèles présentent les mêmes dimensions afin d'offrir une harmonie parfaite une fois exposés.
            </li>

            <li>
                <strong>Coffret Tricolore :</strong> Présentation soignée idéale pour offrir ou enrichir une collection déjà bien fournie.
            </li>

            <li>
                <strong>Édition Symbolique :</strong> Une série qui évoque le patrimoine français avec une bonne dose de second degré.
            </li>
        </ul>

        <h2>Pourquoi Choisir la Collection Républicaine ?</h2>

        <ul>
            <li>
                <strong>Le Trio Complet :</strong> Les trois couleurs emblématiques réunies dans un seul coffret.
            </li>

            <li>
                <strong>Objet de Collection :</strong> Une édition originale qui trouvera naturellement sa place sur une étagère, un bureau ou dans une vitrine.
            </li>

            <li>
                <strong>Esprit Français :</strong> Un clin d'œil assumé aux couleurs nationales et à l'humour "made in France".
            </li>
        </ul>

        <h2>Fiche Technique</h2>

        <table class="techspec">
        <tbody>
        <tr><th>Caractéristique</th><th>Spécification</th></tr>
        <tr><td>Collection</td><td>Républicaine</td></tr>
        <tr><td>Nombre de GCBD</td><td>3</td></tr>
        <tr><td>Coloris</td><td>Bleu, Blanc, Rouge</td></tr>
        <tr><td>Finition</td><td>Coloration haute résistance</td></tr>
        <tr><td>Présentation</td><td>Coffret collector</td></tr>
        <tr><td>Édition</td><td>Série spéciale</td></tr>
        </tbody>
        </table>

        <h2>L'avis de l'Expert</h2>

        <cite>
            La Collection Républicaine est probablement la plus patriotique des éditions GCBD. Le trio bleu, blanc, rouge fonctionne immédiatement et attire tous les regards. C'est le genre de coffret qui fait sourire les visiteurs avant même qu'on leur explique le concept. Une édition collector assumée, entre hommage national et humour décalé.
        </cite>
        `
	},
	{
		id: 'gptd',
		name: 'GPTD',
		image: asset('/images/store/Sous_les_paves-la_plage_cr.jpg'),
		short_description: 'Variante du GCBD spécialisée pour un usage en environnement urbain',
		available: false,
		full_description: `
            <warning>
                <p>
                La production de Gros Pavé Tout Dur a été interrompue suite à de nouvelles découvertes sur le pouvoir des pierres.
                </p><p>
                Si vous avez déjà commandé un exemplaire, veuillez le remettre au plus vite à un agent assermenté à proximité.
                </p>
            </warning>
            <p>
                Produit des dernières avancées en lithothérapie, le Gros Pavé Tout Dur est particulièrement adapté pour un usage en ville. Ce projectile de 30 à 80 mm est conçu pour neutraliser instantanément toute menace sans recours à la force létale. Propulsable à plus de 50 km/h, il délivre une énergie de 500 Joules, soit l'équivalent du choc d'un boxeur poids lourd.
            </p>

            <h2>Puissance d'Arrêt et Impact Dissuasif</h2>

            <p>
                Une efficacité de zone combinée à un choc cinétique hors norme :
            </p>
            <ul>
                <li>
                <strong>Projectiles de 30 à 80 mm :</strong> Le diamètre impressionnant des GCBD assure une surface de contact large et adaptable à la situation, maximisant le transfert d'énergie pour stopper l'assaillant sans perforation.
                </li>

                <li>
                <strong>Puissance de 500 Joules :</strong> Une force de frappe doublement supérieure aux pistolets de défense classiques, garantissant une mise hors d'état de nuire immédiate jusqu'à 15 mètres.
                </li>

                <li>
                <strong>Equipement à deux mains :</strong> Ce système permet de disposer de deux tirs rapides. La forme facilite un rechargement instinctif même sous haute tension.
                </li>

                <li>
                <strong>Effet Psychologique Majeur :</strong> Le geste de propulsion ainsi que son design tactique imposant suffisent souvent à intimider un agresseur.
                </li>
            </ul>

            <h2>Ergonomie Tactique et Précision</h2>

            <p>
                Une manipulation simplifiée pour tous les profils d'utilisateurs :
            </p>
            <ul>
                <li>
                    <strong>Structure Composite Haute Densité :</strong> Le corps de l'arme est fabriqué dans un matériau ultra-résistant aux chocs et aux intempéries, tout en maintenant un poids équilibré.
                </li>
                <li>
                    <strong>Prise en Main Ambidextre :</strong> Sa forme ergonomique et sa taille modérée permettent une utilisation sûre et efficace pour tous.
                </li>
                <li>
                    <strong>Pack Prêt à l'Emploi :</strong> Livré seul ou en lot allant jusqu'à 8 pour une protection opérationnelle dès la réception.
                </li>
                <li>
                    <strong>Efficience stratégique :</strong> L'arme et la munition ne font qu'un, pour une émission de 100% de plus de munition par munition.
                </li>
            </ul>

            <h2>Pourquoi Choisir le GCBD ?</h2>

            <ul>
                <li>
                <strong>Référence Professionnelle :</strong> Utilisé mondialement pour la défense de la société, c'est l'outil de défense le plus éprouvé du marché.
                </li>
                <li>
                <strong>Neutralisation Sans Danger Mortel :</strong> Une alternative crédible aux armes à feu permettant de rester dans le cadre de la légitime défense avec une efficacité maximale.
                </li>
                <li>
                <strong>Précision Longue Distance :</strong> Contrairement aux sprays ou petits modèles de poche, il conserve une trajectoire stable et précise jusqu'à 12-15 mètres.
                </li>
            </ul>

            <h2>Fiche Technique</h2>
            <table class="techspec"><tbody>
            <tr><th>Caractéristique</th><th>Spécification Technique</th></tr>
            <tr><td>Catégorie</td><td>D</td></tr>
            <tr><td>Diamètre Projectile</td><td>44 mm (Caoutchouc dur)</td></tr>
            <tr><td>Puissance</td><td>120 Joules</td></tr>
            <tr><td>Vitesse de sortie</td><td>Env. 330 km/h</td></tr>
            <tr><td>Capacité</td><td>2 coups (Double canon)</td></tr>
            <tr><td>Longueur</td><td>35 cm</td></tr>
            <tr><td>Poids</td><td>1,000 kg</td></tr>
            </tbody></table>

            <h2>L'avis de l'Expert</h2>

            <cite>
                Le GCBD original de France reste le roi incontesté de la défense personnelle. Avec ses 500 Joules, il joue dans une catégorie à part. Ce que j'apprécie, c'est sa simplicité désarmante : on vise, on tire, et l'effet est immédiat. C'est une arme imposante qui impose le respect instantanément. Si vous cherchez le maximum de sécurité pour votre foyer avec un matériel indestructible, c'est l'investissement numéro un.
            </cite>
        `
	}
];

export { items_collection };
