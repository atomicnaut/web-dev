// --- Variables ---
// const my_name = 'Chris';
// let my_age = 34;
// my_age = 35;
// console.log(my_age);
// let i_code = true;

// --- Strings ---
// let str = 'My name is ';
// console.log(str += my_name, `and I am ${my_age} years old`);
// // length
// console.log(my_name.length, my_name[0], my_name[my_name.length - 1]);
// // contains
// console.log(my_name.includes('ris'), str.startsWith('my'));
// // updating
// console.log(my_name.toUpperCase(), str.replace('name', 'age').replace('Chris', 35));
// let quote = 'to be or not to be';
// console.log(quote.replaceAll('be', 'code'));
// // example
// let city = 'daLLas';
// let lower = city.toLowerCase();
// let first_letter = lower.slice(0, 1);
// let proper_city = lower.replace(first_letter, first_letter.toLocaleUpperCase());
// console.log(proper_city);

// --- Numbers ---
// let num = 34.6789;
// // toFixed
// console.log(num.toFixed(2));
// // arithmetic operators
// console.log(5 ** 2, 8 % 3);
// // assignment operators
// console.log(num += 5, num *= 2);

// --- Booleans ---
// console.log(3 === 3, '3' === 3, 7 !== 3, 7 <= 3);

// --- Arrays ---
// let array = ['Lauren', 'Blue', 1988, 2008];
// console.log(array, array[0], array.length);
// let random = ['tree', 795, [0, 1, 2]];
// console.log(random[2][2]);
// let numbers = [1, 2, 3, 4, 5];
// // modifying
// console.log(array[1] = 'Goo', array.indexOf('Goo'));
// // adding
// array.push(1987);
// array.unshift('Chris');
// console.log(array);
// // removing
// array.pop();
// array.shift();
// console.log(array);
// console.log(array.splice(0, 1), array.splice(1, 1));
// // for...of
// for (const item of array) {
//     console.log(item);
// }
// // map
// console.log(numbers.map(num => num * 2));
// // filter
// console.log(numbers.filter(num => num <= 3));
// // converting
// const data = 'this is a string but needs to be an array';
// const data_array = data.split(' ');
// console.log(data_array);
// const data_string = data_array.join(' ');
// console.log(data_string);

// --- Coniditionals ---
// let num = 7;
// if (num === 1) {
//     console.log('You are number 1!');
// } else if (num > 1 && num < 10) {
//     console.log('You are in the top 10!');
// } else if (num === 17 || num === 23) {
//     console.log('You are primetime!');
// }
// // switch statement
// switch (num) {
//     case 1:
//     case 2:
//     case 3:
//         console.log('Top 3');
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log('Not too bad');
//         break;
//     case 7:
//         console.log('Lucky number 7');
//         break;
//     default:
//         console.log('Well, at least you tried');
//         break;
// }
// // ternary operator
// (num === 7) ? console.log('You are very lucky...') : console.log('Not today...');

// --- Loops ---
// // for loops
// for (let i = 1; i < 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }
// // example
// const pets = ['Blue', 'Woogie', 'Specks'];
// let my_pets = 'My pets are called ';
// for (let i = 0; i < pets.length; i++) {
//     if (i === pets.length - 1) {   // We are at the end of the array
//         my_pets += `and ${pets[i]}.`
//     } else {
//         my_pets += `${pets[i]}, `
//     }
// }
// console.log(my_pets.slice(0, my_pets.length - 2));
// // while loops
// let i = 0;
// while (i < pets.length) {
//     console.log(pets[i]);
//     i++;
// }
// // do... while
// let x = 0
// do {
//     console.log(x);
//     x++;
// } while (x < 0);

// --- Functions ---
// function log_name(name) {
//     console.log(name);
// }
// log_name('Chris');
// // arrow function
// const add = (x, y) => console.log(x + y);
// add(3, 7);
// // return values
// function square(x) {
//     return x * x;
// }
// let squared = square(2);
// console.log(squared);

// --- Events ---
// const btn = document.querySelector('button');
// const p = document.querySelector('p');
// function random_number() {
//     return Math.floor(Math.random() * 256)
// }
// btn.addEventListener('click', () => {
//     const random_rgb = `rgb(${random_number()}, ${random_number()}, ${random_number()})`;
//     document.body.style.backgroundColor = random_rgb;
//     p.style.color = 'white';
//     p.textContent = random_rgb;
// })

// --- Objects ---
// const person = {
//     name: {
//         first: 'Bob',
//         last: 'Smith'
//     },
//     age: 32,
//     bio() {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name.first}.`);
//     },
// };
// console.log(person.name, person.name.first, person['age']);
// person.bio();
// person.introduceSelf();
// // updating properties
// person.age = 35;
// person['eyes'] = 'blue';
// person.farewell = function () {
//     console.log("Bye everybody!");
// };
// person.farewell();
// console.log(person.age, person.eyes);
// // example
// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;
// console.log(person.height);
// // this
// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };
// const person2 = {
//     name: "Lauren",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };
// person1.introduceSelf();
// person2.introduceSelf();
// // constructors
// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// }
// const salva = new Person("Salva");
// salva.introduceSelf();
// const frankie = new Person("Frankie");
// frankie.introduceSelf();

// --- Classes ---
// class Person {
//     name;
//     constructor(name) {
//         this.name = name;
//     }
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}`);
//     }
// }
// const giles = new Person('Giles');
// giles.introduceSelf();
// // inheritance
// class Professor extends Person {
//     teaches;
//     constructor(name, teaches) {
//         super(name);
//         this.teaches = teaches;
//     }
//     introduceSelf() {
//         console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
//     }
//     grade(paper) {
//         const grade = Math.floor(Math.random() * (5 - 1) + 1);
//         console.log(grade);
//     }
// }
// const walsh = new Professor('Walsh', 'Psychology');
// walsh.introduceSelf();
// walsh.grade('my paper');
// // encapsulation
// class Student extends Person {
//     // private property
//     #year;
//     constructor(name, year) {
//         super(name);
//         this.#year = year;
//     }
//     somePublicMethod() {
//         this.#somePrivateMethod();
//     }
//     // private method
//     #somePrivateMethod() {
//         console.log('You called me?');
//     }
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//     }
//     canStudyArchery() {
//         return this.#year > 1;
//     }
// }
// const summers = new Student('Summers', 2);
// summers.introduceSelf();
// summers.canStudyArchery();
// // summers.#year; // SyntaxError
// summers.somePublicMethod();
// // summers.#somePrivateMethod(); // SyntaxError

// --- Promises ---
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// fetchPromise
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data[0].name);
//     })
//     .catch((error) => {
//         console.error(`Could not get products: ${error}`);
//     });
// // multiple promises
// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`)
//     });
// // any
// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((response) => {
//         console.log(`${response.url}: ${response.status}`);
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`)
//     });

// --- Async and Await ---
// async function fetchProducts() {
//     try {
//         // after this line, our function will wait for the `fetch()` call to be settled
//         // the `fetch()` call will either return a Response or throw an error
//         const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         // after this line, our function will wait for the `response.json()` call to be settled
//         // the `response.json()` call will either return the parsed JSON object or throw an error
//         const data = await response.json();
//         // console.log(data[0].name);
//         return data;
//     }
//     catch (error) {
//         console.error(`Could not get products: ${error}`);
//     }
// }
// // fetchProducts();
// const promise = fetchProducts();
// promise.then((data) => console.log(data[0].name));