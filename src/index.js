
// *************Практика*************** \\
// Для практичного завдання використаємо збірку Parcel та ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання
// товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів,
// для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити
// кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній,
// то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі
// товари видаляються, а користувача перенаправляємо на сторінку Home


// import { createMarkup } from "./templates/templateProduct";
// import instrument from "./product.json";

// const container = document.querySelector(".js-list");
// container.insertAdjacentHTML("beforeend", createMarkup(instrument));

// container.addEventListener('click', handleAdd);
// const PRODUCT_LS_KEY = 'checkout';

// function handleAdd(event) {
//     if (!event.target.classList.contains("js-btn")) {
//         return;
//     }
//     const product = event.target.closest('.js-product');
//     const productId = +product.dataset.id;
//     const currentProduct = instrument.find(({ id }) => id === productId);
//     const products = JSON.parse(localStorage.getItem('checkout')) ?? [];
//     const index = products.findIndex(({ id }) => id === productId);
//     if (index !== -1) {
//         products[index].qty += 1;
//     } else {
//         currentProduct.qty = 1;
//         products.push(currentProduct)
//     }
//     localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
// }


// const date = new Date();

// console.log(typeof date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(typeof
//     date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.time('test async')

// console.log('start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// for (let i = 0; i < 100000; i += 1){
//     console.log('value', i);
// }
// console.timeEnd('test async');

// const date = new Date();
// console.log(date);

// const nameOfMonth = ['січень', "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]ж
// console.log(nameOfMonth[date.getMonth()]);

// const arrDay = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пятниця', 'субота',]
// console.log(arrDay[date.getDay()]);
// console.log('new Date()', date);

// const currentDate = Date.now();

// console.log('Date.now()', currentDate);

// const box = document.querySelector('.js-box');
// const titleTimer = document.querySelector('.js-timer');
// let counter = 11;
// setTimeout(() => {
//     box.style.display="block";
//     const id =  setInterval(() => {
//         console.log(id);
//         counter -= 1;
//         titleTimer.textContent = counter;
        
//         if (!counter) {
//             clearInterval(id);
//             titleTimer.textContent = "x";
//             titleTimer.addEventListener('click', onclick);
//             //   box.style.display="none";
//         }
//     }, 1000);
// }, 1000);

// function onclick() {
//     box.style.display = 'none';
// }

// const currentTime = new Date();
// console.log(currentTime);

// const container = document.querySelector('.js-content');
// const text = document.querySelector('.js-text');
// let count = 10;

// text.textContent = `Залишилось ${count} секунд`;

// const id = setInterval(() => {
//     count -= 1;
//     text.textContent = `Залишилось ${count} секунд`;
// }, 1000)

// setTimeout(() => {
//     clearInterval(id);
//     container.style.display = 'none';
// }, 1000*count)

// Практика
// Потрібно створити два приклади годинника 
// (Електронний та механічний)

const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

const selectors = {
    day: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    month: document.querySelector('.date-month'),
    year: document.querySelector('.date-year'),
    clock: document.querySelector('.digital-clock'),
    seconds: document.querySelector('.clock-seconds__arrow'),
    minutes: document.querySelector('.clock-minutes__arrow'),
    hours: document.querySelector('.clock-hours__arrow'),
}

setInterval(() => {
    const currentDate = new Date()

    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
   
    const localeTime = currentDate.toLocaleTimeString('uk-UA');
    
    selectors.day.textContent = arrDay[day];
    selectors.month.textContent = namesOfMonth[month];
    selectors.date.textContent = date;
    selectors.year.textContent = year;
    selectors.clock.textContent = `Пточний час ${localeTime}`;

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const secondsDeg = 360 / 60 * seconds;
    const minutesDeg = 360 / 60 * minutes;
    const hoursDeg = 360 / 12 * hours +(360/12/60)*minutes;

    selectors.seconds.style.transform = `rotate(${secondsDeg}deg)`;
    selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
    selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;

},1000)