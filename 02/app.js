document.addEventListener(
    'DOMContentLoaded',
    function () {

        const div = document.querySelector('div')

        div.addEventListener(
            'mousemove',
            function() {
            console.log('Mouse is over object')
            }
        )

        div.addEventListener(
            'mouseleave',
            function() {
            console.log("Mouse isn't over object!")
            }
        )
    }
)