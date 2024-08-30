import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import Edit from './edit';
import save from './save';
import metadata from './block.json';


import "./style.scss";
// Enregistrer le bloc
registerBlockType(metadata.name, {
    ...metadata,
    edit: Edit,
    save,
});

wp.domReady(() => {
    // Utilisation de setTimeout pour donner le temps au contenu de se charger
    setTimeout(() => {
        const galleries = document.querySelectorAll('.my-slider-gallery');

        galleries.forEach((gallery) => {
            const slides = gallery.querySelectorAll('.slides');
            if (slides.length === 0) {
                return; // Assurez-vous qu'il y a des slides
            }

            let currentIndex = 0;

            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.className = 'slider-button-next';

            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.className = 'slider-button-prev';

            gallery.appendChild(nextButton);
            gallery.appendChild(prevButton);

            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.style.display = i === index ? 'block' : 'none';
                });
            };

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            });

            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            });

            // Afficher la première slide
            showSlide(currentIndex);
        });
    }, 100); // Délai pour s'assurer que tout le contenu est chargé
});



