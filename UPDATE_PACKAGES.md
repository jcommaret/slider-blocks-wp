# Script de Mise à Jour des Packages Locaux

## 📋 Description

Ce script automatise la mise à jour du `package.json` parent pour inclure les références aux composants locaux WordPress développés dans ce projet.

## 🎯 Composants Gérés

Le script gère automatiquement les trois composants suivants :

- **button-with-arrow** (`./src/button-with-arrow`)
- **main-bloc** (`./src/main-bloc`) 
- **slider** (`./src/slider`)

## 🚀 Utilisation

### Option 1 : Mise à jour seule
```bash
npm run update-local-packages
```
Met à jour uniquement le `package.json` (vous devez faire `npm install` après)

### Option 2 : Mise à jour + Installation automatique ⭐ (Recommandé)
```bash
npm run update-and-install
```
Met à jour le `package.json` ET installe automatiquement les dépendances

### Commande directe
```bash
node update-local-packages.js
```

## ✨ Fonctionnalités

### ✅ Ce que fait le script :
- Lit automatiquement les `package.json` de chaque composant
- Met à jour le `package.json` parent avec les références locales (`file:./src/...`)
- Nettoie les anciennes références obsolètes
- Trie les dépendances par ordre alphabétique
- Affiche un rapport détaillé des modifications

### 🔧 Gestion intelligente :
- **Détection automatique** : Lit les versions depuis les `package.json` individuels
- **Nettoyage** : Supprime les anciennes références (ex: `test-bloc-1`)
- **Sécurité** : Ne modifie que si nécessaire
- **Rapport** : Affiche clairement les changements effectués

## 📊 Exemple de Sortie

```
🚀 Mise à jour du package.json parent avec les composants locaux...

📦 Package parent trouvé: citeo-blocks v0.1.0
🗑️  Suppression de l'ancienne référence: test-bloc-1
✅ button-with-arrow v0.1.0 -> file:./src/button-with-arrow
✅ main-bloc v0.1.0 -> file:./src/main-bloc
✅ slider v0.1.0 -> file:./src/slider

🎉 Mise à jour terminée! 3 modification(s) apportée(s).
📄 Package.json parent sauvegardé: ./package.json

📋 Dépendances locales configurées:
   • button-with-arrow: file:./src/button-with-arrow
   • main-bloc: file:./src/main-bloc
   • slider: file:./src/slider

💡 Pour installer les dépendances, exécutez: npm install
```

## 🔄 Workflow Recommandé

### Workflow Simplifié (Recommandé) ⭐
1. **Développement** : Modifiez vos composants dans `src/`
2. **Mise à jour & Installation** : Exécutez `npm run update-and-install`
3. **Build** : Utilisez `npm run build` pour compiler

### Workflow Manuel (si préféré)
1. **Développement** : Modifiez vos composants dans `src/`
2. **Mise à jour** : Exécutez `npm run update-local-packages`
3. **Installation** : Lancez `npm install` pour synchroniser
4. **Build** : Utilisez `npm run build` pour compiler

## ⚙️ Configuration

Pour ajouter un nouveau composant, modifiez le tableau `COMPONENTS` dans `update-local-packages.js` :

```javascript
const COMPONENTS = [
    {
        name: 'nouveau-composant',
        path: './src/nouveau-composant',
        packageName: null // ou forcer un nom spécifique
    }
];
```

## 🛠 Maintenance

Le script gère automatiquement :
- Les changements de version des composants
- L'ajout/suppression de composants
- Le nettoyage des références obsolètes

## 📝 Notes Techniques

- **Format des références** : `file:./src/nom-composant`
- **Tri automatique** : Les dépendances sont triées alphabétiquement
- **Sauvegarde** : Le fichier est formaté avec des tabulations
- **Sécurité** : Vérification de l'existence des fichiers avant traitement
