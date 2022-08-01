let subscribeBtn = document.getElementById("subscribe");
let subscribe = false;

subscribeBtn.addEventListener('click', () => {
    if (subscribe) {
        subscribeBtn.innerText = "subscribed"
        subscribeBtn.style = "background-color: gray;"
        subscribe = false
    } else {
        subscribeBtn.innerText = "subscribe"
        subscribeBtn.style = "background-color: red;"
        subscribe = true
    }
})