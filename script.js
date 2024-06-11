document.querySelector('.hamburger').addEventListener('mouseover', function() {
    document.querySelector('nav').style.left = '0';
});

document.querySelector('nav').addEventListener('mouseleave', function() {
    document.querySelector('nav').style.left = '-150px';
});

document.querySelector('#socials-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.querySelector('#socials').classList.remove('hidden');
});

document.querySelector('#clips-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.querySelector('#clips').classList.remove('hidden');
});

document.querySelector('#home-button').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    const volumeSlider = document.getElementById('volume-slider');

    // Set initial volume
    bgMusic.volume = volumeSlider.value;

    // Play the background music after user interaction
    document.body.addEventListener('click', function() {
        bgMusic.play();
    });

    // Update volume when slider changes
    volumeSlider.addEventListener('input', function() {
        bgMusic.volume = this.value;
    });
});
