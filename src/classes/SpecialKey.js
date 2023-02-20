import Key from './Key.js';
import * as helper from '../lib/helpers.js';

export default class SpecialKey extends Key {
  constructor(main, row, cssClass) {
    super(main, row, cssClass, false);
    this.html = `<button class="special-key ${this.class}">${this.main}</button>`;
  }

  addEventListener() {
    helper.getSpecialAction(this.innerText);
  }
}
