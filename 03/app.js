const buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
    
    const button = buttons[i]
    
    function buttonHandler() {
        button.innerText = 'clicked'
        console.log('clicked')
        button.removeEventListener('click', buttonHandler)
    }
    
    button.addEventListener('click', buttonHandler)
}