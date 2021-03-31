document.addEventListener("DOMContentLoaded",function(){
    var clickButton = document.getElementById("click");
    clickButton.addEventListener("click", function(){
        // alert ("button was clicked")
        let name = document.getElementById("name");
        let val = name.Value;
        name.Value = '';
        // alert (val);
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, val)
        })
    })
})