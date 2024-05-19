const body = document.querySelector('body')

const createHtmlElem = ({ name, email, body }) => {
  let createHtml = document.createElement('section') // Create a new div element
  createHtml.innerHTML = `
 
    <article>
      <div class="wrap">
        <div class="counter">
          <span><img src="./images/+.svg" alt="" /></span>
          <span>0</span>
          <span><img src="./images/-.svg" alt="" /></span>
        </div>
        <!-- 
        ПОЧАТОК ШАБЛОНУ ЯКИЙ НЕОБХІДНО 4 РАЗИ СТВОРИТИ,НАПОВНИТИ ДАНИМИ З FETCH-ЗАПИТУ ТА  ДОДАТИ НА СТОРІНКУ ЧЕРЕЗ JAVASCRIPT -->
        <div class="info">
          <header>
            <p class="logo">
              <span class="name">${name}</span>
              <span class="data">${email}</span>
            </p>
            <button class="reply"><img class="button" src="./images/reply.svg" alt="" />Reply</button>
          </header>
          <p class="text"> ${body}</p>
        </div> 
        <!-- КІНЕЦЬ ШАБЛОНУ -->
      </div>
    </article>`
  return createHtml
}

const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'

const getAllComments = () => {
  fetch(commentsUrl, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка запроса')
      }
      return response.json()
    })
    .then((data) => {
      const limitedData = data.slice(0, 4)
      limitedData.forEach((elem) => {
        const dataHTML = createHtmlElem(elem)
        body.append(dataHTML)
      })
    })
    .catch((error) => {
      console.log('error', error)
    })
}

getAllComments()
