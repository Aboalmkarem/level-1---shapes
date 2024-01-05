let dragBox = document.querySelector('.drag-box');
let btn = document.getElementById('btn');
let dropBox = document.querySelector('.drop-box');
let shapes = document.querySelectorAll('.shape');
let range = document.getElementById('rng');
let label = document.getElementById('label');
// range.value = 5;
let changeShape = null;
let shapeStyle = null;

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
        // shapes[i].style.background = 'blue';
        
        // shapes[i].style.width, shapes[i].style.height = range.value;
        // label.innerText = `Size: ${range.value}`;
    }

    
    // range.onchange = changeSize;

    function changeSize(shape) {
        label.innerText = `Size: ${range.value}`
        shape.style.width = `${range.value}px`
        shape.style.height = `${range.value}px`
        shape.style.background = 'red';
    }

    function activeShape(shape) {
        if (shape.classList.contains("active") == true) {
            // console.log(true)
            changeShape = shape;
            // changeSize(changeShape)
        } else {
            return;
        }
    }
    
    
    shapes[i].addEventListener('mousedown', () => {
        shapes[i].classList.add("active");
        shapeStyle = window.getComputedStyle(shapes[i])
        shapes[i].style.background = '#fff'
        range.value = parseInt(shapeStyle.width);
        activeShape(shapes[i])
        label.innerText = `Size: ${range.value}`
        shapes[i].addEventListener('mousemove', onDrag);
    })

    document.addEventListener('mouseup', () => {
        shapes[i].classList.remove("active");
        shapes[i].removeEventListener('mousemove', onDrag);
    })
}

range.addEventListener('mouseenter', () => {
    
    console.log()
    range.addEventListener('mousemove', () => {
        changeSize(changeShape);
    }) 
})

// console.log(shapes.classList. ("active"))
// if (shapes[i].classList.contains("active") == true) {
//     changeSize();
// } else {
//     return;
// }


// sitInterval(() => {
//     range.value++;
//     label.innerText = `Size: ${range.value}`
// }, 100)