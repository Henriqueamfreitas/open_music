const filterButtonsSpace = document.querySelector('.mainGender__buttons')
const ulAlbuns = document.querySelector('.main__albuns')

// Renderizing the filter buttons 
const createButtons = (array) => {
    let count = 0
    array.forEach((element) => {
        count+=1
        // Creating HTML element
        const  button = document.createElement('button')
        
        // Assigning values to the elements
        button.innerHTML = element
        
        // Assigning classes to the elements
        button.classList = 'gender__button'
        
        // Assigning IDs to the elements
        button.id = count
        
        // Establishing the hierarchy between the elements
        filterButtonsSpace.append(button)
    })
}
createButtons(categories)


// Creating the album card
const createCard = (array) => {
    // Creating HTML elements
    const li = document.createElement('li')
    const img = document.createElement('img')
    const albumDetails = document.createElement('div')
    const artist = document.createElement('p')
    const year = document.createElement('p')
    const h3 = document.createElement('h3')
    const albumPriceBuy = document.createElement('div')
    const price = document.createElement('p')
    const button = document.createElement('button')

    // Assigning values to the elements
    img.src = array.img
    artist.innerHTML = array.band
    year.innerHTML = array.year
    h3.innerHTML = array.title
    price.innerHTML = array.price
    button.innerHTML = 'Comprar'

    // Assigning classes to the elements
    li.classList = 'mainAlbuns__card'
    img.classList = 'card__img'
    albumDetails.classList = 'card__albumDetails'
    artist.classList = 'albumDetails__artist'
    year.classList = 'albumDetails__year'
    h3.classList = 'card__h3'
    albumPriceBuy.classList = 'card__albumPriceBuy'
    price.classList = 'albumPriceBuy__price'
    button.classList = 'albumPriceBuy__button'

    // Establishing the hierarchy between the elements
    li.append(img, albumDetails, h3, albumPriceBuy)
    albumDetails.append(artist, year)
    albumPriceBuy.append(price, button)

    return li
}


// Renderizing the albuns
const renderCard = (array) => {
    ulAlbuns.innerHTML = ''
    array.forEach((element) => {
        const card = createCard(element)
        ulAlbuns.append(card)
    })
    genderFilter(products)
    filterByRange(products)
}


// Adding event to buttons
const filterButtons = document.querySelectorAll('.gender__button')
const genderFilter = (array) =>{ 
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // We are creating a new array without the category 'all'
        const categoriesWithoutAll = [... categories]
        categoriesWithoutAll.shift()
        categoriesWithoutAll.forEach((category) => {
            if(button.innerHTML === category){
                const categoryIndex = categories.indexOf(category)
                const filteredProducts = array.filter(product => product.category === categoryIndex)
                renderCard((filteredProducts))
            }
        })
        // We are creating the logic for the button 'todos'
        if(button.innerHTML === categories[0]){
            renderCard((array))
        }
    })
})}


// Range Input
const filterByRange = (array) => {
    const inputRange = document.querySelector('#mainPrice__inputRange')

    inputRange.addEventListener('input', () => {
        const p = document.querySelector('#price')

        p.innerHTML = inputRange.value
        
        const productFilter = array.filter(product => product.price <= Number(inputRange.value))
        console.log(productFilter)
        renderCard(productFilter)
    })
}


// genderFilter(products)
// filterByRange(products)
renderCard(products)
// li
// img
// albumDetails
// artist
// year
// h3
// albumPriceBuy
// price
// button