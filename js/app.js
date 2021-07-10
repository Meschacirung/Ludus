let menu = document.querySelector('#menu')
let nav = document.querySelector('#navlinks').classList
let filterBtn = document.querySelector('#fBtn')
let filterD = document.querySelector('#fDismiss')
let filters = document.querySelector('#filters').classList

console.log(filters)

menu.addEventListener('click', function(){
    if (nav.contains('hidden')){
        nav.remove('hidden')
        setTimeout(function(){
            nav.remove('h-0')
            nav.add('h-64')
        }.bind(this), 1)
    } 
    
    else {
        nav.add('h-0')
        nav.remove('h-64')
        setTimeout(function(){
            nav.add('hidden')
        }.bind(this), 300)
    }
})

filterBtn.addEventListener('click', function(){
    filters.remove('-mb-96')
})

filterD.addEventListener('click', function(){

    filters.add('-mb-96')
    
})