let dragBox = document.querySelector('.drag-box');
let btn = document.getElementById('btn');
let dropBox = document.querySelector('.drop-box');
let shapes = document.querySelectorAll('.shape');

btn.addEventListener('click', () => {
    dragBox.style.width = "100px";
    dropBox.style.margin = '0 0 0 75px'
    btn.style.display = 'none';
    setTimeout(() => {
        dragBox.style.position = 'unset';
    }, 45);
})

for(let i = 0; i < shapes.length; i++) {

    function onDrag({movementX, movementY}) {
        let getStyle = window.getComputedStyle(shapes[i]);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);
        
        shapes[i].style.left = `${left + movementX}px`;
        shapes[i].style.top = `${top + movementY}px`;
        shapes[i].style.background = 'blue';
        console.log(left, top)
    }

    shapes[i].addEventListener('mousedown', () => {
        shapes[i].classList.add("active");
        shapes[i].addEventListener('mousemove', onDrag);
    })

    document.addEventListener('mouseup', () => {
        shapes[i].classList.remove("active");
        shapes[i].removeEventListener('mousemove', onDrag);
    })
}