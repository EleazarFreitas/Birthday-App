import { inputs } from "./addBirthday.js";

export function validationMsg (input, msg) {
    const validationDiv = input.parentNode.nextElementSibling;
    validationDiv.lastChild.textContent = ' ' + msg;
    validationDiv.style.visibility = 'inherit';
    input.onfocus = () => {
        validationDiv.style.visibility = 'hidden';
    };
};

export function validateLettersOnly () {    

    for (let input of inputs) {
        
        if (input.type === 'text') {
            input.onkeyup = () => {
                const value = input.value;
                input.value = value.replace(/[\W\d]/g, '');
            };
        };

        input.onblur = () => {
            const value = input.value;
            const checkerSpan = input.nextElementSibling;
            if (!value) {
                validationMsg(input, 'Please fill out this field');
            };

            if (input.type === 'text' && value.length > 0) {
                checkerSpan.classList.remove('d-none');
            } else {
                checkerSpan.classList.add('d-none');
            };

            if (input.type === 'date' && value !== '') {
                const currYear = Number(new Date().getFullYear());
                const birthdayYear = Number(value.slice(0, 4));
                if (birthdayYear > currYear || currYear - birthdayYear > 150) {
                    const msg = `Please choose a year between ${currYear - 150} and ${currYear}`;
                    validationMsg(input, msg);
                    input.value = '';
                    return;
                };
                checkerSpan.classList.toggle('d-none');
            };
        };
    };
};