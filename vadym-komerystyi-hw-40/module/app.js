

const now = new Date();
console.log(now)
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();
console.log(currentMonth)
console.log(currentYear)

const previousButton = document.querySelector('button.previous');
const nextButton = document.querySelector('button.next');



const monthIndexToName = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

previousButton.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderMonth(currentMonth, currentYear);
})

nextButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderMonth(currentMonth, currentYear);
})
const monthElement = document.querySelector('.month');

const dateNumberElements = [...document.querySelectorAll('.date-number')];

const renderMonth = (monthIndex, year) => {
    const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    console.log(numDaysInMonth);
    const firstDate = new Date(year, monthIndex);
    console.log(firstDate);
    const firstDay = firstDate.getDay();
    console.log(firstDay);

    monthElement.innerText = `${year} / ${monthIndexToName[monthIndex]}`;

    dateNumberElements.forEach((el, i) => {

        const dateNumber = (i + 1) - firstDay;
        el.innerText = dateNumber > 0 && dateNumber <= numDaysInMonth ? dateNumber : '';

        const today = new Date();
        // console.log(today)
        if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === (i + 1) - firstDay) {
            el.classList.add('today');
        } else {
            el.classList.remove('today');
        }
    })
}

renderMonth(currentMonth, currentYear)

