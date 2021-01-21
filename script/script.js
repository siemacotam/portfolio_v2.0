// menu burger

document.querySelector('.burger').addEventListener('click', function(){
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
        if(indexTxt === txt.length) return
        // indexTxt = 0 

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