
let text = getElementById('wrapper-text');
window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    text.style.left = value *2 + 'px';

})

