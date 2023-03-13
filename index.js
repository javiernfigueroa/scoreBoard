let marcadorHome = document.getElementById("homeScore")
let marcadorGuest = document.getElementById("guestScore")
let homeCounter = 0;
let guestCounter = 0;

function masUno () {
    homeCounter+=1
    marcadorHome.innerText = homeCounter
}
function masDos () {
    homeCounter+=2
    marcadorHome.innerText = homeCounter
}
function masTres () {
    homeCounter+=3
    marcadorHome.innerText = homeCounter
}

function masUnoG () {
    guestCounter+=1
    marcadorGuest.innerText = guestCounter
}
function masDosG () {
    guestCounter+=2
    marcadorGuest.innerText = guestCounter
}
function masTresG () {
    guestCounter+=3
    marcadorGuest.innerText = guestCounter
}