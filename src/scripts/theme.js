const darkButton = document.querySelector('.header__button')
const html = document.querySelector('html')
const img = document.createElement('img')
darkButton.append(img)

const modePreference = JSON.parse(localStorage.getItem('dark__mode'))

if(modePreference){
    img.src = buttonImg.sunImg
    html.classList.add('dark-mode')    
} else{
    img.src = buttonImg.moonImg
    html.classList.remove('dark-mode')    
}

darkButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode')

    if(html.classList.contains('dark-mode')){
        img.src = buttonImg.sunImg
        localStorage.setItem('dark__mode', true) 
    } else{
        img.src = buttonImg.moonImg
        localStorage.setItem('dark__mode', false) 
    }
})