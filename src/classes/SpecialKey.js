import Key from './Key.js';
import * as helper from '../lib/helpers.js';

export default class SpecialKey extends Key {
  constructor(main, row) {
    super(main, row, false);
    this.html = `<button class="special-key ${this.main}">${this.main}</button>`;
  }

  addEventListener() {
    helper.getSpecialAction(this.innerText);
  }
}
