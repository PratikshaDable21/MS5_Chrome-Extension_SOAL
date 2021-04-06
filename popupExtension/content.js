chrome.runtime.onMessage.addListener(message => {
    let val = `Hello ${message}`
    alert(val);
})