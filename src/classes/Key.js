export default class Key {
  constructor(main, row, shift, caps) {
    this.main = main;
    this.row = row;
    this.shift = shift;
    this.caps = caps;
    this.html = `<button class="reg-key ${this.main}">${this.main}</button>`;
  }
}
