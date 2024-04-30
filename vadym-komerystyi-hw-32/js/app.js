const form = document.querySelector('#form')
const valueYears = document.querySelector('#value-years')
const valueMonths = document.querySelector('#value-months')
const valueDays = document.querySelector('#value-days')

function validationForm(form) {
  let result = true

  function removeError(input) {
    const parent = input.parentNode
    const spanErrors = document.querySelectorAll('.error')
    if (parent.classList.contains('error')) {
      parent.classList.remove('error')
    }
    spanErrors.forEach((spanError) => {
      if (spanError.parentNode === parent) {
        spanError.remove()
      }
    })
  }

  function createError(input, text) {
    const parent = input.parentNode
    const spanError = document.createElement('span')
    spanError.classList.add('error')
    spanError.textContent = text
    parent.classList.add('error')
    parent.appendChild(spanError)
  }

  const currentTime = new Date()
  let currentFullYear = currentTime.getFullYear()
  form.querySelectorAll('input').forEach((input) => {
    removeError(input)
    if (input.value == '') {
      createError(input, `Invalid ${input.name}`)
      result = false
    }
    if (input.name === 'day' && (input.value < 1 || input.value > 31)) {
      if (!input.parentNode.classList.contains('error')) {
        createError(input, `Invalid ${input.name}`)
        result = false
      }
    }
    if (input.name === 'month' && (input.value < 1 || input.value > 12)) {
      if (!input.parentNode.classList.contains('error')) {
        createError(input, `Invalid ${input.name}`)
        result = false
      }
    }

    if (input.name === 'year' && (input.value < 1900 || input.value > currentFullYear)) {
      if (!input.parentNode.classList.contains('error')) {
        createError(input, `Invalid ${input.name}`)
        result = false
      }
    }
  })

  return result
}

function ageCount() {
  const currentTime = new Date()
  let currentDay = currentTime.getDate()
  let currentMonth = currentTime.getMonth() + 1
  let currentFullYear = currentTime.getFullYear()

  const inputDay = parseInt(document.querySelector('#day').value)
  const inputMonth = parseInt(document.querySelector('#month').value)
  const inputYear = parseInt(document.querySelector('#year').value)

  let days = currentDay - inputDay
  let months = currentMonth - inputMonth
  let years = currentFullYear - inputYear

  if (days < 0) {
    months--
    const prevMonthDays = new Date(currentFullYear, currentMonth - 1, 0).getDate()
    days += prevMonthDays
  }

  if (months < 0) {
    years--
    months += 12
  }
  valueYears.innerText = years
  valueMonths.innerText = months
  valueDays.innerText = days
}

form.addEventListener('submit', function (event) {
  event.preventDefault()
  if (validationForm(this)) {
    ageCount()
  }
})
