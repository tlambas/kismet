// ----------------------------------------
// Display Utils
// ----------------------------------------

// prints text to the display
function print(text) {
    text = typeof text === 'undefined' ? '' : text

    var gameText = document.querySelector('.game-text')
    gameText.innerText = gameText.innerText + text + '\n'
}

// clears the display
function clear() {
    var gameText = document.querySelector('.game-text')
    gameText.innerText = ''
}

// ----------------------------------------
// Game Steps
// ----------------------------------------

//  step
//  /  \
// A    B

var currentStep = null

var gameEnd = {
    text: 'Game Over.'
}

var welcome = {
    text: 'Welcome to Kismet.'
}

var gameStart = {
    text: 'Do you want to play?',
    options: [
        {
            text: 'Yes, I want to play!',
            command: 'yes',
            nextStep: welcome
        },
        {
            text: 'No thanks.',
            command: 'no',
            nextStep: gameEnd
        }
    ],
}

function displayStep(step) {
    currentStep = step
    clear()
    print(step.text)
    print()

    if (Array.isArray(step.options)) {
        step.options.forEach(function(option) {
            print('[' + option.command + ']  ' + option.text)
        })
    }
}

// ----------------------------------------
// User Input
// ----------------------------------------
var userInput = document.querySelector('.user-input .input')

userInput.addEventListener('keydown', function(e) {
    // enter key
    if (e.keyCode === 13) {
        // find the current step option whose command == the textarea value
        if (currentStep && Array.isArray(currentStep.options)) {
            var selectedOption = currentStep.options.find(function(option) {
                return option.command === e.target.value
            })

            if (selectedOption) {
                displayStep(selectedOption.nextStep)
                e.target.value = ''
            } else {
                print('Command not recognized.')
            }
        }
    }
})

// ----------------------------------------
// Init
// ----------------------------------------

displayStep(gameStart)