/* Desenvolva sua lógica aqui ... */
const darkButton = document.querySelector('.header__button')
const html = document.querySelector('html')
const img = document.querySelector('.button__img')

const modePreference = JSON.parse(localStorage.getItem("dark__mode"))

if(modePreference){
    // img.src = buttonImg.sunImg
    darkButton.innerHTML = 'Light Mode'
    html.classList.add('dark-mode')    
} else{
    // img.src = buttonImg.moonImg
    darkButton.innerHTML = 'Dark Mode'
    html.classList.remove('dark-mode')    
}

darkButton.addEventListener('click', () => {
    // Altering the colors
    html.classList.toggle('dark-mode')

    // Altering the text of the button
    if(html.classList.contains('dark-mode')){
        // img.src = buttonImg.sunImg
        darkButton.innerHTML = 'Light Mode'
        localStorage.setItem("dark__mode", true) // Saving the user preference in the localStorage
    } else{
        // img.src = buttonImg.moonImg
        darkButton.innerHTML = 'Dark Mode'
        localStorage.setItem("dark__mode", false) // Saving the user preference in the localStorage
    }
})