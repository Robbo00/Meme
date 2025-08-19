
let pics = [
    'https://tinyurl.com/2js43e3e', 
    'https://en.meming.world/images/en/thumb/6/6e/Surprised_Pikachu.jpg/300px-Surprised_Pikachu.jpg',
    'https://cdn-useast1.kapwing.com/static/templates/peter-griffin-running-away-meme-template-full-b8f8f210.webp',
    'https://i.imgflip.com/4/30r1af.jpg',
    'https://i.imgflip.com/374e4i.png'
    ]
let quotes = [
'I dont even say bless you when people sneeze anymore I just stare at em like this', 
'Waiter: Here is your check',
'Me running away from my Homework',
'When I hear someone sneeze in public now',
'Me smiling because I didnt hear anything you said'
]


// if(localStorage.getItem('pics')){
//     pics = localStorage.getItem('pics').split(',')
//     quotes = localStorage.getItem('quotes').split(',')
// }

let dynamic = document.getElementById('dynam')
let rand = document.getElementById('in')
let match = document.getElementById('game')
let form = document.getElementById('form')
let img = document.getElementById('dynamImg')
let sear = document.getElementById('sear')
let a = '';  let b = '';  let c = '';    let d = ''
let direction = 'up'
let box = document.getElementById('res')


addEventListener(document.onload, red())
function red(){

    let randomMainIndex = Math.floor(Math.random() * pics.length )
    console.log(randomMainIndex)
    rand.style.backgroundImage = `url(${pics[randomMainIndex]})`
    rand.innerHTML = quotes[randomMainIndex]
}
function random(){

    let randomMainIndex = Math.floor(Math.random() * pics.length )
    let randomIndex1 = Math.floor(Math.random() * quotes.length )
    console.log(randomMainIndex)
    rand.style.backgroundImage = `url(${pics[randomMainIndex]})`
    rand.innerHTML = quotes[randomIndex1]
}

function move(id){
    
    if(direction = 'up'){
    match.style.bottom = '100%'
    }
    
    if(direction = 'down'){
    form.style.top = '100%'
    }
    if(direction = 'left'){
        sear.style.left = '-100%'
    }
    if(id == 'down'){
    match.style.bottom = '5%'
    direction = 'up'
    }
    if(id == 'up'){
    form.style.top = '5%'
    direction = 'down'
    }
    if(id == 'right'){
    sear.style.left = '5%'
    direction = 'left'
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
    save()
}
function save(){
    localStorage.setItem('pics', pics)
    localStorage.setItem('quotes', quotes)
}

function remove(type){
    if(type == 'meme'){
        let fish = window.getComputedStyle(rand)
        let search = fish.backgroundImage
        console.log(search)
        for (let i = 0; i < pics.length; i++) {
            if(pics[i] == search){
                pics = pics.splice(i, 1)
            }            
        }
        rand.style.backgroundImage = `url(${pics[Math.floor(Math.random() * pics.length)]})`
        save()
    }
}

function search(id){
    box.innerHTML = ''
    let yurr = document.getElementById(id).value
    let regg =  new RegExp(yurr, 'g')
    let results = []
    let temp = document.createElement('p')
    for (let i = 0; i < quotes.length; i++) {
        if(regg.test(quotes[i])){
            results.push(quotes[i])
        }
        if(results.length == 5 || i == quotes.length - 1){
            console.log(results)
            for (let z = 0; z < results.length; z++) {
                let temp = document.createElement('p')
                temp.innerHTML = results[z]
                box.appendChild(temp)
            }
            return
        }
    }
}

function plaque(){
    console.log('red')
    box.innerHTML = ''
}