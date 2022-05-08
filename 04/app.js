document.addEventListener('DOMContentLoaded', init)

function init () {

    console.log('DOM')

    divList = document.querySelectorAll('div')
    body = document.querySelector('body')

    divList.forEach(function (div) {

        if (div) {
            div.addEventListener('click', addClassToElement)
        }

    })

    body.addEventListener('click', deleteClassFromElement)

}

function addClassToElement (e) {

    e.currentTarget.classList.add('clicked')
    e.stopPropagation()

}

function deleteClassFromElement () {

    divList.forEach(function (e) {

        e.classList.remove('clicked')

    })
    
}