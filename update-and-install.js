#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

/**
 * Script qui combine la mise à jour des packages locaux et l'installation
 */

console.log('🚀 Mise à jour et installation des dépendances locales...\n');

// Étape 1: Exécuter le script de mise à jour
console.log('📦 Étape 1: Mise à jour du package.json...');

const updateScript = spawn('node', ['update-local-packages.js'], {
    stdio: 'inherit',
    cwd: process.cwd()
});

updateScript.on('close', (updateCode) => {
    if (updateCode !== 0) {
        console.error('❌ Erreur lors de la mise à jour du package.json');
        process.exit(updateCode);
    }

    console.log('\n📦 Étape 2: Installation des dépendances...');
    
    // Étape 2: Installer les dépendances
    const npmInstall = spawn('npm', ['install'], {
        stdio: 'inherit',
        cwd: process.cwd()
    });

    npmInstall.on('close', (installCode) => {
        if (installCode === 0) {
            console.log('\n🎉 Mise à jour et installation terminées avec succès!');
            console.log('✅ Les composants locaux sont maintenant disponibles pour le build.');
        } else {
            console.error('\n❌ Erreur lors de l\'installation des dépendances');
            console.log('💡 Vous pouvez essayer manuellement: npm install');
            process.exit(installCode);
        }
    });

    npmInstall.on('error', (error) => {
        console.error('\n❌ Impossible d\'exécuter npm install:', error.message);
        console.log('💡 Vous pouvez essayer manuellement: npm install');
        process.exit(1);
    });
});

updateScript.on('error', (error) => {
    console.error('❌ Impossible d\'exécuter le script de mise à jour:', error.message);
    process.exit(1);
});

