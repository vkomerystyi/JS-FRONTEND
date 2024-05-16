// create
document.getElementById('addTodo').addEventListener('click', async () => {
  const input = document.getElementById('todoText')
  const title = input.value

  if (title) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    })
    const todo = await res.json()

    todoToHTML(todo)
    input.value = ''
  }
})

// read
async function getAllTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const todos = await res.json()

  todos.forEach((todo) => todoToHTML(todo))
}

window.addEventListener('DOMContentLoaded', getAllTodos)

function todoToHTML({ id, title, completed }) {
  const todoList = document.querySelector('#todos')

  todoList.insertAdjacentHTML(
    'beforeend',
    `<div class="form-check" id="todo${id}">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" ${completed && 'checked'}/>
      ${title}
      </label>
      <button  onclick="deleteTodo(${id})" type="button" class="btn-close" aria-label="Close" style="font-size: 10px"></button>
    </div>`
  )
}
// delete
async function deleteTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  })
  const data = await res.json()
  if (data) {
    document.getElementById(`todo${id}`).remove()
  }
}
