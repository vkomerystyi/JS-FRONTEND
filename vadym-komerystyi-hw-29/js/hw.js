const billAmount = document.querySelector('#bill-amount')
const numberOfPeople = document.querySelector('#number-of-people')
const tipAmount = document.querySelector('#tip__amount')
const tipTotal = document.querySelector('#tip__total')
const resetBtn = document.querySelector('#reset-btn')

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let originalBillValue = Number(billAmount.value)
    let originalNumberOfPeople = Number(numberOfPeople.value)

    const selectRadio = document.querySelector('input[name="tip"]:checked')

    const percentages = Number(selectRadio.value.slice(0, -1)) / 100

    const amountOfTip = Math.round(originalBillValue * percentages * 100) / 100
    const totalAmount = originalBillValue + amountOfTip
    const tipAmountPerson = Math.round((amountOfTip / originalNumberOfPeople) * 100) / 100
    tipAmount.innerText = '$' + tipAmountPerson
    const tipTotalPerson = Math.round((totalAmount / originalNumberOfPeople) * 100) / 100
    tipTotal.innerText = '$' + tipTotalPerson
  }
})
resetBtn.addEventListener('click', () => {
  billAmount.value = '0'
  numberOfPeople.value = '0'
  tipAmount.innerText = '$0'
  tipTotal.innerText = '$0'
})
