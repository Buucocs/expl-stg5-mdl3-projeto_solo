import { 
  Buttons,
  Cards,
  ThemeButtons,
 } from "./elements.js"

export function Events({
  countdown,
  stop,
  addFiveMinutes,
  subtractFiveMinutes,
  controls,
  controlAudioVolume,
  changeTheme,
}){
  Buttons.play.addEventListener('click', countdown, true)
  Buttons.stop.addEventListener('click', stop)
  Buttons.plus.addEventListener('click', addFiveMinutes)
  Buttons.minus.addEventListener('click', subtractFiveMinutes)
  Cards.first.background.addEventListener('click', () => {controls(Cards.first)})
  Cards.second.background.addEventListener('click', () => {controls(Cards.second)})
  Cards.third.background.addEventListener('click', () => {controls(Cards.third)})
  Cards.fourth.background.addEventListener('click', () => {controls(Cards.fourth)})
  Cards.first.slider.addEventListener('mousemove', () => {controlAudioVolume(Cards.first)})
  Cards.second.slider.addEventListener('mousemove', () => {controlAudioVolume(Cards.second)})
  Cards.third.slider.addEventListener('mousemove', () => {controlAudioVolume(Cards.third)})
  Cards.fourth.slider.addEventListener('mousemove', () => {controlAudioVolume(Cards.fourth)})
  Cards.first.slider.addEventListener('touchmove', () => {controlAudioVolume(Cards.first)})
  Cards.second.slider.addEventListener('touchmove', () => {controlAudioVolume(Cards.second)})
  Cards.third.slider.addEventListener('touchmove', () => {controlAudioVolume(Cards.third)})
  Cards.fourth.slider.addEventListener('touchmove', () => {controlAudioVolume(Cards.fourth)})
  ThemeButtons.light.addEventListener('click', changeTheme)
  ThemeButtons.dark.addEventListener('click', changeTheme)
}