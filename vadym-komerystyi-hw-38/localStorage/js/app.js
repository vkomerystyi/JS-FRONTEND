//  get and set localStorage data
const getLocalStorage = () => JSON.parse(localStorage.getItem('data')) ?? []
const setLocalStorage = (dbText) => localStorage.setItem('data', JSON.stringify(dbText))
// create
const createData = (dataText) => {
  const dbText = getLocalStorage()
  dbText.push(dataText)
  setLocalStorage(dbText)
}
// read
const readData = () => {
  return getLocalStorage()
}
// update
const updateData = (index, data) => {
  const dbText = readData()
  dbText[index] = data
  setLocalStorage(dbText)
}
// delete
const deleteData = (index) => {
  const dbText = readData()
  dbText.splice(index, 1)
  setLocalStorage(dbText)
}

const isValid = () => {
  return document.getElementById('textarea').reportValidity()
}

const saveData = () => {
  if (isValid()) {
    const dataToDo = {
      text: document.getElementById('textarea').value,
    }
    const index = textarea.dataset.index
    if (index === '') {
      createData(dataToDo)
    } else {
      updateData(Number(index), dataToDo)
    }

    textarea.value = ''
    textarea.dataset.index = ''
    updateList()
  }
}

const createList = (data, index) => {
  const newLi = document.createElement('li')
  newLi.classList.add('list-group-item')
  newLi.innerText = `${data.text}`
  newLi.id = `item-${index}`

  newLi.addEventListener('click', () => {
    const newText = document.getElementById('textarea')
    newText.value = data.text
    textarea.dataset.index = index
  })

  newLi.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    deleteData(index)
    updateList()
  })

  document.querySelector('.list-group').appendChild(newLi)
}

const clearList = () => {
  const newLi = document.querySelectorAll('li')
  newLi.forEach((li) => li.parentNode.removeChild(li))
}

const updateList = () => {
  const dbText = readData()
  clearList()
  dbText.forEach(createList)
}

updateList()
document.getElementById('save').addEventListener('click', saveData)
