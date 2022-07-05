// console.log('Hello');
// let number = 2;
// number = 4;
// console.log(number);
// let a = 10, b = '20', c = 30;
// let d = 50;
// d = String(d);
// console.log(typeof d);
// let f = 'Hello world';
// console.log(a+b);
// let title = document.querySelector('.title');
// console.log(title);

// // Добававление єлемента одного 
// const container = document.querySelector('.container');
// const span = document.createElement('span');
// container.appendChild(span);
// span.textContent='First span';
// span.classList.add('subtitle');


// //  Добавление разметки 
// const navigation = document.querySelector('.navigation');
// console.log( navigation);

// const list = `
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// `;
// navigation.innerHTML= list;




// // Create element atribute 
// const hyper = document.createElement('a');
// container.appendChild(hyper);
// hyper.textContent='Dont click';
// hyper.href='about.html';


// const mess = prompt('Enter password');
// let pasword = 'qwerty';
// let pasword2 = 123;
// if (mess == pasword || mess == pasword2 ) {
//     alert('Welcome');
    
// } else { 

// alert('Buy');
//     }

// const mess = prompt('Enter password');
// const messrepeat = prompt('Please parol');

// if (mess == messrepeat) {
//     alert('Good');
    
// } else {
//     alert('Goodbay');
// }

// const weather = prompt('Какая температура?');
// if (weather > 15) {
//     alert('Тепло');
    
// } else if(weather<5) {
//     alert('{Холодно');
    
// } else{
//     alert('Norma');
// }

//  Задачка #1
// const enterAge = prompt('Введите ваш возраст');
// console.log(18 - enterAge);

// if (enterAge > 18){
//    alert('Okey');
// } else{
//     alert('Вам осталось  ' + (18 - enterAge) + ' ' + 'let');
// }
 
// const userPassword = 333;
// if(userPassword==333){

//     prompt('Отлично, как вас зовут?');

// } else{
//     alert('Пароль не верный');
// }
// const userName = 'Ваня';
// if(userName === 'Ваня'){
//     alert('Welcome');
// } else{
//     alert('Неверное имя');
// }



// const age = prompt('How old do you?');
// const password = 100;
// const userName =  'Ivan';
// if (age > 18) {

//     prompt('Please password');
    
//     if (password == 100) {

//         prompt('What is you name?'); 
//     } 
//     else {
//         alert('Goodbay');
        
//     }
//     if(userName =='Ivan' ){
//         alert('Welcome');
//     }else{
//     alert('Bay');
//     }
// } 
// else {
//     alert('you yearly');
// }

// Массив
//  const mess = ['red', 'green', 'blue'];
//  if (mess.includes('green')) {
//      alert('Нашел');
//  } else {
//     alert('yt Нашел'); 
//  }
//  Обьект
// const obj = {
// one: 'red',
// two: 'green',
// three: 'blue',

// };
// console.log(obj.three);
// const mess = ['red', 'green', 'blue'];
// for (let index = 1; index <= 1; index++) {
//     // const element = mess[index];
//     console.log(mess[index]);
// }




                //  7.06.2022 D/Z
// 1) 
// объединените все элементов следующего массива в строку.
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// // 2) 
// // С помошью for выведите числа с 0 до 15
// let number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let index = 0; index <= 14; index++) {
//     const element = number[index];
//     console.log(number[index]);
    
// }
// // Практика:
// // Дан массив 
// // a) Выведите чётные числа из этого массива.
// // b) Выведите нечётные числа из этого массива.
// let numbersEvens =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// console.log( numbersEvens.filter(elem => elem % 2 == 0) );
// let numbersOdd = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// console.log( numbersOdd.filter(elem => elem % 2 !== 0) );

// // 4) 
// // Создайте список в файле html
// //      Используя  for,  задайте baсkground-сolor  для чётных рядов списка. 
// color = document.querySelectorAll('li');
// for (let i = 0; i < color.length; i++) {
//     if ( i  % 2 !== 0)
//     color[i].style.backgroundColor = "#AA0000";
// }

// 09.06

// function test() {
//     console.log('Hello JS');
    
// }
// test();

// const btn = document.querySelector('.btn-js');
// console.log(btn);
// btn.addEventListener('click', ()=>{
//     const input = document.querySelector('.input_js').value;
    //    if (input !== '') {
    //        console.log('Okay');
    //    } else {
    //     console.log('Bad');
    //    }
//         if (input.includes('*') || input.includes('#')) {
//             console.log('Error');
//         } else {
//             console.log('Okay');
//         }
// } );
// function input_select() {
//    const input = document.querySelector('.input_js').value;
// //    if (input !== '') {
// //        console.log('Okay');
// //    } else {
// //     console.log('Bad');
// //    }
//     if (input.includes('*') || input.includes('#')) {
//         console.log('Error');
//     } else {
//         console.log('Okay');
//     }
// }
// function testing(){
//     let one = 2;
//     let two = 4;
//     console.log(one + two);

// }
// testing();
// function testing2(x,y) {
//     return x-y;
    
// }
// const test3 = testing2(10,20);
// console.log(test3);
// 11,06
// let myColor = ["Red", "Green", "White", "Black"];
// myColor.forEach((element,index) => {
//     console.log(element + index);
// });
// const list1 = document.querySelectorAll('.list1>li');
// list1.forEach(element => {
//     console.log(element);
//     element.addEventListener('click', test);
    
// });
// function test() {
//     console.log('Hello');
    
// }
// const list1 = document.querySelectorAll('.buttons-list>button');
// const list2 = document.querySelectorAll('.buttons-list>div');



// list1.forEach((element, index) => {
//     element.addEventListener('click', ()=>{

//         list1.forEach(element => {
//             element.classList.remove('active');
//             list2.forEach(item => {
//                 item.classList.remove('content_active');
                
//             });  
//             list2[index].classList.add('content_active');   
//         });
//             list1[index].classList.add('active'); 
     

//     });
  
// });

//   16,06,2022
// const cars=[
//     {
//         marka: 'Fiat', 
//         year: 1927,
//         color: 'Green',
//         photo: './images/fiat.png',
        
//     },
//     {
//         marka: 'BMW', 
//         year: 1938,
//         color: 'Black',
//         photo: './images/bmw.png', 

//     },
//     {
//         marka:'Ford', 
//         year: 1943,
//         color: 'Yelow',
//         photo: './images/ford.png', 

//     }
// ];
// const carsContainer= document.querySelector('.cars_container');
// const divContainer= document.createElement('div');
// carsContainer.appendChild( divContainer);
// divContainer.classList.add('section-cars');
// cars.forEach(car => {
//     console.log(car);
//     const list = `
//     <div>
//         <h1>${car.marka}</h1>
//         <p> Years: ${car.year}</p>
//         <p> Color:  ${car.color} </p>
//         <img src = "${car.photo}"
//     </div>
//     `;
//     divContainer.innerHTML+=list;
// });

// let myColor = ["Red", "Green", "White", "Black"];
// const test = Math.floor(Math.random()*myColor.length);
// console.log(test);
// // 16.06
// // Создать баттон который рандомно красить в цвета из массива DZ
// //  Задачи на мар 



// // 18.06.2022
// const obj = {
//     name: 'Ivan',
//     firstName: 'Dmitrenko',
//     age: 45,
//     about: function(adress) {
//         console.log(`${this.age}, ${this.name},${adress}`);
//     }

// };
// obj.about('Gagarina street');
// console.log(obj);


// // Function constructor
// function User(name,firstName,age) {
//     this.name = name;
//     this.firstName = firstName;
//     this.age = age;
    
// }
// const user1 = new User('Ivan', 'Dmitrenko', 70);
// console.log(user1);



// DZ 20.06 Создать баттон который рандомно красить в цвета из массива DZ
// let myColor = ["RED", "GREEN", "White", "Black"];
//     const button = document.querySelector('.random-color'); 
//     function getRandomColor() {
       
//         return Math.floor(Math.random()*myColor.length);
       
        
//     }
        
   
//    button.addEventListener("click", () => {
//     let test = getRandomColor() ;
//     button.style.backgroundColor = myColor[test] ;
 
    
//   });
    
//  23.06.2022 Карточка товаров
class Phonemobile{
constructor( image,brand,memory,ram,screen,color){
    this.image = image;
    this.brand = brand;
    this.memory = memory;
    this.ram = ram;
    this.screen = screen;
    this.color = color;


}

    card(number, discont){
        this.number = number;
        this.discont = discont;
       
        newcontainer.innerHTML+=  `

<div>
    <img src = "${this.image}">
    <p class="brand_mobile">${this.brand}</p>
    <p>${this.memory}</p>
    <p>${this.ram}</p>
    <p>${this.screen}</p>
    <p>${this.color}</p>
    <p class="price_mobile"><span>Price:</span> ${this.number - (this.discont * this.number)/100}$</p>
    <p class="discountshow"> 
    <span class="old_price">${this.number} $</span>
    <span class="discount_price">Discount: ${(this.discont )}%</span>
    </p>
</div>

`;
let block_array = document.getElementsByClassName('discountshow');
console.log(block_array);
for (let index = 0; index < block_array.length; index++) {
    // const element = block_array[index];
//    console.log(element);
    if (discont==0) {
        // element.classList.add('none');
        block_array[index].className+='none';
        
    }
    else{
        block_array[index].className+='show'; 
    }
}
    
};


}
const info = new Phonemobile('./images/samsung.jpg', 'Samsung Galaxy S 21', 'Memory: 4 gb', 'Ram: 64 gb', 'Screen: 6.2 inch', 'Color: silver', );
const info2 = new Phonemobile('./images/xiaomi.jpg', 'Xiaomi Redmi Note 9 Pro', 'Memory: 6 gb', 'Ram: 64 gb', 'Screen: 6.67 inch', 'Color: gray',);
const info3 = new Phonemobile('./images/iphone.jpg', 'Apple iPhone 11', 'Memory: 4 gb', 'Ram: 128 gb','Screen: 6.1 inch','Color: black');
const cont_mobile = document.querySelector('.container_mobile');
const title = document.createElement('h1');
cont_mobile.appendChild(title);
title.textContent ='discount on all smartphones up to 10%';
title.classList.add('main_title');
const newcontainer = document.createElement('div');
cont_mobile.appendChild(newcontainer);
newcontainer.classList.add('wrapper_mobile');



info.card(300, 4);
info2.card(400, 23);
info3.card(600, 0);



// 25.06.2022
// const reqvest = 'https://jsonplaceholder.typicode.com/users';
// const myRequest = new XMLHttpRequest();
// myRequest.open('GET', reqvest);
// myRequest.responseType='json';
// myRequest.onload =(()=>{
   
// const users = myRequest.response;

// // for (let index = 0; index < users.length; index++) {
// //     const element = users[index];
// //     console.log(element.name);

// // const name = document.querySelector('.user-name');
// // name.innerHTML+=element.name; 
// // }
// const test = users.map(function(value){
//  console.log(value);
//  return value.name + ' ' + value.username;
// });
// const name = document.querySelector('.user-name');
//  name.innerHTML+=test; 
//  const btn = document.querySelector('.btn-js');
//  console.log(btn);
//  btn.addEventListener('click', ()=>{
//     const input = document.querySelector('.input_js').value;
//      for (const key in users) {
//         // console.log(users[key].name);
//         if (input== users[key].name) {
//             console.log('okay');
            
//         }
//      }
// } );

// });


// myRequest.send();
// DZ Программа выводит данные о человеке при вводе в поиск 1.07.2022


const reqvest = 'https://jsonplaceholder.typicode.com/users';
const myRequest = new XMLHttpRequest();
myRequest.open('GET', reqvest);
myRequest.responseType = 'json';
myRequest.onload = (()=>{
    const users = myRequest.response;
    const usersInfo = users.map(function (value) {
        console.log(value);
        return value.name + " " + value.username + "" + value.email;
    });

        const btn = document.querySelector('.btn-js');
        btn.addEventListener('click', ()=>{
        const input = document.querySelector('.input_js').value;
     
        for (const key in users) {
            if (input == users[key].username) {
                const dataUsers = document.querySelector('.user-name');
                // dataUsers.innerHTML+= users[key].name;
                console.log(users[key]);
                dataUsers.innerHTML+=JSON.stringify(users[key]);
            }
            if (input == users[key].name) {
                
            }
            
        }
        
    });
  
});

myRequest.send();
// Переласдача параметров из одной функции в другую
// let number;
// function test1() {
//      number = 10;
//     test2();
// }
// test1();
// function test2() {
//     let test3 = number;
//     console.log(test3);
// }
//  Scroll для страницы
console.log(title);
window.addEventListener('scroll', ()=>{
    let test = window.scrollY;
   if (test >= 236) {
     title.classList.add('brown');
   } else{
    title.classList.remove('brown');
   }
});
// Локальное хранение 
let test2 = 5;
localStorage.setItem('number', test2);
let test3 = localStorage.getItem('number');
console.log(test3);



// Calculator

function calkOne() {
    let rangOne = document.getElementById('one');
    let dollars = document.querySelector('.dollars');
    let wholeRow = document.querySelector('.whole');
    let percent2 = document.querySelector('.percent');
    let percent  = 10; 
    
    rangOne.addEventListener('input', ()=>{
        dollars.innerHTML= rangOne.value   + '$';
        wholeRow.innerHTML = ( percent * rangOne.value ) / 100 + '$';
        
    });
  
    calktwo();
}
calkOne();

function calktwo(){
    let rangTwo = document.getElementById('two');
    let month = document.querySelector('.month');
    
    rangTwo.addEventListener('input', ()=>{
        month.innerHTML= rangTwo.value   + 'Month';
       
    });
}
