let tabsNav = document.querySelectorAll('.tabs-nav__item')
let tabContent = document.querySelectorAll('.tab')
let tabName

function selectTabNaV(event) {
  tabsNav.forEach((item) => item.classList.remove('active'))
  event.target.classList.add('active')
  tabName = event.target.getAttribute('data-tabs-nav')
  selectTabContent(tabName)
}

function selectTabContent(tab) {
  tabContent.forEach((item) => {
    item.classList.contains(tab) ? item.classList.add('active') : item.classList.remove('active')
  })
}

tabsNav.forEach((item) => {
  item.addEventListener('click', selectTabNaV)
})
