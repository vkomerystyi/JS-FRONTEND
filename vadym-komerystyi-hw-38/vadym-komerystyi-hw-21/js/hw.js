// ToDo List з історією змін

// Створіть рішення яке дозволяє користувачеві створювати, редагувати та видаляти завдання, а також зберігає історію всіх змін.
// Основні функції
// Додавання завдання: користувач може додати нове завдання в список.
// Редагування завдання: клікнувши лівою кнопкою мишки на завдання в списку, користувач може його відредагувати.
// Видалення завдання: завдання можна видалити, натиснувши на ньому правою кнопкою мишки.
// Перегляд історії змін: всі дії з завданнями відображаються в історії, яка зберігається в localStorage
// Приклад використання
// Користувач відкриває сторінку і бачить поле для вводу та кнопку для додавання нового завдання. Після введення тексту завдання і натискання кнопки "Додати", завдання додається в список та з'являється у історії змін (на цій самій сторінці, нижче). Користувач може редагувати або видаляти завдання, і ці дії також фіксуються в історії. Завдяки використанню localStorage, всі дані зберігаються між сеансами користування браузером.

const taskInput = document.querySelector('#task')
const taskBtn = document.querySelector('#task-btn')
const listItem = document.querySelector('#list-item')

let dataLocal = JSON.parse(localStorage.getItem('userTasks')) ?? []
taskBtn.addEventListener('click', () => {
  let taskText = taskInput.value

  if (taskText !== '') {
    let data = {
      task: taskText,
    }
    dataLocal.push(data)

    localStorage.setItem('userTasks', JSON.stringify(dataLocal))
  }
  showTasks(taskText)
  taskInput.value = ''
  taskInput.focus()
})
// функция показа задачи что добавили

function showTasks(tasks) {
  const taskHTML = `            
    <div class="text">
      ${tasks}
    </div>
    <div class="box-control">
      <button class="edit-input">Редагувати</button> 
      <button class="delete-input">Видалити</button>
    </div>`
  listItem.insertAdjacentHTML('beforeend', taskHTML)
}
