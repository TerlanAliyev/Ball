
let merkez = document.querySelector('.merkez')
let ball = document.querySelector('.ball')
let main = document.querySelector('.main')
var x = 0
var y = 0
document.querySelector('.sag').addEventListener('click', function () {
    sag()
})
function sag() {
    main.style.borderLeftColor = 'black'
    if (x == 930) {
        main.style.borderRightColor = 'red'
    }
    else {
        x += 5
        ball.style.marginLeft = x + "px"
    }
}


document.querySelector('.sol').addEventListener('click', function () {
    sol()
})
function sol() {
    main.style.borderRightColor = 'black'

    if (x == -930) {
        main.style.borderLeftColor = 'red'
    }
    else {
        x -= 5
        ball.style.marginLeft = x + "px"
    }
}

document.querySelector('.yuxari').addEventListener('click', function () {
    yuxari()
})

function yuxari() {
    main.style.borderBottomColor = 'black'

    if (y == -355) {
        main.style.borderTopColor = 'red'
    }
    else {
        y -= 5
        ball.style.marginTop = y + "px"
    }
}

document.querySelector('.asagi').addEventListener('click', function () {
    asagi()
})
function asagi() {
    main.style.borderTopColor = 'black'

    if (y ==355) {
        main.style.borderBottomColor = 'red'
    }
    else {
        y -= -5
        ball.style.marginTop = y + "px"
    }
}


document.querySelector('.sagyuxari').addEventListener('click', function () {
    sag()
    yuxari()

})

document.querySelector('.sagasagi').addEventListener('click', function () {
    sag()
    asagi()
})



document.querySelector('.solasagi').addEventListener('click', function () {
    sol()
    asagi()



})


document.querySelector('.solyuxari').addEventListener('click', function () {
    sol()
    yuxari()
})


merkez.addEventListener('click', function () {
    x = 0
    y = 0
    main.style.borderColor = 'black'
    ball.style.marginTop = y + "px"
    ball.style.marginLeft = x + "px"
})
