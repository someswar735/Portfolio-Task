document.addEventListener('DOMContentLoaded', function() {
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(description => {
       
        description.parentNode.addEventListener('mouseenter', () => {
            description.classList.remove('description-hidden');
        });

        description.parentNode.addEventListener('mouseleave', () => {
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
