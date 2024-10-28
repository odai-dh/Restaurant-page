// src/contact.js

export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const headline = document.createElement('h2');
    headline.textContent = 'Contact Us';

    // Contact Information
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +971-555-123456';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Al-Qasr Street, Dubai, UAE';

    const hours = document.createElement('p');
    hours.textContent = 'Hours: Open daily from 12:00 PM to 11:00 PM';

    // Reservation Form
    const form = document.createElement('form');
    form.id = 'reservation-form';


    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder= 'Odai'
    // nameInput.className='name1'
    nameInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = ' Email: ';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Odai-dh@hyperisland.com';
    // emailInput.className = 'email';
    emailInput.required = true;

    const dateLabel = document.createElement('label');
    dateLabel.for = 'date';
    dateLabel.textContent = ' Reservation Date: ';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'date';
    // dateInput.className = 'data';
    dateInput.required = true;
    

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'BOOK';
    submitButton.className='button1'

    // Append form fields
    form.append(nameLabel, nameInput, emailLabel, emailInput, dateLabel, dateInput, submitButton);

    // Append all to content
    content.appendChild(headline);
    content.appendChild(phone);
    content.appendChild(address);
    content.appendChild(hours);
    content.appendChild(form);
}