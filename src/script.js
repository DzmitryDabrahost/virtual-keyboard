/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-assign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-expressions */
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

const keyboardKeyCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Clear',
];

const engKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'ShiftRight',
  'CtrlL', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlR', '←', '↓', '→', 'Clear',
];

const engKeysUpper = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'ShiftRight',
  'CtrlL', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlR', '←', '↓', '→', 'Clear',
];

const rusKeys = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'ShiftRight',
  'CtrlL', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlR', '←', '↓', '→', 'Clear',
];

const rusKeysUpper = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'ShiftLeft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'ShiftRight',
  'CtrlL', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlR', '←', '↓', '→', 'Clear',
];

const keyboardLayouts = [
  [engKeys, engKeysUpper],
  [rusKeys, rusKeysUpper],
];

// add keyboard keys to web

const createButtons = () => {
  keyboardKeyCode.forEach((item) => {
    const button = document.createElement('button');
    button.textContent = `${item}`;
    button.classList.add('keyboard__key');
    keyboardBlock.appendChild(button);
  });
};

// Create flag to Language & CapsLook

let language = 0;
let caps = 0;

createButtons(keyboardLayouts[language][caps]);

// add class to special buttons for keyboard

const uniqueButtons = () => {
  const specialButton = document.querySelectorAll('button');

  specialButton.forEach((item) => {
    switch (item.textContent) {
      case 'Backspace':
      case 'CapsLock':
      case 'Enter':
      case 'ShiftLeft':
      case 'ShiftRight':
        item.classList.add('keyboard__key-long', 'keyboard__special');
        break;

      case 'Space':
        item.classList.add('keyboard__special', 'keyboard__key-long-long');
        break;

      case '↑':
        item.innerText = '↑';
        break;

      case '←':
        item.innerText = '←';
        break;

      case '↓':
        item.innerText = '↓';
        break;

      case '→':
        item.innerText = '→';
        break;

      case 'Delete':
      case 'Tab':
      case 'ControlLeft':
      case 'ControlRight':
      case 'Win':
      case 'AltLeft':
      case 'AltRight':
      case 'Clear':
        item.classList.add('keyboard__special');
        break;

      default:
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

// save keyboard layouts to LocalStorage

window.onload = () => {
  if (localStorage.getItem('langue')) {
    language = +localStorage.getItem('langue');
  }
  changeRegister(keyboardLayouts[language][caps]);
  textarea.focus();
};

const changeLanguage = () => {
  language === 0 ? language = 1 : language = 0;
  changeRegister(keyboardLayouts[language][caps]);

  localStorage.setItem('langue', language);
  changeRegister(keyboardLayouts[language][caps]);
};

let currentPos;

document.addEventListener('click', (event) => {
  const elements = event.target.textContent;
  let start; let end; let textBefore; let textAfter;
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
      textarea.selectionStart = textarea.selectionEnd;
      currentPos = textarea.selectionStart;
      currentPos = textarea.selectionEnd;

      const textareaValueDel = [];

      textarea.value.split('').forEach((el, index) => {
        if (index !== currentPos) {
          textareaValueDel.push(el);
        }
      });
      textarea.value = textareaValueDel.join('');
      textarea.selectionStart = textarea.selectionEnd = currentPos;
      break;

    case 'Enter':
      const newRow = '\n';
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
      caps === 1 ? caps = 0 : caps = 1;
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

    default:
  }

  if (event.target.classList.contains('keyboard__key') && !event.target.classList.contains('keyboard__special')) {
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

const pressed = new Set();

document.addEventListener('keydown', (event) => {
  currentPos = textarea.selectionStart = textarea.selectionEnd;
  pressed.add(event.code);

  const addActiveButton = () => {
    textarea.focus();
    keyboardKeyCode.forEach((item, index) => {
      if (event.code === item) {
        buttons[index].classList.add('keyboard__key-select');
      }
    });
  };
  if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) {
    changeLanguage();
  }

  if (pressed.has('AltLeft')) {
    event.preventDefault();
  }

  if (pressed.has('AltRight')) {
    event.preventDefault();
  }

  if (pressed.has('CapsLock')) {
    caps === 0 ? caps = 1 : caps = 0;
    changeRegister(keyboardLayouts[language][caps]);
  }

  if (pressed.has('Tab')) {
    event.preventDefault();
    textarea.setRangeText('    ');
    textarea.selectionStart = textarea.selectionEnd = currentPos += 4;
  }

  pressed.clear();
  addActiveButton();
});

document.addEventListener('keyup', () => {
  buttons.forEach((button) => {
    if (button.textContent !== 'CapsLock' || caps === 0) {
      button.classList.remove('keyboard__key-select');
    }
  });
});


const description = document.createElement('div');
description.className = 'about';
description.innerHTML = '<p>Клавиатура создана в ОС Windows.</p><ol><li>Переключение языка физической клавиатуры "ShiftLeft" + "AltLeft".</li><li>Кнопка "Win" виртуальной клавиатуры.</li><li>Кнопка "Clear" очищает поле.</li></ol>';

document.body.append(description);
