let gameSeq = []
let userSeq = []

let started = false;
let level = 0;
let btns = ['yellow', 'red', 'purple', 'green']
document.addEventListener('keypress', function () {
    if (!started) {
        started = true;
        level = 0;
        levelUp()

    }
})

function gameFlash(btn) {
    btn.classList.add('flash')
    setTimeout(() => { btn.classList.remove('flash') }, 250)

}

function userFlash(btn) {
    btn.classList.add('userFlash')
    setTimeout(() => { btn.classList.remove('userFlash') }, 250)

}



function levelUp() {
    userSeq = [];
    level++;
    let h2 = document.querySelector('h2');
    h2.innerText = `Level ${level}`

    let rand = Math.floor(Math.random() * 3)
    let randColor = btns[rand]
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    gameFlash(randBtn)
}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000)

        }

    } else {
        let h2 = document.querySelector('h2');
        document.querySelector('body').style.background = 'red'
        setTimeout(() => {
            document.querySelector('body').style.background = 'white'
        }, 1000)
        h2.innerHTML = `Game Over! Your Score: <b>${level}</b> <br> Press any key to start`
        started = false
        gameSeq = []
        userSeq = []
    }

}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1)

}

let allbtns = document.querySelectorAll('.btn')

for (btn of allbtns) {
    btn.addEventListener('click', btnPress)
}