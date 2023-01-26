import './styles/styles.css';
import Keyboard from './classes/Keyboard.js';
import * as helper from './lib/helpers.js';

/** * Keys ** */
const engKeys = new Map([
  ['`', {
    main: '`', shift: '¬', row: 0, type: 'regular', caps: false,
  }],
  ['1', {
    main: '1', shift: '!', row: 0, type: 'regular', caps: false,
  }],
  ['2', {
    main: '2', shift: '"', row: 0, type: 'regular', caps: false,
  }],
  ['3', {
    main: '3', shift: '£', row: 0, type: 'regular', caps: false,
  }],
  ['4', {
    main: '4', shift: '$', row: 0, type: 'regular', caps: false,
  }],
  ['5', {
    main: '5', shift: '%', row: 0, type: 'regular', caps: false,
  }],
  ['6', {
    main: '6', shift: '^', row: 0, type: 'regular', caps: false,
  }],
  ['7', {
    main: '7', shift: '&', row: 0, type: 'regular', caps: false,
  }],
  ['8', {
    main: '8', shift: '*', row: 0, type: 'regular', caps: false,
  }],
  ['9', {
    main: '9', shift: '(', row: 0, type: 'regular', caps: false,
  }],
  ['0', {
    main: '0', shift: ')', row: 0, type: 'regular', caps: false,
  }],
  ['-', {
    main: '-', shift: '_', row: 0, type: 'regular', caps: false,
  }],
  ['=', {
    main: '=', shift: '+', row: 0, type: 'regular', caps: false,
  }],
  ['del', { main: 'del', row: 0, type: 'special' }],
  ['tab', { main: 'tab', row: 1, type: 'special' }],
  ['q', {
    main: 'q', shift: 'Q', row: 1, type: 'regular', caps: true,
  }],
  ['w', {
    main: 'w', shift: 'W', row: 1, type: 'regular', caps: true,
  }],
  ['e', {
    main: 'e', shift: 'E', row: 1, type: 'regular', caps: true,
  }],
  ['r', {
    main: 'r', shift: 'R', row: 1, type: 'regular', caps: true,
  }],
  ['t', {
    main: 't', shift: 'T', row: 1, type: 'regular', caps: true,
  }],
  ['y', {
    main: 'y', shift: 'Y', row: 1, type: 'regular', caps: true,
  }],
  ['u', {
    main: 'u', shift: 'U', row: 1, type: 'regular', caps: true,
  }],
  ['i', {
    main: 'i', shift: 'I', row: 1, type: 'regular', caps: true,
  }],
  ['o', {
    main: 'o', shift: 'O', row: 1, type: 'regular', caps: true,
  }],
  ['p', {
    main: 'p', shift: 'P', row: 1, type: 'regular', caps: true,
  }],
  ['[', {
    main: '[', shift: '{', row: 1, type: 'regular', caps: false,
  }],
  [']', {
    main: ']', shift: '}', row: 1, type: 'regular', caps: false,
  }],
  ['backspace', { main: 'backspace', row: 1, type: 'special' }],
  ['capsLock', { main: 'capsLock', row: 2, type: 'special' }],
  ['a', {
    main: 'a', shift: 'A', row: 2, type: 'regular', caps: true,
  }],
  ['s', {
    main: 's', shift: 'S', row: 2, type: 'regular', caps: true,
  }],
  ['d', {
    main: 'd', shift: 'D', row: 2, type: 'regular', caps: true,
  }],
  ['f', {
    main: 'f', shift: 'F', row: 2, type: 'regular', caps: true,
  }],
  ['g', {
    main: 'g', shift: 'G', row: 2, type: 'regular', caps: true,
  }],
  ['h', {
    main: 'h', shift: 'H', row: 2, type: 'regular', caps: true,
  }],
  ['j', {
    main: 'j', shift: 'J', row: 2, type: 'regular', caps: true,
  }],
  ['k', {
    main: 'k', shift: 'K', row: 2, type: 'regular', caps: true,
  }],
  ['l', {
    main: 'l', shift: 'L', row: 2, type: 'regular', caps: true,
  }],
  [';', {
    main: ';', shift: ':', row: 2, type: 'regular', caps: false,
  }],
  ['\'', {
    main: '\'', shift: '@', row: 2, type: 'regular', caps: false,
  }],
  ['#', {
    main: '#', shift: '~', row: 2, type: 'regular', caps: false,
  }],
  ['enter', { main: 'enter', row: 2, type: 'special' }],
  ['lShift', { main: 'lShift', row: 3, type: 'special' }],
  ['\\', {
    main: '\\', shift: '|', row: 3, type: 'regular', caps: false,
  }],
  ['z', {
    main: 'z', shift: 'Z', row: 3, type: 'regular', caps: false,
  }],
  ['x', {
    main: 'x', shift: 'X', row: 3, type: 'regular', caps: false,
  }],
  ['c', {
    main: 'c', shift: 'C', row: 3, type: 'regular', caps: false,
  }],
  ['v', {
    main: 'v', shift: 'V', row: 3, type: 'regular', caps: false,
  }],
  ['b', {
    main: 'b', shift: 'B', row: 3, type: 'regular', caps: false,
  }],
  ['n', {
    main: 'n', shift: 'N', row: 3, type: 'regular', caps: false,
  }],
  ['m', {
    main: 'm', shift: 'M', row: 3, type: 'regular', caps: false,
  }],
  [',', {
    main: ',', shift: '<', row: 3, type: 'regular', caps: false,
  }],
  ['.', {
    main: '.', shift: '>', row: 3, type: 'regular', caps: false,
  }],
  ['/', {
    main: '/', shift: '?', row: 3, type: 'regular', caps: false,
  }],
  ['up', { main: 'up', row: 3, type: 'special' }],
  ['rShift', { main: 'rShift', row: 3, type: 'special' }],
  ['lCtr', { main: 'lCrtl', row: 4, type: 'special' }],
  ['lAlt', { main: 'lAtl', row: 4, type: 'special' }],
  ['space', { main: 'space', row: 4, type: 'special' }],
  ['rAlt', { main: 'rAlt', row: 4, type: 'special' }],
  ['rCrtl', { main: 'rCtrl', row: 4, type: 'special' }],
  ['left', { main: 'left', row: 4, type: 'special' }],
  ['down', { main: 'down', row: 4, type: 'special' }],
  ['right', { main: 'right', row: 4, type: 'special' }],
]);

const keyboard = new Keyboard();
const textAreaHtml = '<textarea class="textarea"/>';

keyboard.createKeys(engKeys);
keyboard.createHtml();

helper.appendToFrontOfBody(textAreaHtml);
