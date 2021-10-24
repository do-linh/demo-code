// Xử lý trên màn hình mobile
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight; // lấy giá trị từ header đặt vào headerHeight 
// console.log(mobileMenu);

// onclick kiểm tra chiều cao của thẻ header
//đóng mở menu 
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null; //trả về height mặc định ở header css
    }
}

//Đóng menu tự động
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav'); //nếu có anh chị em liền kề và anh chị em liền kề đó chứa class: subnav thì biết đc đáy là menu cha
        if (isParentMenu) {
            event.preventDefault(); //nếu là parentMenu thì bỏ hành vi ẩn
        } else {
            header.style.height = null; //không phải parentMenu thì menu sẽ tự ẩn đi
        }
    }
}


// Xử lý btn Buy Tickets

const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTicket() {
    modal.classList.add('open')
}

function hideBuyTicket() {
    modal.classList.remove('open')
}


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

modalClose.addEventListener('click', hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function(even) {
    even.stopPropagation()
})