import { showAvatars } from "./addBirthday.js";
import { saving } from "./saving.js";

const id = Number(new URL(window.location).searchParams.get('id'));
const inputsToUpdate = document.querySelector('form');
const avatarToUpdate = inputsToUpdate.firstElementChild.firstElementChild;
const {firstName, lastName, dateOfBirth} = inputsToUpdate.elements;

fetch('http://localhost:3000/birthdays/' + id)
    .then(response => response.json())
    .then(json => {
        avatarToUpdate.src = '../../public/assets/img/' + json.avatar + '.png';
        firstName.value = json.firstName;
        lastName.value = json.lastName;
        dateOfBirth.value = json.dateOfBirth;
    });

inputsToUpdate.onsubmit = e => {
    const avatar = document.querySelector('input[name=avatar]:checked');
    const selectedAvatar = avatar ? avatar.id : avatarToUpdate.src.split('/')[6].replace('.png', '');
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        avatar: selectedAvatar,
    };
    e.preventDefault();
    saving('Updating birthday', 'Birthday updated', data, id);    
};