
//variables
let interaction = document.querySelector('a:nth-of-type(12)')
let frontend = document.querySelector('a:nth-of-type(1)')
let design = document.querySelector('a:nth-of-type(2)')
let en = document.querySelector('a:nth-of-type(3)')
let development = document.querySelectorAll('span')
let developmentGoalPost = document.querySelector('a:nth-of-type(4)')
let span = document.querySelector('span')
let sprint5 = document.querySelector('a:nth-of-type(5)')
let fix = document.querySelector('a:nth-of-type(6)')
let the = document.querySelector('a:nth-of-type(7)')
let flow = document.querySelector('a:nth-of-type(8)')
let user = document.querySelector('a:nth-of-type(9)')
let interface = document.querySelector('a:nth-of-type(10) .interface')
let events = document.querySelector('a:nth-of-type(11)')
let dropButton = document.querySelector('.dropballbutton')
let ball = document.querySelector('.ball')
let player = document.querySelector('.player')

//event listeners
interaction.addEventListener('click', jumpHandler)  
interaction.addEventListener('animationend', jumpHandler)
frontend.addEventListener('click', rotateHandler)
frontend.addEventListener('animationend', rotateHandler)
design.addEventListener('click', squashHandler)
design.addEventListener('animationend', squashHandler)
en.addEventListener('click', scalerotateHandler)
en.addEventListener('animationend', scalerotateHandler)

development.forEach(span => {
  span.addEventListener('mouseover', () => {
    span.classList.toggle('jumpletter')
  })
})

sprint5.addEventListener('click', sprintHandler)
sprint5.addEventListener('animationend', sprintHandler)
fix.addEventListener('click', colorchangeHandler)
fix.addEventListener('animationend', colorchangeHandler)
the.addEventListener('click', movealongbodyHandler)
the.addEventListener('animationend', movealongbodyHandler)
flow.addEventListener('click', waveHandler)
flow.addEventListener('animationend', waveHandler)
user.addEventListener('click', stretchingHandler)
user.addEventListener('animationend', stretchingHandler)
interface.addEventListener('click', dropHandler)
interface.addEventListener('animationend', dropHandler)
events.addEventListener('click', stretchturnHandler)
dropButton.addEventListener('click', dropballHandler)
dropButton.addEventListener('animationend', dropballHandler)

//functions
function jumpHandler(){
  interaction.classList.toggle('jump');
}

function rotateHandler(){
  frontend.classList.toggle('rotate');
}

function squashHandler(){
  design.classList.toggle('squash');
}

function scalerotateHandler(){
  en.classList.toggle('scalerotate');
}

function sprintHandler(){
  sprint5.classList.toggle('sprint');
}

function colorchangeHandler(){
  fix.classList.toggle('colorchange');
}

function movealongbodyHandler(){
  the.classList.toggle('movealongbody');
}

function waveHandler(){
  flow.classList.toggle('wave');
}

function stretchingHandler(){
  user.classList.toggle('stretching');
}

function dropHandler(){
  interface.classList.toggle('drop')
}

function stretchturnHandler(){
  events.classList.toggle('stretchturn')
}

function dropballHandler(){
  ball.classList.toggle('ballanimation');
  player.classList.toggle('playeranimation');
}
