const listToggle = document.querySelector('.list-toggle input');
const nav = document.querySelector('nav ul');

listToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});