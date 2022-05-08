document.addEventListener('DOMContentLoaded', init)

function init () {
    const buttons = document.querySelectorAll('button')

    buttons.forEach(function (button) {
        
        function buttonHandler(e) {
            e.currentTarget.innerText = 'clicked'
            console.log('clicked', e.currentTarget)
            e.currentTarget.removeEventListener('click', buttonHandler)
        }
    
        button.addEventListener('click', buttonHandler)

    })
}