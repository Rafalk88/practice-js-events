document.addEventListener('DOMContentLoaded', init)

function init () {
    
    console.log('DOM')

    divList = document.querySelectorAll('div')
    divList.forEach(function (div) {

        if (div) {
            div.addEventListener('click', addClassToElement)
        }

    })

}

function addClassToElement (e) {

    e.currentTarget.classList.add('clicked')
    e.stopPropagation()

}