const buyBtns = document.querySelectorAll('.js-buy-tickets')
const closeBtn = document.querySelector('.js-modal-close')
const buyTicketsModal = document.querySelector('.js-buy-tickets-modal')
const modal = document.querySelector('.modal')

function showBuyTickets(){
    modal.classList.add('open')
}

function closeBuyTickets(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}

closeBtn.addEventListener('click', closeBuyTickets)
modal.addEventListener('click', closeBuyTickets)
buyTicketsModal.addEventListener('click', function(event){
    event.stopPropagation()
})

// Đóng mở menu-mobile
var header = document.getElementById('header')
var menuMobile = document.getElementById('menu-mobile')
var headerHeight = header.clientHeight

menuMobile.onclick = function(){
    var isClose = header.clientHeight === headerHeight
    if (isClose){
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

// Tự dộng đóng menu-mobile
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0; i < menuItems.length; i++ ){
    var menuIteam = menuItems[i];

    menuIteam.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu){
            event.preventDefaulf()    
        } else {
            header.style.height = null
        }
    }
}

