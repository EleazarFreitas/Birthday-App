import { fadeInContent } from "./FadeInContent.js";
import { getCurrAge } from "./getCurrAge.js";

fadeInContent();

function birthdayTemplate (data) {
    const birthdayTemplate = `<a href="resources/views/details.html?id=${data.id}" class="text-decoration-none d-block my-3">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar">
                                        <img class="img-fluid" src="../../public/assets/img/${data.avatar}.png">
                                    </div>
                                    <div class="d-flex align-items-center w-100">
                                        <div>
                                            <span class="text-dark">${data.firstName} ${data.lastName}</span>
                                            <br>
                                            <span class="text-muted years">${getCurrAge(data.dateOfBirth)} years</span>
                                        </div>
                                        <span class="ms-auto text-white dot-index"><i class="fa-solid fa-circle"></i></span>
                                    </div>                                    
                                </div>
                            </a>`;
    return birthdayTemplate;
};

fetch('https://birthday-app-production.up.railway.app/birthdays')
.then(response => response.json())
.then(json => {
    const todayBirthdays = document.querySelector('[todayBirthdays]');
    const howManyBirthdaysToday = document.querySelector('[howManyBirthdaysToday]');
    const fullDate = new Date();
    const dayOnly = fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();
    const monthOnly = fullDate.getMonth() < 10 ? '0' + (fullDate.getMonth() + 1): fullDate.getMonth() + 1;
    const currMonthAndDay = monthOnly + '-' + dayOnly;
    const maxFiveBirthdays = json.filter(data => data.dateOfBirth.slice(5) === currMonthAndDay);
    for(let data of maxFiveBirthdays.slice(0, 5)) {
        todayBirthdays.innerHTML += birthdayTemplate(data);
    };
    howManyBirthdaysToday.textContent = maxFiveBirthdays.length > 5 ? '+ ' + 5 : maxFiveBirthdays.length;
});