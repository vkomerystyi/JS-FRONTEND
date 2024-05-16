import { monthIndexToName } from './calendarUtils.js'
import { monthElement, dateNumberElements } from './DOMManipulations.js'

const renderMonth = (monthIndex, year) => {
  const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const firstDate = new Date(year, monthIndex)
  const firstDay = firstDate.getDay()

  monthElement.innerText = `${year} / ${monthIndexToName[monthIndex]}`

  dateNumberElements.forEach((el, i) => {
    const dateNumber = i + 1 - firstDay
    el.innerText = dateNumber > 0 && dateNumber <= numDaysInMonth ? dateNumber : ''

    const today = new Date()
    if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === i + 1 - firstDay) {
      el.classList.add('today')
    } else {
      el.classList.remove('today')
    }
  })
}

export { renderMonth }
