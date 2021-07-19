/*let menu = document.querySelector('#menu')
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
    
})*/
let homebtn = document.querySelector('#home')
let chatbtn = document.querySelector('#chat')
let chatui = document.querySelector('.chat').classList

let bubble1 = document.querySelector('#bubble1').classList
let bubble2 = document.querySelector('#bubble2').classList

let eventCal = document.querySelector('#eventCal').classList
let eventCheck = document.querySelector('#eventCheck').classList

let chatConv = document.querySelectorAll('.chatConv')
let users = document.querySelectorAll('.conv')
let chatHome = document.querySelectorAll('.chatHome')


chatbtn.addEventListener('click', function(){

    document.querySelector('body').classList.add('overflow-hidden')

    chatui.remove('invisible', 'h-0', 'scale-90', 'rounded-2xl')
    chatui.add('h-screen', 'scale-100')

    chatbtn.classList.replace('text-gray-500', 'text-green-500')
    bubble1.replace('stroke-current', 'fill-current')
    bubble1.replace('text-gray-500', 'text-green-500')
    bubble2.replace('text-gray-300', 'text-green-300')

    eventCal.replace('text-green-300', 'text-gray-500')
    eventCheck.replace('text-green-500', 'text-gray-300')
    homebtn.classList.replace('text-green-500', 'text-gray-500')
})

homebtn.addEventListener('click', function(){
    document.querySelector('body').classList.remove('overflow-hidden')
    chatui.add('invisible', 'h-0', 'scale-90', 'rounded-2xl')
    chatui.remove('h-screen', 'scale-100')

    chatbtn.classList.replace('text-green-500', 'text-gray-500')
    bubble1.replace('fill-current', 'stroke-current')
    bubble1.replace('text-green-500','text-gray-500')
    bubble2.replace('text-green-300', 'text-gray-300')

    eventCal.replace('text-gray-500', 'text-green-300')
    eventCheck.replace('text-gray-300', 'text-green-500')
    homebtn.classList.replace('text-gray-500', 'text-green-500')
})

users.forEach(user => {
    user.addEventListener('click', function(){
        chatConv.forEach(convEl => {
            convEl.classList.remove('hidden')

            setTimeout(function (){
                convEl.classList.remove('invisible')
                convEl.classList.add('space-y-4')
            }.bind(this), 200)
        });

        chatHome.forEach(homeEl => {
            homeEl.classList.add('hidden')
        })
    })
})

document.querySelector('#backHome').addEventListener('click', function(){
    chatConv.forEach(convEl => {
        convEl.classList.add('hidden')
    });

    chatHome.forEach(homeEl => {
        homeEl.classList.remove('hidden')
    })
})