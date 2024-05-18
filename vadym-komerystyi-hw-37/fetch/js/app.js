const numberID = document.querySelector('#number')
const text = document.querySelector('#text')
const shape = document.querySelector('#shape')
const apiUrl = 'https://api.adviceslip.com/advice'

async function getAllPosts() {
  const response = await fetch(apiUrl)
  const data = await response.json()
  const advices = data.slip

  numberID.textContent = advices.id
  text.textContent = advices.advice
}

shape.addEventListener('click', getAllPosts)
