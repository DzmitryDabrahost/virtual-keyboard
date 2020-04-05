// create textarea and keyboard block to project.

const textarea = document.createElement('textarea');
const keyboardBlock = document.createElement('div');

// add class to textares and keyboard block

textarea.classList.add('keyboard__textarea');
keyboardBlock.classList.add('keyboard__keys');

// add new elements to web 

document.body.appendChild(textarea);
document.body.appendChild(keyboardBlock);

// create keys Array

const engKeys = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "ShiftRight",
    "Control", "Win", "AltLeft", "Space", "AltGraph", "Control", "←", "↓", "→", "Clear"
    ],

    engKeysUpper = [
        "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
        "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Delete",
        "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
        "ShiftLeft", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "ShiftRight",
        "Control", "Win", "AltLeft", "Space", "AltGraph", "Control", "←", "↓", "→", "Clear"
    ],

    rusKeys = [
        "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
        "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Delete",
        "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
        "ShiftLeft", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "ShiftRight",
        "Control", "Win", "AltLeft", "Space", "AltGraph", "Control", "←", "↓", "→", "Clear"
    ],
    
    rusKeysUpper = [
        "Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
        "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Delete",
        "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
        "ShiftLeft", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑", "ShiftRight",
        "Control", "Win", "AltLeft", "Space", "AltGraph", "Control", "←", "↓", "→", "Clear"
    ];

let keyboardLayouts = [
    [engKeys, engKeysUpper],
    [rusKeys, rusKeysUpper]
];

//save keyboard layouts to LocalStorage

window.onload = function () {
    if (localStorage.getItem('langue')) {
        language = +localStorage.getItem('langue');
    }
    changeRegister(keyboardLayouts[language][caps]);
     textarea.focus();
};

// add keyboard keys to web

const createButtons = (element) => {
    element.forEach(item => {
        let button = document.createElement('button');
        button.textContent = `${item}`;
        button.classList.add('keyboard__key');
        keyboardBlock.appendChild(button);
    });
};

//Create flag to Language & CapsLook

let language = 0,
    caps = 0;

createButtons(keyboardLayouts[language][caps]);

//add class to special buttons for keyboard

const uniqueButtons = () => {
    let specialButton = document.querySelectorAll('button');

    specialButton.forEach(item => {
        switch(item.textContent){
            case 'Backspace':
                item.classList.add('keyboard__key-long', 'keyboard__special');

            break;
        }
        switch(item.textContent){
            case 'CapsLock':
                item.classList.add('keyboard__key-long', 'keyboard__special');

            break;
        }
        switch(item.textContent){
            case 'Enter':
                item.classList.add('keyboard__key-long', 'keyboard__special');

            break;
        }
        switch(item.textContent){
            case 'ShiftLeft':
                item.classList.add('keyboard__key-long', 'keyboard__special');

            break;
        }

        switch(item.textContent){
            case 'ShiftRight':
                item.classList.add('keyboard__key-long', 'keyboard__special');

            break;
        }
        
        switch(item.textContent){
            case 'Space':
                item.classList.add('keyboard__special', 'keyboard__key-long-long');

            break;
        }

        switch(item.textContent){
            case '↑':
                item.innerText = '↑';
            break;
        }

        switch(item.textContent){
            case '←':
                item.innerText = '←';
            break;
        }

        switch(item.textContent){
            case '↓':
                item.innerText = '↓';
            break;
        }

        switch(item.textContent){
            case '→':
                item.innerText = '→';
            break;
        }

        switch(item.textContent){
            case 'Delete':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'Tab':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'Control':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'Control':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'Win':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'AltLeft':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'AltGraph':
                item.classList.add('keyboard__special');
            break;
        }

        switch(item.textContent){
            case 'Clear':
                item.classList.add('keyboard__special');
            break;
        }
    });
};
uniqueButtons();

const buttons = document.querySelectorAll('.keyboard__key');

const changeRegister = (element) => {
    buttons.forEach((item, index) => {
        item.innerHTML = element[index];
    });
};

const addActiveButton = () => {
    textarea.focus();
    keyboardLayouts[language][caps].forEach((item, index) => {
        if (event.key === item || event.code === item) {
            buttons[index].classList.add('keyboard__key-select');
        }
    });
};

const changeLanguage = () => {
    language == 0 ? language = 1 : language = 0;
    changeRegister(keyboardLayouts[language][caps]);

    localStorage.setItem('langue', language);
    changeRegister(keyboardLayouts[language][caps]);
};

let currentPos;

document.addEventListener('click', () => {
    let elements = event.target.textContent;
    let start, end, textBefore, textAfter;
    switch (elements) {
        case 'Backspace':
            
            start = textarea.selectionStart;
            end = textarea.selectionEnd;
            textBefore = textarea.value.substring(0, start - 1);
            textAfter = textarea.value.substring(end);
            textarea.value = `${textBefore}${textAfter}`;
            textarea.selectionStart = start - 1;
            textarea.selectionEnd = textarea.selectionStart;

        break;

        case 'Delete':
            currentPos = textarea.selectionStart = textarea.selectionEnd;    

            let textareaValueDel = [];

            textarea.value.split('').forEach((el, index) => {
                if(index != currentPos){
                    textareaValueDel.push(el);
                }
            });

        textarea.value = textareaValueDel.join('');
        textarea.selectionStart = textarea.selectionEnd = currentPos;

        break;

        case 'Enter':

            let newRow = '\n';
            start = textarea.selectionStart;
            end = textarea.selectionEnd;
            textBefore = textarea.value.substring(0, start);
            textAfter = textarea.value.substring(end);
            textarea.value = `${textBefore}${newRow}${textAfter}`;
            textarea.selectionStart = start + newRow.length;
            currentPos = textarea.selectionEnd = textarea.selectionStart;

        break;

        case 'Space':
            currentPos = textarea.selectionStart = textarea.selectionEnd;
            textarea.setRangeText(' ');
            textarea.selectionStart = textarea.selectionEnd = currentPos += 1;

        break;

        case 'CapsLock':

            event.target.classList.toggle('keyboard__key-select');
            caps == 1 ? caps = 0 : caps = 1;
            changeRegister(keyboardLayouts[language][caps]);

        break;

        case 'Win':

            changeLanguage();

        break;

        case 'Tab':
            currentPos = textarea.selectionStart = textarea.selectionEnd;
            textarea.setRangeText('    ');
            textarea.selectionStart = textarea.selectionEnd = currentPos += 4;

        break;

        case 'Clear':

            textarea.value = '';

        break;
    }

    if(event.target.classList.contains('keyboard__key') && !event.target.classList.contains('keyboard__special')){
        
        start = textarea.selectionStart;
        end = textarea.selectionEnd;
        textBefore = textarea.value.substring(0, start);
        textAfter = textarea.value.substring(end);
        textarea.value = `${textBefore}${event.target.textContent}${textAfter}`;
        textarea.selectionStart = start + event.target.textContent.length;
        textarea.selectionEnd = textarea.selectionStart;
       
    }
    textarea.focus();
});

let pressed = new Set();

document.addEventListener('keydown', (event) => {
    currentPos = textarea.selectionStart = textarea.selectionEnd;
    pressed.add(event.key);

    if((pressed.has('ShiftLeft') || pressed.has('Shift')) && pressed.has('AltLeft') || pressed.has('Alt')) {
        changeLanguage();
    }

    if(pressed.has('AltLeft')) {
        event.preventDefault();
    }

    if(pressed.has('AltGraph')) {
        event.preventDefault();
    }
    
    if(pressed.has('CapsLock')) {
        caps == 0 ? caps = 1 : caps = 0;
        changeRegister(keyboardLayouts[language][caps]);
    }

    if(pressed.has('Tab')) {
        event.preventDefault();
        textarea.setRangeText('    ');
        textarea.selectionStart = textarea.selectionEnd = currentPos += 4;
    }

    pressed.clear();
    addActiveButton();
});

document.addEventListener('keyup', (event) => {
    buttons.forEach(button => {
        if(button.textContent != 'CapsLock' || caps === 0) {
            button.classList.remove('keyboard__key-select');
        }
    });
});


let description = document.createElement('div');
description.className = 'about';
description.innerHTML = '<p>Клавиатура создана в ОС Windows.</p><p>Способы переключения языка:</p><ol><li>Комбинация левых клавиш физической клавиатуры "ShiftLeft" + "Alt".</li><li>Кнопка "Win" виртуальной клавиатуры.</li></ol>';
document.body.append(description);