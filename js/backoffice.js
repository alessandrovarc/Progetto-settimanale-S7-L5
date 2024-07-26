//campi che ci servono image, name, description, price, brand

class Games {
    constructor(_name, _description, _price, _imageUrl, _brand) {
        this.name = _name
        this.description = _description
        this.price = _price
        this.imageUrl = _imageUrl
        this.brand = _brand
    }
}


const gameForm = document.getElementById('game-form')

gameForm.addEventListener('submit', function(e){
    e.preventDefault()
    const nameInput = document.getElementById('name')
    const descriptionInput = document.getElementById('description')
    const priceInput = document.getElementById('price')
    const imageInput = document.getElementById('image')
    const brandInput = document.getElementById('brand')
    

    const nameValue = nameInput.value
    const descriptionValue = descriptionInput.value
    const priceValue = priceInput.value
    const imageValue = imageInput.value
    const brandValue = brandInput.value

    const newGames = new Games(nameValue,descriptionValue,priceValue,imageValue,brandValue)

    const URL = 'https://striveschool-api.herokuapp.com/api/product/'

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newGames),
        headers: {
            'Content-Type' : 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjNmOWYyNjBjYzAwMTVjYzBkZjciLCJpYXQiOjE3MjE5ODM5OTMsImV4cCI6MTcyMzE5MzU5M30.zFxo2prDZASMfw5ijyYy81vWb2t20SP6oqOYLPMUwHY"
        }
        })
        .then(response => {
            if(response.ok) {

                alert('il gioco è stato salvato correttamente!')

            } else {
                throw new Error ('il salvataggio non è andato a buon fine')
            }
        })
        .catch(error => {
            console.log('errore nella request', error)
        })


})

