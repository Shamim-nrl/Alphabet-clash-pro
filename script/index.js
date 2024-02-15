
// function play (){
//     const homeScreen =document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')

//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }



function handelKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log(playerPressed)
    if(playerPressed==='Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabetKey = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabetKey.toLocaleLowerCase()
    // console.log((expectedAlphabet, playerPressed));

    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1

        setTextElementValueById('current-score', newScore)








        removeBackgroundColorById(expectedAlphabet)
        continueGame()




    } else {

        const currentLife = getTextElementValueById('current-life')
        const newLife = currentLife - 1
        setTextElementValueById('current-life', newLife);


        // const currentLifeElement =document.getElementById('current-life')
        // const currentLifeText =currentLifeElement.innerText
        // const currentLife =parseInt(currentLifeText)
        // const newLife =currentLife-1;
        // currentLifeElement.innerText=newLife;



        if (newLife === 0) {
            gameOver()
        }

    }

}

document.addEventListener('keyup', handelKeyboardButtonPress)


function continueGame() {
    const alphabet = getRandomAlphabet()

    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;


  
    setBackgroundColorById(alphabet)

}




function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame()

}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore)

    const currentAlphabet =getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)

}
