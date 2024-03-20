let tin1 = document.getElementById('tin1');
let tin2 = document.getElementById('tin2');
let tin3 = document.getElementById('tin3');
let tin4 = document.getElementById('tin4');
let tin5 = document.getElementById('tin5');
let tin6 = document.getElementById('tin6');
let leaf = document.getElementById('leaf');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill1 = document.getElementById('hill1');


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    tin1.style.marginTop=value * 1 + 'px';
    tin2.style.marginTop=value * 1 + 'px';
    tin3.style.marginTop=value * 1 + 'px';
    tin4.style.marginTop=value * 1 + 'px';
    tin5.style.marginTop=value * 1 + 'px';
    tin6.style.marginTop=value * 1+ 'px';
    leaf.style. top = value * -1.5 +'px';
    hill5.style.left = value * 1.5 +'px';
    hill4.style.left = value * -1.5 +'px';
    hill1.style.top = value * 0.5 +'px'
});