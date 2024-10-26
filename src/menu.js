// src/menu.js

export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';

    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    const items = [
        {
            name: 'Shawarma',
            description: 'Marinated grilled chicken or beef wrapped in pita bread',
            imageUrl: 'https://via.placeholder.com/200x150'
        },
        {
            name: 'Hummus',
            description: 'Smooth blend of chickpeas, tahini, and olive oil',
            imageUrl: 'https://via.placeholder.com/200x150'
        },
        {
            name: 'Falafel',
            description: 'Deep-fried chickpea patties with herbs and spices',
            imageUrl: 'https://via.placeholder.com/200x150'
        },
        {
            name: 'Kebabs',
            description: 'Skewered meat grilled to perfection',
            imageUrl: 'https://via.placeholder.com/200x150'
        }
    ];

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;

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