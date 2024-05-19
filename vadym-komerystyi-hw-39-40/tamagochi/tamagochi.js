// Крок 1: Створення класу Tamagochi
// Створити клас Tamagochi з такими властивостями:
// ім'я (name)
// вік в днях (ageDays)
// рівень здоров'я (healthValue)
// рівень щастя (happinessValue)
// рівень ситості (satietyValue)

// Додати методи для взаємодії з тамагочі:
// healthUp(): збільшити здоров'я на одиницю
// happyUp(): збільшити щастя на одиницю
// play(): грати з тамагочі (зменшує ситість, щастя та здоров'я на одиницю)
// feedUp(): годувати тамагочі (збільшити ситість на одиницю)
// clean(): прибирати (збільшити здоров'я на одиницю)
// shopping(): шопінг (збільшити щастя на одиницю)
// stateAnalyzer(): перевірка стану тамагочі (живий чи ні)

// Крок 2: Створення декількох об'єктів Tamagochi
// Створити декілька різних об'єктів тамагочі, використовуючи клас Tamagochi.
// Симулювати життя кожного тамагочі, викликаючи різні методи.
// Перевірити стан кожного тамагочі після симуляції.

// (Необов'язково):Зберігайте всі об'єкти в масиві та пройдіться по ньому, використовуючи цикли для симуляції життя та аналізу стану.

class Tamagotchi {
  constructor(name, ageDays, healthValue, happinessValue, satietyValue) {
    this.name = name
    this.ageDays = ageDays
    this.healthValue = healthValue
    this.happinessValue = happinessValue
    this.satietyValue = satietyValue
  }

  healthUp() {
    this.healthValue += 1
  }

  happyUp() {
    this.happinessValue += 1
  }

  play() {
    this.satietyValue -= 1
    this.healthValue -= 1
    this.happinessValue -= 1
  }

  feedUp() {
    this.satietyValue += 1
  }

  clean() {
    this.healthValue += 1
  }

  shopping() {
    this.happinessValue += 1
  }

  stateAnalyzer() {
    if (this.healthValue <= 0 || this.happinessValue <= 0 || this.satietyValue <= 0) {
      console.log(`${this.name} помер.`)
      return false
    } else {
      console.log(`${this.name} почувається добре!`)
      return true
    }
  }
}

// Створення декількох об'єктів Tamagotchi
const tamagotchi1 = new Tamagotchi('Тама1', 0, 5, 5, 5)
const tamagotchi2 = new Tamagotchi('Тама2', 0, 4, 4, 4)
const tamagotchi3 = new Tamagotchi('Тама3', 0, 3, 3, 3)

// Симуляція життя Тамагочі
tamagotchi1.play()
tamagotchi1.feedUp()
tamagotchi1.happyUp()
tamagotchi1.clean()

tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.play()
tamagotchi2.shopping()

tamagotchi3.feedUp()
tamagotchi3.happyUp()
tamagotchi3.clean()

// Зберігання всіх об'єктів у масиві
const tamagotchis = [tamagotchi1, tamagotchi2, tamagotchi3]

// Аналіз стану всіх Тамагочі за допомогою циклу
tamagotchis.forEach((tamagotchi) => {
  tamagotchi.stateAnalyzer()
})
