export default class Key {
  constructor(main, row, cssClass, shift) {
    this.main = main;
    this.row = row;
    this.shift = shift;
    this.class = cssClass;
    this.html = `<button class="reg-key ${this.class}">${this.main}</button>`;
  }

  addEventListener() {
    const textArea = document.querySelector('.textarea');
    const position = textArea.selectionStart;
    const head = textArea.value.slice(0, position);
    const tail = textArea.value.slice(position);
    const { length } = this.innerText;
    textArea.value = head + this.innerText + tail;
    textArea.focus();
    textArea.setSelectionRange(position + length, position + length);
  }
}
