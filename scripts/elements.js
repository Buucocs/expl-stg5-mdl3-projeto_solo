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
      card: document.getElementById('first-card-container'),
      background: document.getElementById('first-card'),
      slider: document.getElementById('first-slider'),
    },
    second: {
      audio: new Audio('./assets/rain.wav'),
      card: document.getElementById('second-card-container'),
      background: document.getElementById('second-card'),
      slider: document.getElementById('second-slider'),
    },
    third: {
      audio: new Audio('./assets/coffeeShop.wav'),
      card: document.getElementById('third-card-container'),
      background: document.getElementById('third-card'),
      slider: document.getElementById('third-slider'),
    },
    fourth: {
      audio: new Audio('./assets/firePlace.wav'),
      card: document.getElementById('fourth-card-container'),
      background: document.getElementById('fourth-card'),
      slider: document.getElementById('fourth-slider'),
    },
  }
  const ThemeButtons = {
    light: document.getElementById('light-theme-button'),
    dark: document.getElementById('dark-theme-button'),
  }
  
  let timeout
  let rootMinutes = timerDisplayMinutes.textContent
  let minutes = rootMinutes
  let seconds = timerDisplaySeconds.textContent
  
  export{
    timerDisplayMinutes,
    timerDisplaySeconds,
    Buttons,
    Cards,
    ThemeButtons,
    timeout,
    rootMinutes,
    minutes,
    seconds,
  }