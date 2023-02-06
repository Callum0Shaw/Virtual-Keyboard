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
        this.keys.push(new SpecialKey(false, el.main, el.row));
      } else {
        this.keys.push(new Key(el.main, el.row, el.shift, el.caps));
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

    helper.appendToFrontOfBody(keyboardHtml);
  }
}
