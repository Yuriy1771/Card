const btnSend = document.querySelector('.btnSend');
let errorValid = document.querySelector('.errorValid');

let inputNickname;
let inputAge;

btnSend.onclick = () => {
    initLets();
    let resultValid = validateBtnSend();
    if(resultValid === '') {
        modalOpen();
        // document.location.href = 'file:///C:/Users/gamep/Desktop/Js_%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8/card/card.html';
    } else {
        errorValid.innerHTML = resultValid;
    }
}

function initLets() {
    inputNickname = document.querySelector('#nickname').value;
    inputAge = document.querySelector('#age').value;
}

function validateBtnSend() {
    if(inputNickname === '') {
        return 'Please, enter your <strong>nickname</strong>'
    } if (inputAge === '') {
        return 'Please, enter your <strong>age</strong>';
    } if(inputAge < 16) {
        return 'You are <strong>still small</strong>';
    }
    return '';
}

// модальное окно при нажати на кнопку Send

const btnOk = document.querySelector('.btnOk');
const close = document.querySelector('.close');
const modalWindow = document.querySelector('#myModal');

function modalOpen() {
    modalWindow.style.display = 'block';
}

close.onclick = () => {
    modalWindow.style.display = 'none';
}

window.onclick = (event) => {
    if(event.target === modalWindow) {
        modalWindow.style.display = 'none';
    }
}