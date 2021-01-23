// menu burger

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector(".menu").classList.toggle('active')
})

document.querySelector('.menu ul li a').addEventListener('click', function(){
    document.querySelector(".menu").classList.toggle('active')
})

// typing slogan

const motto = document.querySelector('.motto')
const cursor = document.querySelector('.cursor')
const txt = ['... moje życie','... moja pasja','... styl życia','... moje hobby','moja praca','... życie !!']
let indexTxt = 0
let indexLetter = -10

const typing = () => {
    if (indexLetter>=0){
    motto.textContent += txt[indexTxt][indexLetter]}
    indexLetter++
    if(indexLetter === txt[indexTxt].length){
        indexTxt++
        if(indexTxt === txt.length) indexTxt = 0

        return setTimeout(() => {
            indexLetter = -10
            motto.textContent = ''
            typing()
        }, 2000)
    }

setTimeout(typing, 100)
}
typing()

const cursorAnimation = () => {
    cursor.classList.toggle('active')
}
setInterval(cursorAnimation,400)

// scroll animations

$('.menu ul li a').on('click',function(){
const goToSection = "[data-section=" + $(this).attr('class') + "]";
$('body, html').animate({
scrollTop: $(goToSection).offset().top
})
})

// change photos in animations

const photo1 = document.querySelector('.foto img')
const photo2 = document.querySelector('.foto2 img')
const photo1Options = ['./img/me1.jpg','./img/me2.jpg','./img/me3.jpg','./img/grzesiek_2.jpg','./img/we1.jpg']
const photo2Options = ['./img/reczna1.jpg','./img/reczna2.png','./img/reczna3.jpg','./img/kids2.jpg','./img/kids3.jpg']
let activeElement1 = 0
let activeElement2 = 0

const photoChange = () => {
    photo1.src =photo1Options[activeElement1]
    activeElement1++
    if(activeElement1 === photo1Options.length){
        activeElement1 = 0
    }
}
setInterval(photoChange, 10000)

const photoChange2 = () => {
    photo2.src = photo2Options[activeElement2]
    activeElement2++
    if(activeElement2 == photo2Options.length){
        activeElement2 = 0
    }
    setInterval(photoChange2, 10000)
}
setTimeout(photoChange2, 6600)