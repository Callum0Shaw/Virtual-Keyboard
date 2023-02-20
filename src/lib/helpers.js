function createRowHtml(row) {
  // First row does not need a closing tag from previous row
  if (row === 0) return ('<div class="row row0">');
  return `</div><div class="row row${row}">`;
}

function appendToFrontOfBody(html) {
  document.querySelector('body').insertAdjacentHTML('afterbegin', html);
}

function getSpecialAction(key) {
  const textArea = document.querySelector('.textarea');
  let position = textArea.selectionStart;
  switch (key) {
    case 'del':
      textArea.value = textArea.value.slice(0, position) + textArea.value.slice(position + 1);
      textArea.focus();
      textArea.setSelectionRange(position, position);
      break;
    case 'tab':
      textArea.value += '  ';
      break;
    case 'backspace':
      textArea.value = textArea.value.slice(0, position - 1) + textArea.value.slice(position);
      textArea.focus();
      textArea.setSelectionRange(position - 1, position - 1);
      break;
    case 'enter':
      textArea.value += '\n';
      textArea.setSelectionRange(position + 1, position + 1);
      break;
    case 'space':
      textArea.value += ' ';
      break;
    case 'up':
      position = textArea.value.lastIndexOf('\n', position - 1);
      textArea.setSelectionRange(position, position);
      break;
    case 'down':
      position = textArea.value.indexOf('\n', textArea.selectionEnd) + 1 || textArea.value.length;
      textArea.setSelectionRange(position, position);
      break;
    case 'left':
      textArea.focus();
      textArea.setSelectionRange(position - 1, position - 1);
      break;
    case 'right':
      textArea.focus();
      textArea.setSelectionRange(position + 1, position + 1);
      break;
    default:
      break;
  }
}
function handleShift(keyElements, keys, shift) {
  keyElements.forEach((el) => {
    const focusedKey = keys.find((x) => (
      x.main === el.innerText || x.shift === el.innerText
    ));
    if (!shift) {
      // eslint-disable-next-line no-param-reassign
      if (focusedKey.shift) el.innerText = focusedKey.shift;
      // eslint-disable-next-line no-param-reassign
    } else if (focusedKey.shift) el.innerText = focusedKey.main;
  });
}

function handleCaps(regKeys, capsLock) {
  regKeys.forEach((el) => {
    // eslint-disable-next-line no-param-reassign
    if (!capsLock) el.innerText = el.innerText.toUpperCase();
    // eslint-disable-next-line no-param-reassign
    else el.innerText = el.innerText.toLowerCase();
  });
}
export {
  createRowHtml, appendToFrontOfBody, getSpecialAction, handleShift, handleCaps,
};
