const bgr = document.querySelector('.bgr')
const rNav = document.querySelector('.rightNav')

bgr.addEventListener('click', () => {
    if(rNav.style.left === '0%'){
        rNav.style.left = '-100%'
    } else{
        rNav.style.left = '0%'
    }
})