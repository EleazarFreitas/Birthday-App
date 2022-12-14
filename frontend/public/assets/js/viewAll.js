import { getCurrAge } from './getCurrAge.js';

function birthdayTemplate (data) {
    const birthdayTemplate = `<a class="text-decoration-none" href="details.html?id=${data.id}"><div class="d-flex align-items-center gap-2 my-3">
                                <div class="avatar">
                                    <img class="img-fluid" src="../../public/assets/img/${data.avatar}.png">
                                </div>
                                <div class="d-flex align-items-center w-100">
                                    <div>
                                        <span class="text-dark">${data.firstName} ${data.lastName}</span>
                                        <br>
                                        <span class="text-muted years">${getCurrAge(data.dateOfBirth)} years</span>
                                    </div>
                                    <a class="ms-auto" href="details.html?id=${data.id}">
                                        <div class="details">
                                            <i class="fa-solid fa-ellipsis-vertical text-dark fs-5"></i>
                                        </div>
                                    </a>
                                </div>
                            </div></a>`;
    return birthdayTemplate;
};

fetch('https://birthday-app-production.up.railway.app/birthdays')
    .then(response => response.json())
    .then(json => {
        const allBirthdays = document.querySelector('[allBirthdays]');
        const howManyBirthdays = document.querySelector('[howManyBirthdays]');
        howManyBirthdays.textContent = json.length;
        for(let data of json) {
            const birthday = birthdayTemplate(data);
            allBirthdays.innerHTML += birthday;
        };
    });

fetch('https://birthday-app-production.up.railway.app/birthdays')
    .then(response => response.json())
    .then(json => {
        const todayBirthdays = document.querySelector('[todayBirthdays]');
        const howManyBirthdaysToday = document.querySelector('[howManyBirthdaysToday]');
        const fullDate = new Date();
        const dayOnly = fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();
        const monthOnly = fullDate.getMonth() < 10 ? '0' + (fullDate.getMonth() + 1): fullDate.getMonth() + 1;
        const currMonthAndDay = monthOnly + '-' + dayOnly;
        let counter = 0;
        for(let data of json) {
            const birthday = data.dateOfBirth.slice(5);
            if (birthday === currMonthAndDay) {
                todayBirthdays.innerHTML += birthdayTemplate(data);
                counter++;
            };
        };
        howManyBirthdaysToday.textContent = counter;
    });

const showOrHideBirthdays = document.querySelectorAll('[showOrHideBirthdays]');

for(let el of showOrHideBirthdays) {
    el.style.cursor = 'pointer';
    el.onclick = () => {
        el.lastElementChild.classList.toggle('show-hide-birthdays');
        el.nextElementSibling.classList.toggle('d-none');
    };
};