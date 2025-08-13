let pics = ['https://tinyurl.com/2js43e3e', 'https://shorturl.at/R38Ng']
let quotes = [
    'I dont even say bless you when people sneeze anymore I just stare at em like this', 
    'When somebody tells you a secret you already knew so you gotta act suprised',    
]
let dynamic = document.getElementById('dynam')


function test(id){
    if(/(.jpg, .png, .gif, .jpeg)$/i.test(document.getElementById(id).innerHTML)){
        console.log('ran')
        let src = document.getElementById(id).innerHTML
        dynamic.setAttribute('src', src)
    }
}