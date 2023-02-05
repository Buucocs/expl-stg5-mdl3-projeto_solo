import { Functions } from "./functions.js";
import { Events } from "./events.js";
import { 
  timerDisplayMinutes,
  timerDisplaySeconds,
  Buttons,
  Cards,
  ThemeButtons,
  timeout,
  rootMinutes,
  minutes,
  seconds,
} from "./elements.js";

const functions = Functions({
  Buttons,
  timeout,
  seconds,
  minutes,
  rootMinutes,
  timerDisplaySeconds,
  timerDisplayMinutes,
  Cards,
  ThemeButtons,
})

const events = Events({
  countdown: functions.countdown,
  stop: functions.stop,
  addFiveMinutes: functions.addFiveMinutes,
  subtractFiveMinutes: functions.subtractFiveMinutes,
  controls: functions.controls,
  controlAudioVolume: functions.controlAudioVolume,
  changeTheme: functions.changeTheme,
})