import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

// Enregistrer le bloc
registerBlockType(metadata.name, {
	...metadata,
	edit: Edit,
	save,
});

document.addEventListener("DOMContentLoaded", function () {
	const galleries = document.querySelectorAll(".my-slider-gallery");
	const slides = document.querySelectorAll(".slides");

	// Créer des événements pour les boutons pour aller vers la suite ou précédemment
	const nextButton = document.createElement("button");
	nextButton.textContent = "Next";
	nextButton.className = "slider-button-next";
	nextButton.addEventListener("click", goToNextSlide);

	const prevButton = document.createElement("button");
	prevButton.textContent = "Previous";
	prevButton.className = "slider-button-rev";
	prevButton.addEventListener("click", goToPreviousSlide);

	galleries.forEach(function (gallery) {
		nextButton.style.display = "none";
		gallery.appendChild(nextButton);

		slides.forEach(function (slide, index) {
			slide.style.display = "none";
			gallery.appendChild(slide);

			// Add an event listener to make the click toggle the active class on/off when a slide is clicked
			slide.addEventListener("click", function () {
				showSlide(index + 1);
			});
		});
	});

	function goToNextSlide() {
		currentIndex += 1;
		if (currentIndex >= slides.length) {
			currentIndex = 0;
		}
		showSlide(currentIndex + 1);
	}

	function goToPreviousSlide() {
		currentIndex -= 1;
		if (currentIndex < 0) {
			currentIndex = slides.length - 1;
		}
		showSlide(currentIndex + 1);
	}

	function showSlide(index) {
		slides.forEach((slide, i) => {
			const slideIndex = index - 1;
			const isActive = i === slideIndex;
			if (isActive) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
		});
	}
});
