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



const body = document.querySelector('#htmlhtm');
const h1a = document.querySelectorAll('.TH1')
const para = document.querySelectorAll('.TP1')
const anc = document.querySelectorAll('.TA1, .driverLists')

const tl = new TimelineMax();

tl.fromTo(body, 1.2, { transform: 'translateX(-100%)', opacity: '0' }, { transform: 'translateX(0%)', opacity: '1', ease: Power2.easeOut }, "+=1")
tl.fromTo(h1a, 1, { transform: 'translateX(20%)', opacity: '0%' }, { transform: 'translateX(0%)', opacity: '1', ease: Power2.easeOut } )
tl.fromTo(para, 1, { transform: 'translateX(-20%)', opacity: '0%' }, { transform: 'translateX(0%)', opacity: '1', ease: Power2.easeOut }, "-=1" )
tl.fromTo(anc, 0.5, { opacity: '0%' }, { opacity: '1', ease: Power2.easeOut }, "-=1" );

function clicFunction(selected, psel) {
    var selfx = document.getElementById(selected)
    var selpa = document.getElementById(psel)

    if (selfx.style.display === 'none') {
        selfx.style.display = 'block';
        selpa.style.setProperty('--plusminus-background', 'url(./MinusIcon.png)')
    } else {
        selfx.style.display = 'none'
        selpa.style.setProperty('--plusminus-background', 'url(./PlusIcon.png)')
    }
}