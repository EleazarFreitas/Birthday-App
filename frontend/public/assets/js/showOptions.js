const optionsGear = document.querySelector('[optionsGear]');
const options = document.querySelector('[options]');
const deletePopup = document.querySelector('[deletePopup]');
const id = Number(new URL(window.location).searchParams.get('id'));

optionsGear.onclick = () => {
    options.classList.toggle('d-none');
};

options.firstElementChild.href += '?id=' + id;

options.onclick = e => {
    if (e.target.parentNode.tagName === 'BUTTON') {
        options.classList.add('d-none');
        deletePopup.classList.remove('d-none');
    };
};

deletePopup.onclick = e => {
    const deleteButton = e.target;
    e.preventDefault();
    if (deleteButton.parentNode.tagName === 'FORM') {
        fetch('https://birthday-app.up.railway.app/birthdays/' + id, {
            method: 'delete'
        }).then(() => {
            window.location.href = '../../../resources/views/viewAll.html';
        });
    };
    if (deleteButton.tagName === 'BUTTON') {
        deletePopup.classList.add('d-none');
    };
};