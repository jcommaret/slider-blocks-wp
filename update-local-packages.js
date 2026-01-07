#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour mettre à jour le package.json parent avec les références 
 * aux composants locaux: button-with-arrow, main-bloc, et slider
 * 
 * Note: Ce script est maintenant optionnel avec NPM Workspaces.
 * Les workspaces gèrent automatiquement les dépendances locales.
 * Ce script peut être utilisé pour des cas spécifiques de compatibilité.
 */

// Configuration des composants à intégrer
const COMPONENTS = [
    {
        name: 'button-with-arrow',
        path: './src/button-with-arrow',
        packageName: null // Utilise le nom du package.json
    },
    {
        name: 'main-bloc',
        path: './src/main-bloc',
        packageName: 'main-bloc' // Force le nom à main-bloc
    },
    {
        name: 'slider', 
        path: './src/slider',
        packageName: null // Utilise le nom du package.json
    }
];

const PARENT_PACKAGE_PATH = './package.json';

console.log('🚀 Vérification de la configuration des workspaces...\n');

try {
    // Lire le package.json parent
    const parentPackageData = JSON.parse(fs.readFileSync(PARENT_PACKAGE_PATH, 'utf8'));
    console.log(`📦 Package parent trouvé: ${parentPackageData.name} v${parentPackageData.version}`);

    // Initialiser les dépendances si elles n'existent pas
    if (!parentPackageData.dependencies) {
        parentPackageData.dependencies = {};
    }

    let updatesCount = 0;

    // Nettoyer les anciennes références qui pourraient exister
    const oldReferences = ['test-bloc-1']; // Ajouter ici d'autres anciennes références si nécessaire
    oldReferences.forEach(oldRef => {
        if (parentPackageData.dependencies[oldRef]) {
            delete parentPackageData.dependencies[oldRef];
            console.log(`🗑️  Suppression de l'ancienne référence: ${oldRef}`);
            updatesCount++;
        }
    });

    // Traiter chaque composant
    COMPONENTS.forEach(component => {
        const componentPackagePath = path.join(component.path, 'package.json');
        
        try {
            // Vérifier si le package.json du composant existe
            if (!fs.existsSync(componentPackagePath)) {
                console.log(`⚠️  Package.json non trouvé pour ${component.name}: ${componentPackagePath}`);
                return;
            }

            // Lire le package.json du composant
            const componentPackageData = JSON.parse(fs.readFileSync(componentPackagePath, 'utf8'));
            const componentName = component.packageName || componentPackageData.name;
            const componentVersion = componentPackageData.version;

            // Référence locale avec file:
            const localReference = `file:${component.path}`;

            // Vérifier si une mise à jour est nécessaire
            const currentDep = parentPackageData.dependencies[componentName];
            
            if (currentDep !== localReference) {
                parentPackageData.dependencies[componentName] = localReference;
                console.log(`✅ ${componentName} v${componentVersion} -> ${localReference}`);
                updatesCount++;
            } else {
                console.log(`✨ ${componentName} v${componentVersion} -> déjà à jour`);
            }

        } catch (error) {
            console.error(`❌ Erreur lors du traitement de ${component.name}:`, error.message);
        }
    });

    // Trier les dépendances par ordre alphabétique
    const sortedDeps = {};
    Object.keys(parentPackageData.dependencies)
        .sort()
        .forEach(key => {
            sortedDeps[key] = parentPackageData.dependencies[key];
        });
    parentPackageData.dependencies = sortedDeps;

    // Sauvegarder le package.json parent mis à jour
    fs.writeFileSync(
        PARENT_PACKAGE_PATH, 
        JSON.stringify(parentPackageData, null, '\t') + '\n'
    );

    console.log(`\n🎉 Mise à jour terminée! ${updatesCount} modification(s) apportée(s).`);
    console.log(`📄 Package.json parent sauvegardé: ${PARENT_PACKAGE_PATH}`);

    // Vérifier si les workspaces sont configurés
    if (parentPackageData.workspaces && parentPackageData.workspaces.length > 0) {
        console.log('\n✨ NPM Workspaces détecté!');
        console.log('📋 Workspaces configurés:');
        parentPackageData.workspaces.forEach(ws => {
            console.log(`   • ${ws}`);
        });
        console.log('\n💡 Les dépendances communes sont gérées automatiquement par les workspaces.');
    } else {
        // Afficher un résumé des dépendances locales (ancien système)
        console.log('\n📋 Dépendances locales configurées:');
        COMPONENTS.forEach(component => {
            const localRef = parentPackageData.dependencies[component.name] || 'Non configuré';
            console.log(`   • ${component.name}: ${localRef}`);
        });
    }

    // Proposer d'installer les dépendances automatiquement
    if (updatesCount > 0) {
        console.log('\n💡 Pour installer les dépendances, exécutez: npm install');
        console.log('🔄 Ou utilisez: npm run update-and-install pour tout faire automatiquement');
    } else {
        console.log('\n✨ Aucune modification nécessaire.');
    }

} catch (error) {
    console.error('❌ Erreur fatale:', error.message);
    process.exit(1);
}
