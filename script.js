/*const showText = () => 'Hola Mundo'
const showNumber = () => 21
const showBoolean = () => true
const showArray = () => [1, 2, 3]
const showObject = () => ({name: 'Fran'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())

const add = (x, y) => {
    return x + y
}*/

const button1 = document.createElement('button')
button1.innerText = 'click me'

button1.style = 'background: red'

const isAutorized = true

button1.addEventListener('click', () => {
    if(isAutorized){
        return alert('Esta autorizado')
    } 
    alert('no esta autorizado')
})

document.body.append(button1)

/*const user = {
    name: 'Fran',
    age: 21
}

function printInfo(user){
    const {name, age} = user;
    console.log(name, age);
    
    return '<h1>Hola ' + name + '</h1>';
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)

const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'

button.addEventListener('click', function(){
    title.innerText = 'Texto modificado con JS'
    alert('se realizo una actualizacion')
})

document.body.append(title)
document.body.append(button)

const name = 'laptop'
const price = '3000'

const newProduct = {
    name, 
    price
}

console.log(newProduct)

const user = {
    name: 'Kat',
    lastname: 'Rodriguez',
    age: '21',
    address: {
        country: 'Honduras',
        city: 'Tegucigalpa'
    },
    friends: ['Fran', 'Melon'],
    active: true,
    sendMail(){
        return "Sending email..."
    }
};

console.log(user.address.country) */
