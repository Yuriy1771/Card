const sendBtn = document.querySelector('.btnSend');
let error = document.querySelector('.error');

// валидация sendBtn

let inputCardNumber;
let inputCardName;
let selectMonth;
let selectYear;
let selectCW;

initLets();

sendBtn.onclick = () => {
    let resultValid = validateSendBtn();
    if(resultValid === '') {
        
    } else {
        error.innerHTML = resultValid;
        // inputCardNumber.style.border = "1px solid red";
        // inputCardName.style.border = '1px solid red';
    }
}

function initLets() {
    inputCardNumber = document.querySelector('#cardNumber');
    inputCardName = document.querySelector('#cardName');
    selectYear = document.querySelector('#year');
    selectMonth = document.querySelector('#month');
    selectCW = document.querySelector('#cw');
}

function validateSendBtn() {
    if(inputCardNumber.value === '') {
        return 'You are not enter <strong>card number</strong>';
    } if(inputCardName.value === '') {
        return 'You are not enter <strong>card name</strong>';
    }if(selectMonth.value === 'Month') {
        return 'You are not chose <strong>month</strong>';
    } if(selectYear.value === 'Year') {
        return 'You are not chose <strong>year</strong>';
    } if(selectCW.value === '') {
        return 'You are not chose <strong>CW</strong>';
    }
    return '';
}