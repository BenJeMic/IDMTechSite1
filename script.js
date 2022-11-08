const swup = new Swup()
window.addEventListener('load', loadTransition())

function loadTransition() {
    document.querySelector('body').style.opacity = '1'
}

function clickFunction(select) {
    var sel830 = document.getElementById('F830')
    var sel730 = document.getElementById('F730')
    var sel630 = document.getElementById('F630')

    document.getElementById('b830').className = 'button'
    document.getElementById('b730').className = 'button'
    document.getElementById('b630').className = 'button'

    if (select === 'F830') {
        sel830.style.opacity = '1'
        sel730.style.opacity = '0'
        sel630.style.opacity = '0'
        document.getElementById('b830').className = 'button active'
    } else if (select === 'F730') {
        sel830.style.opacity = '0'
        sel730.style.opacity = '1'
        sel630.style.opacity = '0'
        document.getElementById('b730').className = 'button active'
    } else {
        sel830.style.opacity = '0'
        sel730.style.opacity = '0'
        sel630.style.opacity = '1'
        document.getElementById('b630').className = 'button active'
    }
}