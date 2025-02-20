document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.citeo-slider');
    galleries.forEach((gallery) => {
        const slides = gallery.querySelectorAll('.wp-block-image');
        let currentIndex = 0; // Définir currentIndex ici

        const nextButton = document.createElement('button');
        nextButton.textContent = '>';
        nextButton.className = 'button-arrow-right wp-block-button__link';
        
        const prevButton = document.createElement('button');
        prevButton.textContent = '<';
        prevButton.className = 'button-arrow-left wp-block-button__link';

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

        showSlide(currentIndex);
    });
});