let botao = document.getElementById('botao')
let timer = document.getElementById('timer')
let clicks = document.getElementById('clicks')
let resultado = document.getElementById('resultado')
let clickAmount = 0
let timeLeft = 10
let timerFlag = false
let countdown
let categoria

botao.addEventListener('click', () => {
  if (!timerFlag) {
    timerFlag = true
    countdown = setInterval(() => {

      timeLeft--
      timer.textContent = timeLeft

      if (timeLeft <= 0) {
        clearInterval(countdown)
        botao.disabled = true



        let media = clickAmount / 10;
        if (media >= 20) {
          categoria = '<span style="color: red;"> 🔥 Muito rápido! </span>'
        } else if (media >= 15) {
          categoria = '<span style="color: orange;"> ⚡ Rápido! </span>'
        } else if (media >= 10) {
          categoria = '<span style="color: blue;"> 🚀 Rapidinho! </span>'
        } else if (media >= 5) {
          categoria = '<span style="color: green;"> 🐢 Devagar! </span>'
        } else {
          categoria = '<span style="color: gray;"> 🥶 Muito devagar! </span>'
        }

        resultado.innerHTML = `Você foi categorizado como ${categoria}, com uma média de ${media} clicks por segundo!`

      }
    }, 1000);
  }

  clickAmount++
  clicks.textContent = clickAmount
})

