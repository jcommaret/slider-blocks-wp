document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.citeo-slider');

    galleries.forEach((gallery) => {
        const slides = gallery.querySelectorAll('.wp-block-image');
        let currentIndex = 0;

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.className = 'slider-button-next wp-block-button';

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.className = 'slider-button-prev wp-block-button';

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
            console.log("next")
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
            console.log("prev")
        });

        // Afficher la première slide
        showSlide(currentIndex);
    });
});