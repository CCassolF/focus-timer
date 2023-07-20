import { Controls } from './controls.js'
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from './elements.js'
import Events from './events.js'
import Sound from './sounds.js'
import { Timer } from './timer.js'


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({
  controls,
  timer,
  sound
})