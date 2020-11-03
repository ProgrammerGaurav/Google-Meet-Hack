function exit() {
  if (running) {
    if (requiredParticipantToExit > parseInt(document.querySelector('.wnPUne').innerHTML)) {
      localStorage.removeItem('running');
      document.querySelector('[aria-label="Leave call"]').click()
      clearInterval(exitInt);
    }
  }
}

var requiredParticipantToExit = parseInt(localStorage.getItem("requiredParticipantToExit"));
var running = localStorage.getItem('running');
console.log(requiredParticipantToExit, parseInt(document.querySelector('.wnPUne').innerHTML));
var exitInt = setInterval(exit, 1000);