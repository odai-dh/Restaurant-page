// src/home.js

export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    // Banner Image
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.style.backgroundImage = "url('https://via.placeholder.com/1200x500')";

    const headline = document.createElement('h2');
    headline.textContent = 'Welcome to Authentic Arabic Dining';
    banner.appendChild(headline);

    // Introduction Section
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const description = document.createElement('p');
    description.textContent = 'At Al-Qasr Restaurant, we bring the taste of traditional Arabic cuisine to your table. Our chefs craft each dish with the finest ingredients and authentic spices, ensuring a truly unforgettable dining experience.';

    intro.appendChild(description);

    // Append sections to content
    content.appendChild(banner);
    content.appendChild(intro);
}