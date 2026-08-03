# GCBD.fr

Code du site GCBD.fr. Le site déployé est généré statiquement à partir du code de ce dépôt.

## Pré-requis

L'usage de ce dépôt requiert d'avoir les exécutables suivants:

* Node & NPM
* PNPM

## Développement

Après avoir copié localement ce projet, installer les dépendances depuis le dossier courant :

```sh
pnpm install
```

Puis, utiliser la commande suivante pour démarrer un serveur de développement local auquel se connecter :

```sh
pnpm run-script dev
```

## Création de build statique

Pour créer une version statique du site, utiliser la configuration `vite.static.ts` pour la génération:

```sh
pnpm run-script build -c vite.static.ts
```
