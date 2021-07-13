let menu = document.querySelector('#menu')
let nav = document.querySelector('#navlinks').classList
let filterBtn = document.querySelector('#fBtn')
let filterD = document.querySelector('#fDismiss')
let filters = document.querySelector('#filters').classList

menu.addEventListener('click', function(){
    if (nav.contains('hidden')){
        nav.remove('hidden')
        setTimeout(function(){
            nav.replace('h-0', 'h-64')
        }.bind(this), 1)
    } 
    
    else {
        nav.replace('h-64', 'h-0')
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