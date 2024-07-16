// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    
    text.style.marginTop = value*2.5+'px';
    tree.style.marginTop = value*0.5+'px';
    // leaf.style.transform = `translate(${value}px)`;
    leaf.style.marginTop = -value*2.5+'px';
    leaf.style.marginLeft = value*2.5+'px';
    hill5.style.marginLeft = value*2.5+'px';
    hill4.style.marginLeft = -value*2.5+'px';
    hill1.style.marginTop = value*2+'px';
    
})

