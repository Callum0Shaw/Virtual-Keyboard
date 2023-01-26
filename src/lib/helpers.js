function createRowHtml(row) {
  // First row does not need a closing tag from previous row
  if (row === 0) return ('<div class="row row0">');
  return `</div><div class="row row${row}">`;
}

function appendToFrontOfBody(html) {
  document.querySelector('body').insertAdjacentHTML('afterbegin', html);
}

export { createRowHtml, appendToFrontOfBody };
