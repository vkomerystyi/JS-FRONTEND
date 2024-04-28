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
  const currentTime = new Date()
  let currentDay = currentTime.getDate()
  let currentMonth = currentTime.getMonth() + 1
  let currentFullYear = currentTime.getFullYear()

  const inputDay = parseInt(value.day)
  const inputMonth = parseInt(value.month)
  const inputYear = parseInt(value.year)

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
        errorElement.innerText = `Must be a valid ${key}`
        formItem.appendChild(errorElement)
      }
    } else {
      field.classList.remove('error')
      formItem.classList.remove('error')
      if (errorText) {
        errorText.remove()
      }
    }

    if (
      isNaN(inputDay) ||
      isNaN(inputMonth) ||
      isNaN(inputYear) ||
      inputMonth < 1 ||
      inputMonth > 12 ||
      inputYear > currentFullYear ||
      (inputYear === currentFullYear && inputMonth > currentMonth) ||
      (inputYear === currentFullYear && inputMonth === currentMonth && inputDay > currentDay)
    ) {
      console.log('Invalid date')
    } else {
      let days = currentDay - inputDay
      let months = currentMonth - inputMonth
      let years = currentFullYear - inputYear

      // Якщо отримали від'ємне значення днів, потрібно вирахувати це з місяців
      if (days < 0) {
        months--
        // Визначаємо кількість днів у попередньому місяці
        const prevMonthDays = new Date(currentFullYear, currentMonth - 1, 0).getDate()
        days += prevMonthDays
      }

      // Якщо отримали від'ємне значення місяців, потрібно вирахувати це з років
      if (months < 0) {
        years--
        months += 12 // Додаємо 12 місяців до від'ємного значення
      }
      valueYears.innerText = years
      valueMonths.innerText = months
      valueDays.innerText = days
    }
  }
}
form.addEventListener('submit', handleForm)
