let menu = document.querySelector('#menu')
let nav = document.querySelector('#navlinks').classList

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