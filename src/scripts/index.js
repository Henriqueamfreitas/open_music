const filterButtonsSpace = document.querySelector('.mainGender__buttons')
const ulAlbuns = document.querySelector('.main__albuns')
const empty = document.querySelector('.empty')

const createButtons = (array) => {
    let count = 0
    array.forEach((element) => {
        count+=1
        const  button = document.createElement('button')
        
        button.innerHTML = element
        
        button.classList = 'gender__button text-3'
        
        button.id = count
        
        filterButtonsSpace.append(button)
    })
}
createButtons(categories)


const createCard = (array) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const albumDetails = document.createElement('div')
    const artist = document.createElement('p')
    const year = document.createElement('p')
    const h3 = document.createElement('h3')
    const albumPriceBuy = document.createElement('div')
    const price = document.createElement('p')
    const button = document.createElement('button')

    img.src = array.img
    artist.innerHTML = array.band
    year.innerHTML = array.year
    h3.innerHTML = array.title
    let albumPrice = Number(array.price)
    let formatedAlbumPrice = albumPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
    price.innerHTML = formatedAlbumPrice
    button.innerHTML = 'Comprar'

    li.classList = 'mainAlbuns__card'
    img.classList = 'card__img'
    albumDetails.classList = 'card__albumDetails'
    artist.classList = 'albumDetails__artist text-4'
    year.classList = 'albumDetails__year text-4'
    h3.classList = 'card__h3 title-2'
    albumPriceBuy.classList = 'card__albumPriceBuy'
    price.classList = 'albumPriceBuy__price text-2'
    button.classList = 'albumPriceBuy__button text-3'

    li.append(img, albumDetails, h3, albumPriceBuy)
    albumDetails.append(artist, year)
    albumPriceBuy.append(price, button)

    return li
}


const renderCard = (array) => {
    ulAlbuns.innerHTML = ''
    array.forEach((element) => {
        const card = createCard(element)
        ulAlbuns.append(card)
    })
}


const filterButtons = document.querySelectorAll('.gender__button')
const genderFilter = (array) =>{ 
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const categoriesWithoutAll = [... categories]
        categoriesWithoutAll.shift()
        categoriesWithoutAll.forEach((category) => {
            if(button.innerHTML === category){
                const categoryIndex = categories.indexOf(category)
                const filteredProducts = array.filter(product => product.category === categoryIndex)
                renderCard((filteredProducts))
                let classStyle = 'exclude'
                empty.classList.add(classStyle)
                if(filteredProducts.length === 0){
                        empty.classList.remove(classStyle)
                }
            }
        })
        if(button.innerHTML === categories[0]){
            let classStyle = 'exclude'
            renderCard((array))
            empty.classList.add(classStyle)
            if(array.length === 0){
                    empty.classList.remove(classStyle)
            }
        }
    })
})}


const filterByRange = (array) => {
    const inputRange = document.querySelector('#mainPrice__inputRange')

    inputRange.addEventListener('input', () => {
        const p = document.querySelector('#price')

        let value = Number(inputRange.value)
        let formatedValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        p.innerHTML = formatedValue
    
        
        const productFilter = array.filter(product => product.price <= Number(inputRange.value))
        renderCard(productFilter)
        let classStyle = 'exclude'
        empty.classList.add(classStyle)
        if(productFilter.length === 0){
                empty.classList.remove(classStyle)
        }
    })
}

genderFilter(products)
filterByRange(products)
renderCard(products)
