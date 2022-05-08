document.addEventListener('DOMContentLoaded', init)

function init () {

    console.log('DOM')

    divList = document.querySelectorAll('div')
    body = document.querySelector('body')

    divList.forEach(function (el) {

        if (el) {
            el.addEventListener('click', addClassToElement)
        }

    })

    body.addEventListener('click', deleteClassFromElement)

}

function addClassToElement (e) {

    const element = e.currentTarget
    const time = element.dataset.time

    setTimeout(function () {

        element.classList.add('clicked')

    }, time)
    
}

function deleteClassFromElement (e) {

    if (e.target === e.currentTarget) {

        divList.forEach(function (el) {

            el.classList.remove('clicked')

        })

    }

}