//console.log(window);
//Grab Single Element
const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Select multiple items
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

//Iterating
const nodeItems = document.querySelectorAll('.item');
const colItems = document.getElementsByClassName('item');

//nodeItems.forEach(item => console.log(item));
// colItems.forEach(item => console.log(item));
// for(let i = 0; i< colItems.length; i++){
//     console.log(colItems[i]);
// }

//Remove items
// const ul = document.querySelector('.items');
// ul.remove();

//DOM manipulation
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'HTML';
// ul.children[1].innerText = 'CSS';
// ul.lastElementChild.innerHTML = '<b>JavaScript</b>';

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

//Event listeners
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.items');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<b>JavaScript</b>';
// })

//Submit the form
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}