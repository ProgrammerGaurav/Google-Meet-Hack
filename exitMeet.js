function exit() {
  if (running) {
    if (requiredParticipantToExit > parseInt(document.querySelector('.uGOf1d').innerHTML)) {
      localStorage.removeItem('running');
      document.querySelector('.ftJPW').click()
      clearInterval(exitInt);
    }
  }
}

var requiredParticipantToExit = parseInt(localStorage.getItem("requiredParticipantToExit"));
var running = localStorage.getItem('running');
console.log(requiredParticipantToExit, parseInt(document.querySelector('.uGOf1d').innerHTML));
var exitInt = setInterval(exit, 1000);