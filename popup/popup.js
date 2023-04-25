
addEventListener("submit", (event) => {});

onsubmit = (event) => {myfunc()};

function myfunc() {

    let people = document.getElementById('requiredParticipantToExit').value;

    alert('[*] Working will end call after: ' + people + ' people are lef!');
   
    chrome.storage.session.set({people: parseInt(people.toString())});

}
