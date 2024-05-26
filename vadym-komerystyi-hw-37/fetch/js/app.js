const numberID = document.querySelector('#number')
const text = document.querySelector('#text')
const shape = document.querySelector('#shape')
const apiUrl = 'https://api.adviceslip.com/advice'

async function getAllPosts() {
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const advices = data.slip

    numberID.textContent = advices.id
    text.textContent = advices.advice
  } catch (error) {
    console.log(error)
    text.textContent = 'Failed to fetch advice. Please try again later.'
  }
}

shape.addEventListener('click', getAllPosts)
