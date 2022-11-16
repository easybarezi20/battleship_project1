
const grid = document.querySelector('.grid')
let width = 10
let bombAmount = 20
let squares = []

    //function to create the baord 
    function createBoard() {
        //shuffle bombs on the grid
        //creates two arrays one with 20 bombs and one with 80 safe spaces
        const bombArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('safe')
        console.log(bombArray)
        console.log(emptyArray)
        //joining the two bomb and safe arrays into one
        const gameArray = emptyArray.concat(bombArray)
        console.log(gameArray)
        //creating gae board array with sorted value everytime 
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
        console.log(shuffledArray)

        //creates the grid baord while also storing each div into an array
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()

    
