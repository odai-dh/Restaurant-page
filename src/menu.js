// src/menu.js
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';



export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const headline = document.createElement('h2');
    headline.textContent = 'Our Menu';

    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    const items = [
        {
            name: 'Shawarma',
            description: 'Thinly sliced, marinated meat (chicken, beef, or lamb) served in pita bread with vegetables and sauces.',
            imageUrl: img1
        },
        {
            name: 'Hummus',
            description: 'A smooth, creamy dip made from blended chickpeas, tahini (sesame paste), lemon juice, and garlic, garnished with olive oil, vegetables and spices.',
            imageUrl: img2
        },
        {
            name: 'Falafel',
            description: 'Deep-fried patties made from ground chickpeas, mixed with herbs and spices, served in pita or plate with salad and tahini.',
            imageUrl: img3
        },
        {
            name: 'Kebbeh',
            description: 'A Middle Eastern dish of spiced ground beef or lamb, mixed with bulgur wheat, formed into balls or patties, either fried or baked.',
            imageUrl: img4
        }
    ];

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        img.classList.add('img1');

        const name = document.createElement('h3');
        name.textContent = item.name;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(desc);
        menuList.appendChild(menuItem);
    });

    content.appendChild(headline);
    content.appendChild(menuList);
}