let dragBox = document.querySelector('.drag-box');
let btn = document.getElementById('btn');
let dropBox = document.querySelector('.drop-box');
let editor = document.querySelector('.editor');
let shapes = document.querySelectorAll('.shape');
let range = document.getElementById('rng');
let label = document.getElementById('label');

let selectedShape = null;
let shapeStyle = null;

btn.addEventListener('click', () => {
    dragBox.style.width = "100px";
    dropBox.style.margin = '0 0 0 75px'
    editor.style.display = 'flex';
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
    }

    function changeSize(shape) {
        label.innerText = `Size: ${range.value}`
        shape.style.width = `${range.value}px`
        shape.style.height = `${range.value}px`
        shape.style.background = 'red';
    }

    function activeShape(shape) {
        if (shape.classList.contains("active") == true) {
            selectedShape = shape;
        } else {
            return;
        }
    }

    function shapeInDrop(shape) {
        shape.style.background = 'green'
    }
    let dropboxStyle = window.getComputedStyle(dropBox);
    console.log(dropboxStyle)
    
    
    shapes[i].addEventListener('mousedown', () => {
        shapes[i].classList.add("active");
        shapeStyle = window.getComputedStyle(shapes[i])
        shapes[i].style.background = 'rgba(165, 42, 42, 0.806)'
        range.value = parseInt(shapeStyle.width);
        activeShape(shapes[i])
        label.innerText = `Size: ${range.value}`
        shapes[i].addEventListener('mousemove', onDrag);
    })

    document.addEventListener('mouseup', () => {
        shapes[i].classList.remove("active");
        shapes[i].style.background = 'brown'
        shapes[i].removeEventListener('mousemove', onDrag);
    })
}

range.addEventListener('mouseenter', () => {
    
    range.addEventListener('mousemove', () => {
        changeSize(selectedShape);
    }) 
})