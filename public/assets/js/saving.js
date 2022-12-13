const saveBtn = document.querySelector('.btn-save');

async function updating (data, id) {
    const url = 'https://birthday-app-production.up.railway.app/birthdays/';
    const endpoint = id ? url + id : url;
    const method = id ? 'put' : 'post';
    fetch(endpoint, {
        method,
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async response => {
        response.body;
        id ? window.location.href = '../../../resources/views/details.html?id=' + id
           : window.location.href = '../../../resources/views/viewAll.html';
    });
};

export function saving (buttonMessageOne, buttonMessageTwo, data, id) {
    saveBtn.firstElementChild.style.display = 'inline-block';
    saveBtn.lastElementChild.classList.add('d-none');
    saveBtn.lastChild.textContent = ' ' + buttonMessageOne;
    setTimeout(() => {
        const savedMsg = setInterval(() => {
            updating(data, id)
            saveBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${buttonMessageTwo}`;
        }, 2000);
    }, 1000);
    setTimeout(() => {
        clearInterval(savedMsg);
    }, 3000);
};