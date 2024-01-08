let dragBox = document.querySelector('.drag-box');
let btn = document.getElementById('btn');
let dropBox = document.querySelector('.drop-box');
let editor = document.querySelector('.editor');
let shapes = document.querySelectorAll('.shape');
let range = document.getElementById('rng');
let label = document.getElementById('label');
let Dtext = document.getElementById('Dtext');

let selectedShape = null;
let shapeStyle = null;
let getStyle = null;
let isInDrop = false;

btn.addEventListener('click', () => {
    dragBox.style.width = "100px";
    dropBox.style.left = '55%'
    editor.style.display = 'flex';
    btn.style.display = 'none';
    setTimeout(() => {
        dragBox.style.position = 'unset';
    }, 45);
})

for(let i = 0; i < shapes.length; i++) {

    

    function onDrag({movementX, movementY}) {

        getStyle = window.getComputedStyle(shapes[i]);
        let top = parseInt(getStyle.top);
        // let right = parseInt(getStyle.right);
        // let bottom = parseInt(getStyle.bottom);
        let left = parseInt(getStyle.left);
        shapeInDrop(shapes[i]);
        console.log(left, top);
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
        let dropboxStyle = window.getComputedStyle(dropBox);
        let top = parseInt(dropboxStyle.top)-395;
        let right = parseInt(dropboxStyle.right)+1400;
        let bottom = parseInt(dropboxStyle.bottom);
        let left = parseInt(dropboxStyle.left)-518; //197

        console.log(left)
        if (left < parseInt(getStyle.left) && parseInt(getStyle.left) < (left+860) && top < parseInt(getStyle.top) && parseInt(getStyle.top) < top+600) {
            shape.style.background = '#fff'
            isInDrop = true;
        } else {
            shape.style.background = 'rgba(165, 42, 42, 0.806)'
            isInDrop = false;
        }
    }

    function ifInDrop(shape) {
        if (isInDrop) {
            shape.style.background = '#fff'
        } else {
            shape.style.background = 'brown'
        }
    }
    
    
    shapes[i].addEventListener('mousedown', () => {
        shapes[i].classList.add("active");
        dropBox.style.background = 'rgba(240, 255, 255, 0.403)';
        Dtext.style.display = 'block'
        shapeStyle = window.getComputedStyle(shapes[i])
        if (!isInDrop) {
            shapes[i].style.background = 'rgba(165, 42, 42, 0.806)'
        }
        range.value = parseInt(shapeStyle.width);
        activeShape(shapes[i])
        label.innerText = `Size: ${range.value}`
        shapes[i].addEventListener('mousemove', onDrag);
    })

    document.addEventListener('mouseup', () => {
        shapes[i].classList.remove("active");
        dropBox.style.background = 'none'
        Dtext.style.display = 'none'
        if (!isInDrop) {
            shapes[i].style.background = 'brown'
        }
        shapes[i].removeEventListener('mousemove', onDrag);
    })
}

range.addEventListener('mouseenter', () => {
    
    range.addEventListener('mousemove', () => {
        changeSize(selectedShape);
    }) 
})