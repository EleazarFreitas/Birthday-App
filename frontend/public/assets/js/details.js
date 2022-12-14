import { getCurrAge } from './getCurrAge.js';

const id = Number(new URL(window.location).searchParams.get('id'));

fetch('https://birthday-app.up.railway.app/birthdays/' + id)
    .then(response => response.json())
    .then(json => {
        const date = new Date(json.dateOfBirth);
        date.setDate(date.getDate() + 1);
        const avatar = document.querySelector('img').src = `../../public/assets/img/${json.avatar}.png`;
        const fullName = document.querySelector('[fullName]').textContent = json.firstName + ' ' + json.lastName;
        const dateOfBirth = document.querySelector('[dateOfBirth]').textContent = date.toLocaleDateString();
        const currAge = document.querySelector('[currAge]').textContent = getCurrAge(json.dateOfBirth);
    });