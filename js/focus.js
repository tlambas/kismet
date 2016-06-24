// always focus the user input

document.addEventListener('click', function(e) {
    var userInput = document.querySelector('.user-input .input')
    userInput.focus()
})