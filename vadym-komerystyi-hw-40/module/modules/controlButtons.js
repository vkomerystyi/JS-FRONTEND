import { previousButton, nextButton } from './DOMManipulations.js'
import { renderMonth } from './renderMonth.js'

const now = new Date()
let currentMonth = now.getMonth()
let currentYear = now.getFullYear()

previousButton.addEventListener('click', () => {
  if (currentMonth === 0) {
    currentMonth = 11
    currentYear--
  } else {
    currentMonth--
  }
  renderMonth(currentMonth, currentYear)
})

nextButton.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentMonth = 0
    currentYear++
  } else {
    currentMonth++
  }
  renderMonth(currentMonth, currentYear)
})

export { currentMonth, currentYear }
