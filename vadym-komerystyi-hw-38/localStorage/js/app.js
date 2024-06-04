// Utility functions for localStorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('data')) ?? []
const setLocalStorage = (dbText) => localStorage.setItem('data', JSON.stringify(dbText))
// Create
const createData = (dataText) => {
  const dbText = getLocalStorage()
  dbText.push(dataText)
  setLocalStorage(dbText)
}
// Read
const readData = () => getLocalStorage()
// Update
const updateData = (index, data) => {
  const dbText = readData()
  dbText[index] = data
  setLocalStorage(dbText)
}
// Delete
const deleteData = (index) => {
  const dbText = readData()
  dbText.splice(index, 1)
  setLocalStorage(dbText)
}
// Validate input
const isValid = () => document.getElementById('textarea').reportValidity()
// Save data (create or update)
const saveData = () => {
  if (!isValid()) {
    return
  }
  const textarea = document.getElementById('textarea')
  const dataToDo = { text: textarea.value }

  const index = textarea.dataset?.index ? Number(textarea.dataset.index) : null
  const createOrUpdate = index === null ? createData : updateData.bind(null, index)
  createOrUpdate(dataToDo)

  textarea.value = ''
  textarea.dataset.index = ''

  updateList()
}
const createList = (data, index) => {
  const newLi = document.createElement('li')
  newLi.classList.add('list-group-item')
  newLi.innerText = `${data.text}`

  newLi.addEventListener('click', () => {
    const textarea = document.getElementById('textarea')
    textarea.value = data.text
    textarea.dataset.index = index
  })

  newLi.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    deleteData(index)
    updateList()
  })
  document.querySelector('.list-group').appendChild(newLi)
}
// Clear list
const clearList = () => {
  const listItems = document.querySelectorAll('li')
  listItems.forEach((li) => li.parentNode.removeChild(li))
}
// Update list
const updateList = () => {
  const dbText = readData()
  clearList()
  dbText.forEach(createList)
}
// Initial update of the list
updateList()
// Add event listener for save button
document.getElementById('save').addEventListener('click', saveData)
