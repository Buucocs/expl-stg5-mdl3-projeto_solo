export function Functions({
  Buttons,
  timeout,
  seconds,
  minutes,
  rootMinutes,
  timerDisplaySeconds,
  timerDisplayMinutes,
  Cards,
  ThemeButtons,
}){
  function countdown(){
    Buttons.play.removeEventListener('click', countdown, true)
  
    timeout = setInterval(() => {
      
      if(seconds == 0 && minutes == 0){
        stop()
        return
      }
      
      if(seconds == 0){
        adjustTimerDisplay(--minutes, seconds = 60)
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
  
  function controlCardColor(selectedCard){
    if(selectedCard.card.classList.contains('selected-card')){
      selectedCard.card.classList.remove('selected-card')  
      return
    }
  
    for (let i in Cards){
      Cards[i].card.classList.remove('selected-card')
    }
  
    selectedCard.card.classList.add('selected-card')  
  }
  
  function controlCardAudio(selectedCard){
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
  
  function controls (selectedCard){
    controlCardColor(selectedCard)
    controlCardAudio(selectedCard)
  }
  
  function controlAudioVolume(selectedCard){
    selectedCard.audio.volume = (selectedCard.slider.value/100)
  }
  
  function changeTheme(){
    for (let i in ThemeButtons){
      ThemeButtons[i].classList.toggle('hide')
    }
    document.querySelector('body').classList.toggle('dark-theme')
  }

  return{
    countdown,
    stop,
    addFiveMinutes,
    subtractFiveMinutes,
    adjustTimerDisplay,
    controlCardColor,
    controlCardAudio,
    controls,
    controlAudioVolume,
    changeTheme,
  }
}