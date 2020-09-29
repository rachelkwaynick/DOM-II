// Your code goes here


//1. When a key is pressed, a modal appears. 
const modal = document.querySelector('.modal')

document.addEventListener('keydown', () => {
    modal.classList.remove('off')
})

//2. when the key is released, the modal disappears

document.addEventListener('keyup', () => {
    modal.classList.add('off')
})

//3. When a mouse is moved over the image, image hides

const imgContent = document.querySelector('.img-content');

imgContent.addEventListener('mouseenter', () => {
    imgContent.classList.add('off')
})


//4. When a mouse is moved away from the image, image returns

imgContent.addEventListener('mouseleave', () => {
    imgContent.classList.remove('off')
})

//5. Scale an image with mouse wheel
const imgContent2 = document.querySelector('.img-content:nth-of-type(1)');


function zoom(e) {
    e.preventDefault();

    scale += e.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    imgContent2.style.transform = `scale(${scale})`;
}
let scale = 1;
imgContent2.onwheel = zoom;

//6. When a header gets moused over, it disappears
const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
    header.classList.add('off');
})

//7. When a mouse leaves the header, it returns to normal
header.addEventListener('mouseout', () => {
    header.classList.remove('off');
})

//8. When the user resizes the window, a modal appears

document.addEventListener('scroll', () => {
    modal.classList.remove('off')
})

//9. When a user clicks on the document, the modal disappears
document.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.add('off')
})

//10. When a user clicks on the the image, it disappears
const contentDest = document.querySelector('.content-destination');

contentDest.addEventListener('mousedown', () => {
    contentDest.classList.add('off')
})

const link = document.querySelectorAll('a');

link.forEach(a => {
    a.addEventListener('click', e =>{
        e.preventDefault();
    })
})

