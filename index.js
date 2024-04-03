document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'description'
    const descriptions = document.querySelectorAll('.description');

    // Loop through each description element
    descriptions.forEach(description => {
        // Add event listener for mouseenter (hover in)
        description.parentNode.addEventListener('mouseenter', () => {
            // Remove the class 'description-hidden' to show the description
            description.classList.remove('description-hidden');
        });

        // Add event listener for mouseleave (hover out)
        description.parentNode.addEventListener('mouseleave', () => {
            // Add the class 'description-hidden' to hide the description
            description.classList.add('description-hidden');
        });
    });
});

const hoverSound = document.getElementById('hover-sound');

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset the sound to the beginning
        hoverSound.play();
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset the sound to the beginning
        hoverSound.play();
    });
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset the sound to the beginning
        hoverSound.play();
    });
});
