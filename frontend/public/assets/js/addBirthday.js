import { validateLettersOnly, validationMsg } from "./inputsValidation.js"
import { saving } from "./saving.js";

const randomAvatar = document.querySelector('[randomAvatar]');
const avatarBtn = document.querySelector('[avatarBtn]');
const chooseAvatar = document.querySelector('[chooseAvatar]');

function drawAvatar () {
    const drawNum = Math.round(Math.random() * 11) + 1;
    const num = drawNum < 10 ? '0' + drawNum : drawNum;
    randomAvatar.src = `../../public/assets/img/avatar_${num}.png`;
};
drawAvatar();

export const showAvatars = avatarBtn.onclick = () => {
    chooseAvatar.classList.remove('d-none');
};

chooseAvatar.onclick = e => {
    const selectedAvatar = e.target;
    e.preventDefault();
    if (selectedAvatar.tagName === 'IMG') {
        const selectedAvatarRadioInput = selectedAvatar.parentNode.nextElementSibling;
        selectedAvatarRadioInput.checked = true;
        randomAvatar.src = selectedAvatar.src;
        chooseAvatar.classList.add('d-none');
    };
    if (selectedAvatar.tagName === 'BUTTON' || selectedAvatar.tagName === 'I') {
        chooseAvatar.classList.add('d-none');
    };
};

const form = document.querySelector('form');
const {firstName, lastName, dateOfBirth} = form.elements;
export const inputs = [firstName, lastName, dateOfBirth];

validateLettersOnly();

form.onsubmit = e => {
    let emptyInputExists;
    for (let input of inputs) {
        if (!input.value) {
            emptyInputExists = true;
            validationMsg(input, 'Please fill out this field');
        };
    };
    if (emptyInputExists) {
        e.preventDefault();
        return;
    };
    const avatar = document.querySelector('input[name=avatar]:checked');
    const selectedAvatar = avatar ? avatar.id : randomAvatar.src.split('/')[6].replace('.png', '');
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        avatar: selectedAvatar,
    };
    e.preventDefault();
    saving('Saving birthday', 'Birthday saved', data);
};