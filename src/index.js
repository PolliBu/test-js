
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

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// const selectors = {
//     day: document.querySelector('.date-day'),
//     date: document.querySelector('.date'),
//     month: document.querySelector('.date-month'),
//     year: document.querySelector('.date-year'),
//     clock: document.querySelector('.digital-clock'),
//     seconds: document.querySelector('.clock-seconds__arrow'),
//     minutes: document.querySelector('.clock-minutes__arrow'),
//     hours: document.querySelector('.clock-hours__arrow'),
// }

// setInterval(() => {
//     const currentDate = new Date()

//     const day = currentDate.getDay();
//     const date = currentDate.getDate();
//     const month = currentDate.getMonth();
//     const year = currentDate.getFullYear();
   
//     const localeTime = currentDate.toLocaleTimeString('uk-UA');
    
//     selectors.day.textContent = arrDay[day];
//     selectors.month.textContent = namesOfMonth[month];
//     selectors.date.textContent = date;
//     selectors.year.textContent = year;
//     selectors.clock.textContent = `Пточний час ${localeTime}`;

//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();
//     const secondsDeg = 360 / 60 * seconds;
//     const minutesDeg = 360 / 60 * minutes;
//     const hoursDeg = 360 / 12 * hours +(360/12/60)*minutes;

//     selectors.seconds.style.transform = `rotate(${secondsDeg}deg)`;
//     selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//     selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;

// },1000)

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML
// та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по
// черзі має з'являтись смайлик з затримкою в 1 секунду
// ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами
// в якому кожен з них буде відповідати за своє віконце,
// після чого оброби даний масив за допомогою методу
// Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт
// автоматично визначав чи гравець переміг, чи ні.
// Якщо в кожному віконці однаковий смайлик це означає що користувач
// переміг
// Виводить модальне вікно з повідомленням про статус гри
// ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game"
// поле має очищатись, а гра починатись з початку.

// const startBtn = document.querySelector('.js-start');
// const container = document.querySelector('.js-container');
// // console.log(startBtn);
// // console.log(container);
// startBtn.addEventListener('click', handleStart);
// function handleStart() {
//     const promise = [...container.children].map(() =>
//         createPromise())
//     // console.log(promise);
//     Promise.allSettled(promise)
//         .then(items => {
//             const isWinner = items.every(item => item.status === "fulfilled") || items.every(item => item.status === "rejected");
//             // console.log(items);
//             items.forEach((item, i) => {
//                 container.children[i].textContent = '';
//                 setTimeout(() => {
//                     container.children[i].textContent = item.value || item.reason;
//                     if (i === items.length - 1) {
//                         const instance = basicLightbox.create(`
//             <h1>${isWinner ? "Winner" : "Loser"}</h1>`)
//                         instance.show()
//                     }
//                 }, 1000 * (i + 1));
//             })
              
//     })
// }
//     function createPromise() {
//         return new Promise((resolve, reject) => {
//             const random = Math.random()
//             if (random > 0.5) {
//                 resolve('🤑')
//             } else {
//                 reject ('👿')
//             }
//         })
//     }

// function getWeather(city, days) {
//     const BASE_URL = 'http://api.weatherapi.com/v1';
//     const API_KEY = '750849388de540d38ed121015232911';
//     return fetch(
//         `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
//     ).then((resp) => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json();
//     });
// }

// getWeather('Paris',5).then(data =>console.log(data)).catch(err=>console.log(err))

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу
// погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати
// прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди
// (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити
// пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією
// отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.

// const searchForm = document.querySelector(".js-search-form");
// const list = document.querySelector(".js-list");

// searchForm.addEventListener("submit", handleSearch);

// function handleSearch(event) {
//     event.preventDefault();
    
//     const { city, days } = event.currentTarget.elements;
//     // console.dir(event.currentTarget);
//     // console.log("city", city.value);
//     // console.log("days", days.value);
//     serviceWeather(city.value, days.value)
//         .then(data => {
//             console.log(data);
//             list.innerHTML = createMarkup(data.forecast.forecastday)
//         })
//         .catch(error => console.log(error))
//         .finally(() => searchForm.reset())
// }
// function serviceWeather(city = "", days = 1) {
//     const BASE_URL = "http://api.weatherapi.com/v1";
//     const API_KEY = "47cce444510845a3b5890337232811";

//     const params = new URLSearchParams({
//         key: API_KEY,
//         q: city,
//         days: days,
//         lang: "uk"
//     })

//     return fetch(`${BASE_URL}/forecast.json?${params}`)
//         .then(response => {
//             if(!response.ok) {
//                 throw new Error(response.statusText)
//             }

//             return response.json();
//         })
// }

// function createMarkup(arr) {
//     return arr.map(({
//         date,
//         day: {
//             avgtemp_c,
//             condition: {
//                 text,
//                 icon
//             }
//         }
//     }) => `
//         <li class="weather-card">
//             <img src="${icon}" alt="${text}" class="weather-icon">
//             <h2 class="date">${date}</h2>
//             <h3 class="weather-text">${text}</h3>
//             <h3 class="temperature">${avgtemp_c} C</h3>
//         </li>
//     `).join("")
// }


// function createMarkup(arr) {
//     return arr.map(({
//         date,
//         day: {
//             avgtemp_c,
//             condition: {
//                 text,
//                 icon
//             }
//         }
//     }) => `
//     <li class="weather-card">
//     <img src="${icon}" alt="${text}" class="weather-icon">
//     <h2 class="date">${date}</h2>
//     <h3 class="weather-text">${text}</h3>
//     <h3 class="temperature">${avgtemp_c} C</h3>
//     </li>
//     `).join("")
//  }

// const container = document.querySelector('.js-movie-list');
// const loadMore = document.querySelector('.js-load-more');
// let page = 1;

// loadMore.addEventListener('click', onLoadMore)

// serviceMovie()
//     .then(data => {
//         console.log(data);
//         container.insertAdjacentHTML('beforeend', createMarkup(data.results))

//         if (data.page < data.total_pages) {
//             loadMore.classList.replace("load-more-hidden", "load-more")
//         }
//     })
// .catch(error=>console.log('Error!!!!!',error))

// function serviceMovie(page=1) {
//     const BASE_URL = "https://api.themoviedb.org/3";
//     const END_POINT = "/trending/movie/week";
//     const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//     const queryParams = new URLSearchParams({
//         api_key: API_KEY,
//         page: page
//     })

//     return fetch(`${BASE_URL}${END_POINT}?${queryParams}`)
//         .then(resp => {
//             if (!resp.ok) {
//         throw new Error(resp.statusText)
//             }
//             return resp.json()
// })
// }

// function createMarkup(arr) {
//     return arr.map(({ poster_path, release_date, original_title, vote_average }) =>`
//         <li class="movie-card">
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
//             <div class="movie-info">
//                 <h2>${original_title}</h2>
//                 <p>Release date: ${release_date}</p>
//                 <p>Vote average: ${vote_average}</p>
//             </div>
//         </li>
//     `).join("")
// }

// function onLoadMore() {
//     page += 1;
//     serviceMovie(page)
//         .then(data => {
//             container.insertAdjacentHTML("beforeend", createMarkup(data.results))
            
//             if (data.page >= data.total_pages) {
//                 loadMore.classList.replace("load-more","load-more-hidden")
//             }
//     })
// }

// function serviceMovie(page=1) {
//     const BASE_URL = "https://api.themoviedb.org/3";
//     const END_POINT = "/trending/movie/week";
//     const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//         const queryParams = new URLSearchParams({
//         api_key: API_KEY,
//         page: page
//         })
    
//     return axios.get(`${BASE_URL}${END_POINT}?${queryParams}`)
//         .then(resp => {
//             console.log(resp);
//             return resp.data
//         })
//         .catch(error => {
//         throw new Error(error)
//     })
// }

// async function render() {
//     try {
//         const data = await serviceMovie()
//         container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//     } catch (error) {
//         console.log("Error", error);
//     }
// }

// render()

// async function serviceMovie(page = 1) {
//  const BASE_URL = "https://api.themoviedb.org/3";
//     const END_POINT = "/trending/movie/week";
//     const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//     const queryParams = new URLSearchParams({
//         api_key: API_KEY,
//         page: page
//     })
//     try{
//     const res = await axios.get(`${BASE_URL}${END_POINT}1?${queryParams}`)
  
//     return await res.data
//     } catch (error) {
//         throw new Error(error)
// }

// serviceMovie()

// const container = document.querySelector('.js-movie-list');
// const guard = document.querySelector('.js-guard');
// let page = 1;

// const options = {
//     root: null,
//     rootMargin: "300px",
//     threshold: 0
// }

// const observer = new IntersectionObserver(handlePagination, options)

// serviceMovie()
//     .then(data => {
//         container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//         if (data.page < data.total_pages) {
//             observer.observe(guard)
//         }
//     })
// .catch (eroor=> console.log(eroor))

// function serviceMovie(page=1) {
//     const BASE_URL = "https://api.themoviedb.org/3";
//     const END_POINT = "/trending/movie/week";
//     const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//     const queryParams = new URLSearchParams({
//         api_key: API_KEY,
//         page: page
//     })

//     return fetch(`${BASE_URL}${END_POINT}?${queryParams}`)
//         .then(resp => {
//             if (!resp.ok) {
//         throw new Error(resp.statusText)
//             }
//             return resp.json()
// })
// }

// function createMarkup(arr) {
//     return arr.map(({ poster_path, release_date, original_title, vote_average }) =>`
//         <li class="movie-card">
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
//             <div class="movie-info">
//                 <h2>${original_title}</h2>
//                 <p>Release date: ${release_date}</p>
//                 <p>Vote average: ${vote_average}</p>
//             </div>
//         </li>
//     `).join("")
// }

// function handlePagination(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             page += 1;
//             serviceMovie(page)
//                 .then((data) => {
//                 container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//                     if (data.page >= data.total_pages) {
//                     observer.unobserve(entry.target)
//                 }
//                 })
//             .catch(eroor=>console.log(eroor))
//         }
//     })
// }

// const box = document.querySelector('.box');
// const btn = document.querySelector('button');

// btn.addEventListener("click", animation);

// function animation() {
//     let position = 0;
//     const id = setInterval(frame, 10)
//     function frame() {
//         if (position === 250) {
//             clearInterval(id)
//         } else {
//             position ++;
//             box.style.top = `${position}px`;
//             box.style.left = `${position}px`;

//         }
//     }
// }

// let position = 0;

// function animation() {
//     position++;
//     box.style.top = `${position}px`;
//     box.style.left = `${position}px`;

//     if (position < 250) {
//         requestAnimationFrame(animation)
//     }
// }
// btn.addEventListener('click', requestAnimationFrame(animation))

// const id = requestAnimationFrame(animation)
// cancelAnimationFrame(id)

const selectors = {
    button: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();

        if(selectedDates[0] - currentDate <= 0) {
            console.log("false");
            selectors.button.disabled = true;
            return;
        } else {
            selectors.button.disabled = false;
        }

        selectors.button.addEventListener("click", () => {
            selectors.button.disabled = true;
            const id = setInterval(() => {
                timer(selectedDates[0], id)
            }, 1000)
        })
    }
  };

flatpickr("#datetime-picker", options);

function timer(selectDate, id) {
    const currentDate = new Date();
    const deltaTime = selectDate - currentDate;

    if(deltaTime <= 0) {
        clearInterval(id)
        return;
    }

    const days = deltaTime > 0 ? Math.floor(deltaTime / 1000 / 60 / 60 / 24) : 0;
    const hours = deltaTime > 0 ? Math.floor(deltaTime / 1000 / 60 / 60 ) % 24 : 0;
    const minutes = deltaTime > 0 ? Math.floor(deltaTime / 1000 / 60 ) % 60 : 0;
    const seconds = deltaTime > 0 ? Math.floor(deltaTime / 1000 ) % 60 : 0;

    selectors.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    selectors.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
    selectors.hours.textContent = hours < 10 ? `0${hours}` : hours;
    selectors.days.textContent = days < 10 ? `0${days}` : days;  
}