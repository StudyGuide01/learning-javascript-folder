
// import {users} from './data.js';
// const userForm = document.querySelector('#user-form');
// const userName = document.querySelector('#name');
// const age = document.querySelector('#age');
// const city = document.querySelector('#city');


// class User{

// constructor(...user) {
// const [userName, age, city] = user;
// this.userName = userName;
// this.age = age;
// this.city = city;
// }

// }


// userForm.addEventListener('submit',function(e){
// e.preventDefault();
// const user = new User(userName.value, age.value, city.value);
// users.push(user);
// console.log(users);
// })



const userForm = document.querySelector('#user-form');
const userName = document.querySelector('#name');
const age = document.querySelector('#age');
const city = document.querySelector('#city');

class User {
  constructor(...user) {
    const [userName, age, city] = user;
    this.userName = userName;
    this.age = age;
    this.city = city;
  }
}

userForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  const user = new User(userName.value, age.value, city.value);
//   const user = 'hello'

  // API call to backend
  const res = await fetch('http://localhost:8000/api/user/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });

  const data = await res.json();
  console.log(data);
});
