const btnSend = document.querySelector('.btnSend');
let errorValid = document.querySelector('.errorValid');

let inputNickname;
let inputAge;

btnSend.onclick = () => {
    initLets();
    let resultValid = validateBtnSend();
    if(resultValid === '') {

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
    }
    return '';
}