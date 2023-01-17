const timerDisplayMinutes = document.getElementById('minutes')
const timerDisplaySeconds = document.getElementById('seconds')
const Buttons = {
  play: document.getElementById('button-play'),
  stop: document.getElementById('button-stop'),
  plus: document.getElementById('button-plus'),
  minus: document.getElementById('button-minus'),
}
const Cards = {
  first: {
    audio: new Audio('./assets/florest.wav'),
    card: document.getElementById('first-card'),
  },
  second: {
    audio: new Audio('./assets/rain.wav'),
    card: document.getElementById('second-card'),
  },
  third: {
    audio: new Audio('./assets/coffeeShop.wav'),
    card: document.getElementById('third-card'),
  },
  fourth: {
    audio: new Audio('./assets/firePlace.wav'),
    card: document.getElementById('fourth-card'),
  },
}

let timeout
let rootMinutes = timerDisplayMinutes.textContent
let minutes = rootMinutes
let seconds = timerDisplaySeconds.textContent

Buttons.play.addEventListener('click', countdown, true)
Buttons.stop.addEventListener('click', stop)
Buttons.plus.addEventListener('click', addFiveMinutes)
Buttons.minus.addEventListener('click', subtractFiveMinutes)
Cards.first.card.addEventListener('click', () => {control(Cards.first)})
Cards.second.card.addEventListener('click', () => {control(Cards.second)})
Cards.third.card.addEventListener('click', () => {control(Cards.third)})
Cards.fourth.card.addEventListener('click', () => {control(Cards.fourth)})

function countdown(){
  Buttons.play.removeEventListener('click', countdown, true)

  timeout = setInterval(() => {
    
    if(seconds == 0 && minutes == 0){
      stop()
      return
    }
    
    if(seconds == 0){
      adjustTimerDisplay(--minutes, seconds = 2)
    }
    
    adjustTimerDisplay(minutes, --seconds)
  },1000)
}

function stop(){
  Buttons.play.addEventListener('click', countdown, true)
  clearInterval(timeout)
  minutes = rootMinutes
  seconds = 0
  adjustTimerDisplay(rootMinutes, seconds)
}

function addFiveMinutes(){
  if(minutes >= 95){
    return
  }
  minutes = Number(minutes) + 5
  adjustTimerDisplay(minutes, seconds)

  if(rootMinutes >= 95){
    return
  }
  rootMinutes = Number(rootMinutes) + 5
}

function subtractFiveMinutes(){
  if(rootMinutes == 5){
return
  }
  rootMinutes = Number(rootMinutes) - 5
  minutes = Number(minutes) - 5
  adjustTimerDisplay(minutes, seconds)
}

function adjustTimerDisplay(minutes, seconds){
  timerDisplayMinutes.textContent = String(minutes).padStart(2, '0')
  timerDisplaySeconds.textContent = String(seconds).padStart(2, '0')
}

function control (selectedCard){
  function controlCardColor(){
    if(selectedCard.card.classList.contains('selected-card')){
      selectedCard.card.classList.remove('selected-card')  
      return
    }

    for (let i in Cards){
      Cards[i].card.classList.remove('selected-card')
    }
  
    selectedCard.card.classList.add('selected-card')  
  }

  function controlCardAudio(){
    if(selectedCard.audio.paused == false){
      selectedCard.audio.pause()
      return
    }

    for (let i in Cards){
      Cards[i].audio.load()
    }

    selectedCard.audio.loop = true
    selectedCard.audio.play()
  }
  
  controlCardColor()
  controlCardAudio()
}