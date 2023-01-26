import Key from './Key.js';

export default class SpecialKey extends Key {
  constructor(action, main, row) {
    super(main, row, false, false);
    this.action = action;
    this.html = `<button class="special-key ${this.main}">${this.main}</button>`;
  }
}
