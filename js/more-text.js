const down=document.querySelector('.down')
const up=document.querySelector('.up')
const text=document.querySelector('#more-text')

down.addEventListener('click',()=>{
    text.classList.toggle('more-text')
    down.classList.toggle('more-text')
    up.classList.toggle('more-text')
})

up.addEventListener('click',()=>{
    text.classList.toggle('more-text')
    down.classList.toggle('more-text')
    up.classList.toggle('more-text')
})