const form = document.querySelector('#form')
const valueYears = document.querySelector('#value-years')
const valueMonths = document.querySelector('#value-months')
const valueDays = document.querySelector('#value-days')

function handleForm(event) {
  event.preventDefault()
  const fields = document.querySelectorAll('input')
  const values = {}

  fields.forEach((field) => {
    const { name, value } = field
    values[name] = value
  })

  getUserAge(values)
}

function getUserAge(value) {
  const inputMonth = parseInt(value.month)
  const inputDay = parseInt(value.day)
  const inputYear = parseInt(value.year)
  const currentFullYear = new Date().getFullYear()

  for (let key in value) {
    const field = document.querySelector(`.form__item input[name='${key}']`)
    const formItem = field.closest('.form__item')
    const errorText = formItem.querySelector('.error-text')

    if (value[key] === '') {
      field.classList.add('error')
      formItem.classList.add('error')
      if (!errorText) {
        const errorElement = document.createElement('span')
        errorElement.classList.add('error-text')
        errorElement.innerText = `Please enter ${key}`
        formItem.appendChild(errorElement)
      }
    } else if (
      (key === 'month' && (inputMonth < 1 || inputMonth > 12)) ||
      (key === 'day' && (inputDay < 1 || inputDay > 31)) ||
      (key === 'year' && inputYear > currentFullYear) ||
      inputYear < 0
    ) {
      field.classList.add('error')
      formItem.classList.add('error')
      if (!errorText) {
        const errorElement = document.createElement('span')
        errorElement.classList.add('error-text')
        errorElement.innerText = `Invalid ${key}`
        formItem.appendChild(errorElement)
      }
    } else {
      field.classList.remove('error')
      formItem.classList.remove('error')
      if (errorText) {
        errorText.remove()
      }
      ageCount(value)
    }
  }
}

function ageCount(value) {
  const currentTime = new Date()
  let currentDay = currentTime.getDate()
  let currentMonth = currentTime.getMonth() + 1
  let currentFullYear = currentTime.getFullYear()

  const inputDay = parseInt(value.day)
  const inputMonth = parseInt(value.month)
  const inputYear = parseInt(value.year)

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

form.addEventListener('submit', handleForm)
