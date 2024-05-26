const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
const section = document.querySelector('section')

function createHTML({ name, email, body }) {
  const article = document.createElement('article')

  article.innerHTML = `
  <div class="wrap">
  <div class="counter">
    <span><img src="./images/+.svg" alt="" /></span>
    <span>0</span>
    <span><img src="./images/-.svg" alt="" /></span>
  </div>
  <div class="info">
  <header>
    <p class="logo">
      <span class="name">${name}</span>
      <span class="data">${email}</span>
    </p>
    <button class="reply"><img class="button" src="./images/reply.svg" alt="" />Reply</button>
  </header>
  <p class="text">${body}</p>
  </div>
  </div>
  `
  section.appendChild(article)
}

function getRandomElements(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

async function getFetchComments() {
  try {
    const dataComments = await fetch(commentsUrl)
    const comments = await dataComments.json()

    const randomComments = getRandomElements(comments, 4)

    randomComments.forEach((text) => {
      return createHTML(text)
    })
  } catch (error) {
    console.log(error)
  }
}
getFetchComments()
