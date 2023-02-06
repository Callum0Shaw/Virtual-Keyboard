import './styles/styles.css';
import Keyboard from './classes/Keyboard.js';
import * as helper from './lib/helpers.js';

/** * Keys ** */
const engKeys = new Map([
  ['`', {
    main: '`', shift: '¬', row: 0, type: 'regular', caps: false, class: 'BackQuote',
  }],
  ['1', {
    main: '1', shift: '!', row: 0, type: 'regular', caps: false, class: 'Digit1',
  }],
  ['2', {
    main: '2', shift: '"', row: 0, type: 'regular', caps: false, class: 'Digit2',
  }],
  ['3', {
    main: '3', shift: '£', row: 0, type: 'regular', caps: false, class: 'Digit3',
  }],
  ['4', {
    main: '4', shift: '$', row: 0, type: 'regular', caps: false, class: 'Digit4',
  }],
  ['5', {
    main: '5', shift: '%', row: 0, type: 'regular', caps: false, class: 'Digit5',
  }],
  ['6', {
    main: '6', shift: '^', row: 0, type: 'regular', caps: false, class: 'Digit6',
  }],
  ['7', {
    main: '7', shift: '&', row: 0, type: 'regular', caps: false, class: 'Digit7',
  }],
  ['8', {
    main: '8', shift: '*', row: 0, type: 'regular', caps: false, class: 'Digit8',
  }],
  ['9', {
    main: '9', shift: '(', row: 0, type: 'regular', caps: false, class: 'Digit9',
  }],
  ['0', {
    main: '0', shift: ')', row: 0, type: 'regular', caps: false, class: 'Digit0',
  }],
  ['-', {
    main: '-', shift: '_', row: 0, type: 'regular', caps: false, class: 'Minus',
  }],
  ['=', {
    main: '=', shift: '+', row: 0, type: 'regular', caps: false, class: 'Equal',
  }],
  ['del', {
    main: 'del', row: 0, type: 'special', class: 'Delete',
  }],
  ['tab', {
    main: 'tab', row: 1, type: 'special', class: 'Tab',
  }],
  ['q', {
    main: 'q', shift: 'Q', row: 1, type: 'regular', caps: true, class: 'KeyQ',
  }],
  ['w', {
    main: 'w', shift: 'W', row: 1, type: 'regular', caps: true, class: 'KeyW',
  }],
  ['e', {
    main: 'e', shift: 'E', row: 1, type: 'regular', caps: true, class: 'KeyE',
  }],
  ['r', {
    main: 'r', shift: 'R', row: 1, type: 'regular', caps: true, class: 'KeyR',
  }],
  ['t', {
    main: 't', shift: 'T', row: 1, type: 'regular', caps: true, class: 'KeyT',
  }],
  ['y', {
    main: 'y', shift: 'Y', row: 1, type: 'regular', caps: true, class: 'KeyY',
  }],
  ['u', {
    main: 'u', shift: 'U', row: 1, type: 'regular', caps: true, class: 'KeyU',
  }],
  ['i', {
    main: 'i', shift: 'I', row: 1, type: 'regular', caps: true, class: 'KeyI',
  }],
  ['o', {
    main: 'o', shift: 'O', row: 1, type: 'regular', caps: true, class: 'KeyO',
  }],
  ['p', {
    main: 'p', shift: 'P', row: 1, type: 'regular', caps: true, class: 'KeyP',
  }],
  ['[', {
    main: '[', shift: '{', row: 1, type: 'regular', caps: false, class: 'BracketLeft',
  }],
  [']', {
    main: ']', shift: '}', row: 1, type: 'regular', caps: false, class: 'BracketRight',
  }],
  ['backspace', {
    main: 'backspace', row: 1, type: 'special', class: 'Backspace',
  }],
  ['capsLock', {
    main: 'capsLock', row: 2, type: 'special', class: 'CapsLock',
  }],
  ['a', {
    main: 'a', shift: 'A', row: 2, type: 'regular', caps: true, class: 'KeyA',
  }],
  ['s', {
    main: 's', shift: 'S', row: 2, type: 'regular', caps: true, class: 'KeyS',
  }],
  ['d', {
    main: 'd', shift: 'D', row: 2, type: 'regular', caps: true, class: 'KeyD',
  }],
  ['f', {
    main: 'f', shift: 'F', row: 2, type: 'regular', caps: true, class: 'KeyF',
  }],
  ['g', {
    main: 'g', shift: 'G', row: 2, type: 'regular', caps: true, class: 'KeyG',
  }],
  ['h', {
    main: 'h', shift: 'H', row: 2, type: 'regular', caps: true, class: 'KeyH',
  }],
  ['j', {
    main: 'j', shift: 'J', row: 2, type: 'regular', caps: true, class: 'KeyJ',
  }],
  ['k', {
    main: 'k', shift: 'K', row: 2, type: 'regular', caps: true, class: 'KeyK',
  }],
  ['l', {
    main: 'l', shift: 'L', row: 2, type: 'regular', caps: true, class: 'KeyL',
  }],
  [';', {
    main: ';', shift: ':', row: 2, type: 'regular', caps: false, class: 'SemiColon',
  }],
  ['\'', {
    main: '\'', shift: '@', row: 2, type: 'regular', caps: false, class: 'Qoute',
  }],
  ['#', {
    main: '#', shift: '~', row: 2, type: 'regular', caps: false, class: 'BackSlash',
  }],
  ['enter', {
    main: 'enter', row: 2, type: 'special', class: 'Enter',
  }],
  ['lShift', {
    main: 'Shift', row: 3, type: 'special', class: 'ShiftLeft',
  }],
  ['\\', {
    main: '\\', shift: '|', row: 3, type: 'regular', caps: false, class: 'IntlBackSlash',
  }],
  ['z', {
    main: 'z', shift: 'Z', row: 3, type: 'regular', caps: false, class: 'KeyZ',
  }],
  ['x', {
    main: 'x', shift: 'X', row: 3, type: 'regular', caps: false, class: 'KeyX',
  }],
  ['c', {
    main: 'c', shift: 'C', row: 3, type: 'regular', caps: false, class: 'KeyC',
  }],
  ['v', {
    main: 'v', shift: 'V', row: 3, type: 'regular', caps: false, class: 'KeyV',
  }],
  ['b', {
    main: 'b', shift: 'B', row: 3, type: 'regular', caps: false, class: 'KeyB',
  }],
  ['n', {
    main: 'n', shift: 'N', row: 3, type: 'regular', caps: false, class: 'KeyN',
  }],
  ['m', {
    main: 'm', shift: 'M', row: 3, type: 'regular', caps: false, class: 'KeyM',
  }],
  [',', {
    main: ',', shift: '<', row: 3, type: 'regular', caps: false, class: 'Comma',
  }],
  ['.', {
    main: '.', shift: '>', row: 3, type: 'regular', caps: false, class: 'Period',
  }],
  ['/', {
    main: '/', shift: '?', row: 3, type: 'regular', caps: false, class: 'Slash',
  }],
  ['up', {
    main: 'up', row: 3, type: 'special', class: 'ArrowUp',
  }],
  ['rShift', {
    main: 'Shift', row: 3, type: 'special', class: 'ShiftRight',
  }],
  ['lCtr', {
    main: 'Crtl', row: 4, type: 'special', class: 'ControlLeft',
  }],
  ['lAlt', {
    main: 'Atl', row: 4, type: 'special', class: 'AltLeft',
  }],
  ['space', {
    main: 'space', row: 4, type: 'special', class: 'Space',
  }],
  ['rAlt', {
    main: 'Alt', row: 4, type: 'special', class: 'AltRight',
  }],
  ['rCrtl', {
    main: 'Ctrl', row: 4, type: 'special', class: 'ControlRight',
  }],
  ['left', {
    main: 'left', row: 4, type: 'special', class: 'AorrowLeft',
  }],
  ['down', {
    main: 'down', row: 4, type: 'special', class: 'ArrowDown',
  }],
  ['right', {
    main: 'right', row: 4, type: 'special', class: 'ArrowRight',
  }],
]);

const textAreaHtml = '<textarea class="textarea"/>';
helper.appendToFrontOfBody(textAreaHtml);

const keyboard = new Keyboard();

keyboard.createKeys(engKeys);
keyboard.createHtml();
keyboard.addEventListeners();
