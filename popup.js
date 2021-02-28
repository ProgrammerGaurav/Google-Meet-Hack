chrome.tabs.executeScript(null, {
    file: 'check_if_in_meeting.js'
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.meet) {
        if (request.running) {
            document.querySelector('.meet').classList.add('hide');
            document.querySelector('.running').classList.remove('hide');

        } else {
            document.getElementById('noOfParticipant').innerHTML = request.noOfParticipants;
            document.getElementById('requiredParticipantToExit').value = Math.round(request.noOfParticipants/2);

            document.getElementById('confirm').addEventListener('click', () => {
                const requiredParticipantToExit = document.getElementById('requiredParticipantToExit').value;
                document.querySelector('.meet').classList.add('hide');
                document.querySelector('.running').classList.remove('hide');

                chrome.tabs.executeScript(null, {
                    code: 'localStorage.setItem("running", true);'
                });
                chrome.tabs.executeScript(null, {
                    code: `localStorage.setItem("requiredParticipantToExit", ${requiredParticipantToExit});`
                });
                chrome.tabs.executeScript(null, {
                    file: "exitMeet.js"
                })
            });
        }
    } else {
        document.querySelector('.meet').classList.add('hide');
        document.querySelector('.nomeet').classList.remove('hide');
    }
});
document.querySelector('.cancelButton').addEventListener('click', () => {
    chrome.tabs.executeScript(null, {
        code: 'localStorage.removeItem("running");'
    });
    window.close();
});