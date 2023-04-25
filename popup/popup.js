
addEventListener("submit", (event) => {});

onsubmit = (event) => {myfunc()};

async function myfunc() {

    let people = document.getElementById('requiredParticipantToExit').value;

    alert('[*] Working will end call after: ' + people + ' people are lef!');
   
    chrome.storage.session.set({people: parseInt(people.toString())});

}


async function requestContent() {

let content = await chrome.storage.session.get('people');
let total = "idk lol sorry";


document.getElementById('noOfParticipant').innerText = content.people;
document.getElementById('totalNum').innerText = total;

}

requestContent();
