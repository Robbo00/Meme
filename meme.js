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
let dynamic = document.getElementById('dynam')
let rand = document.getElementById('in')
let match = document.getElementById('game')
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

