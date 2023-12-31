let dragBox = document.querySelector('.drag-box');
let btn = document.getElementById('btn');
let dropBox = document.querySelector('.drop-box');
let shape = document.querySelector('.shape');

btn.addEventListener('click', () => {
    dragBox.style.width = "200px";
    dropBox.style.margin = '0 0 0 75px'
    btn.style.display = 'none';
})

shape.addEventListener('click', () => {
    shape.style.background = 'green';
})