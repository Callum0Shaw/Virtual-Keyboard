import Key from './Key.js';
import SpecialKey from './SpecialKey.js';
import * as helper from '../lib/helpers.js';

export default class Keyboard {
  constructor() {
    this.keys = [];
    this.state = {
      capsLock: false,
      shift: false,
      alt: false,
      ctrl: false,
      lang: 'eng',
    };
  }

  createKeys(map) {
    map.forEach((el) => {
      if (el.type === 'special') {
        this.keys.push(new SpecialKey(el.main, el.row, el.class));
      } else {
        this.keys.push(new Key(el.main, el.row, el.class, el.shift));
      }
    });
  }

  createHtml() {
    let keyboardHtml = '<div class="keyboard">';
    let row;
    // Initalise keys html
    const keysHtml = this.keys.reduce((acc, cur) => {
      if (cur.row !== row) {
        row = cur.row;
        const newRowHtml = helper.createRowHtml(row);

        return `${acc}${newRowHtml}${cur.html}`;
      }

      return `${acc}${cur.html}`;
    }, '');

    keyboardHtml += `${keysHtml}</div>`;

    document.querySelector('body').insertAdjacentHTML('beforeend', keyboardHtml);
  }

  addEventListeners() {
    const regKeys = document.querySelectorAll('.reg-key');
    const keyElements = document.querySelectorAll('button');

    // add mouseclick events
    this.keys.forEach((key) => {
      const button = document.querySelector(`.${key.class || key.main}`);
      if (key.main === 'Shift') {
        return button.addEventListener('click', () => {
          helper.handleShift(keyElements, this.keys, this.shift);
          this.shift = !this.shift;
        });
      }
      if (key.main === 'capsLock') {
        return button.addEventListener('click', () => {
          helper.handleCaps(regKeys, this.capsLock);
          this.capsLock = !this.capsLock;
        });
      }
      button.addEventListener('click', key.addEventListener);
    });

    // add keyboard event
    document.querySelector('body').addEventListener('keydown', (e) => {
      e.preventDefault();
      const element = document.querySelector(`.${e.code}`);
      element.click();
      element.classList.add('buttonActive');
      setTimeout(() => element.classList.remove('buttonActive'), 200);
    });
  }
}
