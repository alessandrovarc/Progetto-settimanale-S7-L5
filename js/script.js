const getGames = function () {
    const URL = 'https://striveschool-api.herokuapp.com/api/product/'

    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjNmOWYyNjBjYzAwMTVjYzBkZjciLCJpYXQiOjE3MjE5ODM5OTMsImV4cCI6MTcyMzE5MzU5M30.zFxo2prDZASMfw5ijyYy81vWb2t20SP6oqOYLPMUwHY"
        }
        })

        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('errore nella chiamata')
            }

        })
        .then ((arrayOfGames) => {
            console.log('array dei giochi', arrayOfGames)
            arrayOfGames.forEach(games => {
                const newGamesCol = `
                <div class="col d-flex">

                    <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="card">
                        <img src=${games.imageUrl}
                        class="card-img-top costum-image" alt="img">

                        <div class="card-body text-center d-flex flex-column justify-content-between">
                            <h5 class="card-title">${games.name}</h5>
                            <p class="card-text">${games.description}</p>
                            <p class="card-text">${games.brand}</p>
                            <p class="card-text">${games.price}</p>
                            <button onclick="buy(event)" class="btn btn-primary w-100">Acquista</button>
                            <a onclick="edit(${games._id})" href="edit.html" class="btn btn-success btn-round btn-edit" id="edit-btn">
                            <span class="material-symbols-outlined">
                            edit</span>
                            </a>
                        </div>
                      </div>
                </div>
                `
                
                
                    
                const gamesRow = document.getElementById('game-row')
                gamesRow.innerHTML = gamesRow.innerHTML + newGamesCol
            })



            

        })
        .catch((error) => {
            console.log('ERRORE', error)

        })

        const buy = function (event) {
            event.target
        }


}


getGames()