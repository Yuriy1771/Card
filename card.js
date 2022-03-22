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

// данная функция инициализирует переменные
function initLets() {
    inputCardNumber = document.querySelector('#cardNumber');
    inputCardName = document.querySelector('#cardName');
    selectYear = document.querySelector('#year');
    selectMonth = document.querySelector('#month');
    inputCW = document.querySelector('#cw');
}

// Валидация запроса на отпавку. Проверяет все ли данные ввел пользователь. 
// Возвращает: 
//  - пустую строку, в случае, если валидация прошла успешно
//  - текст с ошибкой, в случае провала
function validateSendBtn() {
    if(inputCardNumber.value === '' || inputCardNumber.value === '**** **** **** ****') {
        return 'You are not enter <strong>card number</strong>';
    } if(inputCardName.value === '') {
        return 'You are not enter <strong>card name</strong>';
    }if(selectMonth.value === 'Month') {
        return 'You are not chose <strong>month</strong>';
    } if(selectYear.value === 'Year') {
        return 'You are not chose <strong>year</strong>';
    } if(inputCW.value === '') {
        return 'You are not chose <strong>CW</strong>';
    }
    return '';
}

// маска для номера карты
window.addEventListener("DOMContentLoaded", function() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    let matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
    matrix = matrix.replace(/[*\d]/g, function(a) {
        return val.charAt(i++) || "*"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("*");
    setCursorPosition(i, this)
}

    let input = document.querySelector("input");
    input.addEventListener("input", mask, false)
});