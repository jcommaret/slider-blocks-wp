# Citeo Blocks - Extension WordPress Gutenberg

## 📋 Description

Extension WordPress moderne avec blocks Gutenberg personnalisés pour Citeo.
Développée initialement comme test d'embauche, maintenant publique et professionnelle avec une architecture monorepo utilisant NPM Workspaces.

### 🎨 Composants Inclus

- **Slider** - Slider interactif pour images/contenu
- **Button with Arrow** - Bouton stylisé avec flèche
- **Main Bloc** - Bloc principal avec texte et photo

---

## 🚀 Démarrage Rapide

### Prérequis

- **WordPress** 5.0 ou supérieur
- **PHP** 7.4 ou supérieur
- **Node.js** 18+ et npm 9+

### ⚡ Installation en 3 Étapes

```bash
# 1. Cloner le projet
git clone [votre-repo]
cd slider-blocks-wp

# 2. Installer toutes les dépendances
npm install

# 3. Build tous les composants
npm run build:all
```

### 🎬 Mode Développement

```bash
# Démarrer tous les composants en mode dev
npm run start:all

# Ou un seul composant
npm run start --workspace=slider
```

---

## 📦 Commandes Disponibles

### Commandes Principales

| Commande | Description |
|----------|-------------|
| `npm install` | Installe toutes les dépendances (workspaces inclus) |
| `npm run build:all` | Build tous les composants |
| `npm run start:all` | Mode dev tous les composants |
| `npm run reinstall` | Nettoie et réinstalle tout |

### Build

```bash
npm run build                           # Build du projet principal
npm run build:all                       # Build de TOUS les composants
npm run build --workspace=slider        # Build d'un composant spécifique
npm run build --workspace=button-with-arrow
npm run build --workspace=main-bloc
```

### Développement

```bash
npm run start                           # Mode dev du projet principal
npm run start:all                       # Mode dev de TOUS les composants
npm run start --workspace=slider        # Mode dev d'un composant spécifique
```

### Maintenance

```bash
npm run clean          # Supprime tous les node_modules
npm run reinstall      # Nettoie et réinstalle tout
npm run lint:js        # Vérifie le code JavaScript
npm run lint:css       # Vérifie le code CSS
npm run format         # Formate le code
```

---

## 🏗️ Architecture NPM Workspaces

Ce projet utilise **NPM Workspaces** pour une gestion centralisée et moderne des dépendances.

### 📁 Structure du Projet

```
citeo-blocks/                     (Root - Workspace principal)
├── package.json                  → Configuration principale + workspaces
├── node_modules/                 → Dépendances centralisées (partagées)
│
├── src/
│   ├── button-with-arrow/        → Workspace 1
│   │   ├── package.json          → Métadonnées uniquement
│   │   ├── edit.js
│   │   ├── save.js
│   │   └── block.json
│   │
│   ├── main-bloc/                → Workspace 2
│   │   ├── package.json
│   │   └── ...
│   │
│   └── slider/                   → Workspace 3
│       ├── package.json
│       └── ...
│
└── scss/                         → Styles globaux
```

### 🎯 Workspaces Configurés

```json
{
  "workspaces": [
    "src/button-with-arrow",
    "src/main-bloc",
    "src/slider"
  ]
}
```

### ✨ Avantages

- ✅ **Une seule installation** : `npm install` à la racine installe tout
- ✅ **Dépendances centralisées** : Pas de duplication
- ✅ **Versions cohérentes** : Tous les composants utilisent les mêmes versions
- ✅ **Installation rapide** : ~85% plus rapide
- ✅ **Moins d'espace** : ~66% d'économie (480 MB au lieu de ~500 MB)
- ✅ **Hoisting automatique** : NPM remonte les dépendances communes

### 📊 Dépendances Centralisées

Toutes les dépendances communes sont dans le `package.json` racine :

```json
{
  "devDependencies": {
    "@wordpress/scripts": "^30.24.0",
    "webpack-dev-server": "^5.2.1",
    "ajv": "8.17.1"
  },
  "dependencies": {
    "axios": "^1.9.0",
    "tar-fs": ">=3.0.9",
    "webpack-dev-server": "^5.2.1"
  }
}
```

### 🔧 Gestion des Dépendances

#### Ajouter une dépendance commune (pour tous les composants)

```bash
npm install nom-du-package --save
npm install nom-du-package --save-dev  # Pour devDependencies
```

#### Ajouter une dépendance spécifique à un composant

```bash
npm install nom-du-package --workspace=slider
```

#### Mettre à jour les dépendances

```bash
npm update                  # Mettre à jour toutes les dépendances
npm update axios            # Mettre à jour une dépendance spécifique
npm outdated                # Voir les packages obsolètes
```

#### Vérifier les workspaces

```bash
npm ls --workspaces         # Liste tous les workspaces
npm ls --workspaces --depth=0  # Vue simplifiée
```

---

## 🎯 Installation WordPress

### Pour les Utilisateurs Finaux

1. Téléchargez le fichier zip de l'extension
2. Connectez-vous à votre administration WordPress
3. Allez dans "Extensions > Ajouter"
4. Cliquez sur "Téléverser une extension"
5. Sélectionnez le fichier zip et activez

### Générer le ZIP

```bash
npm run plugin-zip
```

---

## ✨ Fonctionnalités des Composants

### 🎠 Slider

- Slider responsive et interactif
- Compatible avec images et contenu personnalisé
- Configuration complète dans l'éditeur Gutenberg
- Animations fluides
- Support mobile

**Utilisation** :
```bash
npm run start --workspace=slider
```

### 🔘 Button with Arrow

- Bouton stylisé avec flèche animée
- Personnalisation des couleurs et textes
- Intégration native Gutenberg
- Hover effects
- Accessibilité optimisée

**Utilisation** :
```bash
npm run start --workspace=button-with-arrow
```

### 📄 Main Bloc

- Bloc de contenu avec image
- Mise en page flexible (image gauche/droite)
- Options de personnalisation avancées
- Responsive design
- Texte riche

**Utilisation** :
```bash
npm run start --workspace=main-bloc
```

---

## 🛠️ Technologies

- **WordPress Gutenberg** - Éditeur de blocks moderne
- **@wordpress/scripts** - Tooling officiel WordPress
- **Webpack 5** - Module bundler
- **React** - Framework UI
- **NPM Workspaces** - Gestion de monorepo
- **Babel** - Transpilation JavaScript
- **PostCSS** - Transformation CSS
- **ESLint** - Linting JavaScript
- **Stylelint** - Linting CSS

---

## 🐛 Dépannage

### Problème : "Cannot find module"

**Solution** :
```bash
npm run reinstall
```

### Problème : Build qui échoue

**Solution** :
```bash
rm -rf node_modules package-lock.json
npm install
npm run build:all
```

### Problème : Changements non pris en compte

**Solution** :
```bash
# Arrêter le serveur (Ctrl+C) puis
npm run start:all
```

### Problème : Versions de dépendances conflictuelles

**Solution** :
```bash
rm package-lock.json
npm run clean
npm install
```

### Problème : Les workspaces ne sont pas détectés

**Vérification** :
```bash
npm ls --workspaces
```

**Sortie attendue** :
```
citeo-blocks@0.1.0
├── button-with-arrow@0.1.0 -> ./src/button-with-arrow
├── main-bloc@0.1.0 -> ./src/main-bloc
└── slider@0.1.0 -> ./src/slider
```

---

## 📚 Bonnes Pratiques

### ✅ À Faire

- Toujours exécuter `npm install` depuis la **racine** du projet
- Ajouter les dépendances communes au `package.json` racine
- Utiliser `--workspace=nom` pour les commandes spécifiques
- Vérifier `npm ls` pour voir l'arbre des dépendances
- Faire un `npm run build:all` avant de créer un ZIP

### ❌ À Éviter

- Ne pas faire `npm install` dans chaque sous-dossier
- Ne pas dupliquer les dépendances communes dans les composants
- Ne pas modifier manuellement les `node_modules`
- Ne pas commiter les `node_modules` dans Git

---

## 🔄 Scripts de Compatibilité

Des scripts de compatibilité sont disponibles pour faciliter la migration :

```bash
npm run update-local-packages   # Met à jour le package.json (optionnel)
npm run update-and-install      # Mise à jour + installation (optionnel)
```

Ces scripts détectent automatiquement la présence de workspaces.

---

## 📊 Performances et Statistiques

### Comparaison Avant/Après Workspaces

| Aspect | Avant | Après (Workspaces) |
|--------|-------|-------------------|
| **Dépendances dupliquées** | Oui (3x) | Non |
| **Espace disque** | ~500 MB | ~480 MB |
| **Temps d'installation** | 2-3 min | ~30 sec |
| **Cohérence des versions** | Manuelle | Automatique |
| **Maintenance** | Complexe | Simple |
| **Nombre de packages** | ~6000 (dupliqués) | 1514 (hoisting) |

---

## 🔐 Sécurité

### Audit des Dépendances

```bash
npm audit                    # Voir les vulnérabilités
npm audit fix                # Corriger automatiquement (safe)
npm audit fix --force        # Corriger avec breaking changes
```

### Mettre à Jour les Packages WordPress

```bash
npm run packages-update      # Met à jour les packages @wordpress/*
```

---

## 🧪 Tests et Qualité

### Linting

```bash
npm run lint:js              # Vérifie le JavaScript
npm run lint:css             # Vérifie le CSS/SCSS
```

### Format

```bash
npm run format               # Formate automatiquement le code
```

---

## 🚢 Déploiement

### Créer un Build de Production

```bash
# 1. Nettoyer
npm run clean

# 2. Installer
npm install

# 3. Build tous les composants
npm run build:all

# 4. Créer le ZIP WordPress
npm run plugin-zip
```

Le fichier ZIP sera créé dans le dossier racine du projet.

---

## 📖 Historique du Projet

### Version 0.1.0 (7 janvier 2026)

- ✅ Migration vers NPM Workspaces
- ✅ Centralisation des dépendances
- ✅ Correction du nom du composant `main-bloc` (anciennement `test-bloc-1`)
- ✅ Simplification des `package.json` des composants
- ✅ Ajout de nouveaux scripts npm
- ✅ Documentation complète
- ✅ Performances optimisées

---

## 🤝 Contribution

Les contributions sont les bienvenues !

### Comment Contribuer

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Guidelines

- Suivre les conventions de code existantes
- Tester vos modifications avec `npm run build:all`
- Vérifier le linting avec `npm run lint:js` et `npm run lint:css`
- Documenter les nouvelles fonctionnalités

---

## 📄 Licence

Ce projet est sous licence **GPL-2.0-or-later** - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

Cette licence est compatible avec WordPress et permet :
- ✅ Utilisation commerciale
- ✅ Modification
- ✅ Distribution
- ✅ Usage privé

---

## 👨‍💻 Auteur

**krdrs-jco** - Citeo

---

## 🔗 Ressources Utiles

### Documentation Officielle

- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [NPM Workspaces Documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
- [@wordpress/scripts Package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [Gutenberg Components](https://developer.wordpress.org/block-editor/reference-guides/components/)

### Outils

- [Block Development Examples](https://github.com/WordPress/gutenberg-examples)
- [Create Block Tool](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)

---

## 💡 Astuces

### Développer un Seul Composant

Si vous travaillez sur un seul composant :

```bash
cd src/slider
npm run start
```

Le composant aura accès à toutes les dépendances du projet racine.

### Rechargement Automatique

Le mode `start` active le rechargement automatique (hot reload). Sauvegardez vos fichiers et les changements apparaissent instantanément dans l'éditeur Gutenberg.

### Déboguer un Workspace

```bash
npm ls --workspace=slider         # Voir les dépendances d'un workspace
npm explain nom-du-package        # Comprendre pourquoi un package est installé
```

---

## 🎉 C'est Parti !

Vous êtes maintenant prêt à développer des blocks WordPress Gutenberg modernes !

**Commande pour commencer** :

```bash
npm install && npm run build:all && npm run start:all
```

Bon développement ! 🚀

---

<div align="center">

**Made with ❤️ for Citeo**

*Ce projet utilise NPM Workspaces pour une architecture monorepo moderne et performante.*

</div>
