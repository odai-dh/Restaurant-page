import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

// Function to handle tab switching
function initializeWebsite() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    // Load the home page by default when the site first loads
    loadHome();

    // Event listeners to switch between pages
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

// Initialize the website
initializeWebsite();