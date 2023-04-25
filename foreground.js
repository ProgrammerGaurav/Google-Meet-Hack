// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.


async function requestContent() {
    let content = await chrome.storage.session.get('people');

    if (document.getElementsByClassName('uGOf1d').length < 1){
        console.log('[*] Waiting for people to join... or your screen size is too small...')
    } else{
        if (parseInt(document.getElementsByClassName('uGOf1d')[0].innerText) == content.people) {
            console.log(content.people + " : " + document.getElementsByClassName('uGOf1d')[0].innerText);
            console.log('[*] Leave')
            document.querySelector('[aria-label="Leave call"]').click()
        } else{
            console.log(content.people + " : " + document.getElementsByClassName('uGOf1d')[0].innerText);
            console.log('[*] pass')
        }   
    }
}

setInterval(() => {
    requestContent();
}, 1000);