
let top = document.querySelector('.top')
let alternate = document.querySelector('.alternate')


function sendBack(e) {
    alternate.style.zindex = "10";
}

top.addEventListener('click', sendBack(e))