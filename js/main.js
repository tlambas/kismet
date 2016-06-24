// -------------------
// Display Utils
// -------------------

//prints text to the display
function print(text) {
    var gameText = document.querySelector('.game-text')
    text = typeof text === undefined ? '' : text
    gameText.innerText = gameText.innertext + text + '\n'
}

// clears the display
function clear() {
    var gameText = document.querySelector('.game-text')
    gameText.innerText = ''
}



var currentStep = null

var gameEnd = {
    text: 'Game Over.'
}

var welcome = {
    text: 'Welcome to Kismet'
}

var gameStart = {
    text: 'Do you want to play?',
    options: [
        {
            text:'Yes I want to play',
            command: 'yes',
            nextStep: welcome,
        },
        {
            text: 'No thanks.',
            command: 'no',
            nextStep: gameEnd
        }
    ],
}

var userInput = document.querySelector('.user-input .input')

userInput.addEventListener('keydown', function(e) {
    // enter key
    if (e.keyCode === 13) {
        // find the current step option whose command == the textarea value
        if (currentStep && Array.isArray(currentStep.options)) {
             var selectedOption = currentStep.options.find(function (option) {
                return option.command === e.target.value
            })

            if (selectedOption) {
                displayStep(selectedOption.nextStep)
                e.target.value = ''
            }
            else {
                print('command not recognized')
            }
        }
    }
})

function displayStep(step) {
    currentStep = step
    clear()

    print(step.text)

    if(Array.isArray(step.options)) {
        step.options.forEach(function(option) {
            print('[' + option.command + ']  ' + option.text)
        })
    }
}

displayStep(gameStart)