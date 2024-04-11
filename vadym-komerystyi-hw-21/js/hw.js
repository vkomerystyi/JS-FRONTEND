// Створіть функцію або функції які наповнюють тег body HTML-тегами article.
// Вміст кожного article додається за допомогою циклу та складається з заголовка -тег h3, зображення - тег img, опису - тег p.
// Вміст тегів та атрибути отримуєте програмно(!) з наданого масиву об'єктів contentArray.
// В проект можна самостійно додати файли-зображень з гугла або створити однотипні зображення-заглушки на сайті https://dummyimage.com/

// Масив об'єктів для генерації контенту
const contentArray = [
  {
    title: 'Манго',
    text: 'Манго багате на вітамін C та антиоксиданти, корисне для імунітету.',
    imagePath: 'https://dummyimage.com/288/2c7efa/fff&text=%D0%9C%D0%B0%D0%BD%D0%B3%D0%BE',
    altText: 'Зображення манго',
  },
  {
    title: 'Драконів фрукт',
    text: 'Драконів фрукт сприяє зниженню рівня цукру в крові.',
    imagePath:
      'https://dummyimage.com/288/2c7efa/fff&text=%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%96%D0%B2+%D1%84%D1%80%D1%83%D0%BA%D1%82',
    altText: 'Зображення драконівого фрукта',
  },
  {
    title: 'Лічі',
    text: 'Лічі містить багато вітаміну В, корисне для нервової системи.',
    imagePath: 'https://dummyimage.com/288/2c7efa/fff&text=%D0%9B%D1%96%D1%87%D1%96',
    altText: 'Зображення лічі',
  },

  // додайте більше об'єктів за бажанням
]
const body = document.querySelector('body')

function addContentArticle(addTagName, arrValue) {
  for (let i = 0; i < arrValue.length; i++) {
    const article = document.createElement('article')
    article.classList.add('container')

    const { title, text, imagePath, altText } = arrValue[i]

    const h3 = document.createElement('h3')
    h3.textContent = `${title}`
    article.appendChild(h3)

    const img = document.createElement('img')
    img.src = `${imagePath}`
    img.alt = `${altText}`
    article.appendChild(img)

    const p = document.createElement('p')
    p.textContent = `${text}`
    article.appendChild(p)

    addTagName.appendChild(article)
  }
}
addContentArticle(body, contentArray)
