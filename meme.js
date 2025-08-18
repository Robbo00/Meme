let pics = []
let quotes = []
try{
    let pics = localStorage.getItem('pics')
    let quotes = localStorage.getItem('quotes')
}
catch(error){
    let pics = ['https://tinyurl.com/2js43e3e', 'https://shorturl.at/R38Ng']
    let quotes = [
    'I dont even say bless you when people sneeze anymore I just stare at em like this', 
    'When somebody tells you a secret you already knew so you gotta act suprised',
    'rando',
    'randy',
    'sandy',
    'mandy',
    'candy'    
]
}

let dynamic = document.getElementById('dynam')
let rand = document.getElementById('in')
let match = document.getElementById('game')
let form = document.getElementById('form')
let img = document.getElementById('dynamImg')
let a = '';  let b = '';  let c = '';    let d = ''
let random = []

// function test(id){
//     if(/(.jpg, .png, .gif, .jpeg)$/i.test(document.getElementById(id).innerHTML)){
//         console.log('ran')
//         let src = document.getElementById(id).innerHTML
//         dynamic.setAttribute('src', src)
//     }
// }

addEventListener(document.onload, red())
function red(){

    let randomMainIndex = Math.floor(Math.random() * pics.length )
    let randomIndex1 = Math.floor(Math.random() * quotes.length )
    console.log(randomMainIndex)
    rand.style.backgroundImage = `url(${pics[randomMainIndex]})`
    rand.innerHTML = quotes[randomIndex1]

}

function move(id){
    match.style.bottom = '100%'
    form.style.top = '5%'
    if(id == 'back'){
    match.style.bottom = '5%'
    form.style.top = '100%'
    }
}

function preview(id){
    let cont = document.getElementById(id).value
    img.innerHTML = cont
}

function test(id){
    let url = document.getElementById(id).value
    if(/(.url|.jpg|.jpeg)$/.test(url)){
        img.style.backgroundImage = `url(${url})`
    }
}

function upload(){
    let url = document.getElementById('x').value
    let quote = document.getElementById('quotePrev').value
    pics.push(url)
    quotes.push(quote)
}
function save(){
    localStorage.setItem('pics', pics)
    localStorage.setItem('quotes', quotes)
}
