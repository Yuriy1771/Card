const sendBtn = document.querySelector('.btnSend');
let error = document.querySelector('.error');

// валидация sendBtn

let inputCardNumber;
let inputCardName;

initLets();

sendBtn.onclick = () => {
    let resultValid = validateSendBtn();
    if(resultValid === '') {
        
    } else {
        error.innerHTML = resultValid;
        inputCardNumber.style.border = "1px solid red";
        inputCardName.style.border = '1px solid red';
    }
}

function initLets() {
    inputCardNumber = document.querySelector('#cardNumber');
    inputCardName = document.querySelector('#cardName');
};

function validateSendBtn() {
    if(inputCardNumber.value === '') {
        return 'You are not enter <strong>card number</strong>';
    } if(inputCardName.value === '') {
        return 'You are not enter <strong>card name</strong>';
    }
    return '';
}