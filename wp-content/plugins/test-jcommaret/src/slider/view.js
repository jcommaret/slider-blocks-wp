document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'citeo-slider'
    const galleries = document.querySelectorAll('.citeo-slider');

    galleries.forEach((gallery) => {
        // Select all slides within the current gallery
        const slides = gallery.querySelectorAll('.wp-block-image');
        let currentIndex = 0; // Initialize the current slide index

        // Create the "next" button
        const nextButton = document.createElement('button');
        nextButton.textContent = '>'; // Set button text
        nextButton.className = 'slider-button-next wp-block-button'; // Set button class

        // Create the "previous" button
        const prevButton = document.createElement('button');
        prevButton.textContent = '<'; // Set button text
        prevButton.className = 'slider-button-prev wp-block-button'; // Set button class

        // Append buttons to the gallery
        gallery.appendChild(nextButton);
        gallery.appendChild(prevButton);

        // Function to show the slide at the given index
        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none'; // Show or hide slides
            });
        };

        // Event listener for the "next" button
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length; // Increment index and loop back
            showSlide(currentIndex); // Show the next slide
        });

        // Event listener for the "previous" button
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement index and loop back
            showSlide(currentIndex); // Show the previous slide
        });

        // Display the first slide initially
        showSlide(currentIndex);
    });
});