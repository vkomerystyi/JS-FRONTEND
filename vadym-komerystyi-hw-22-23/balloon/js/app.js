const smile = document.querySelector('#smile')

function keydownListener(e) {
  if (e.key === 'ArrowUp') {
    let currentFontSize = parseFloat(window.getComputedStyle(smile).fontSize)
    smile.style.fontSize = currentFontSize * 1.1 + 'px'
    bomb(currentFontSize)
  }
  if (e.key === 'ArrowDown') {
    let currentFontSize = parseFloat(window.getComputedStyle(smile).fontSize)
    if (currentFontSize < 25) {
      smile.style.fontSize = '25px'
    } else {
      smile.style.fontSize = currentFontSize * 0.9 + 'px'
    }
  }
}

window.addEventListener('keydown', keydownListener)

function bomb(fontSizeElem) {
  if (fontSizeElem > 150) {
    smile.innerHTML = '&#128165;'
    window.removeEventListener('keydown', keydownListener)
  }
}
