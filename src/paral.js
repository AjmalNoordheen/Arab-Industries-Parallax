let leaf = document.getElementsByClassName('mainLeaf')[0];
let text = document.getElementsByClassName('text1')[0];


window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    leaf.style.marginTop = value* -1.5 + 'px';
    text.style.marginTop = value*1 + 'px';
    text.style.opacity = value* 0 + 'px';
})