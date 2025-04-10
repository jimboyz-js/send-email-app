var result;

document.getElementById('email-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    showLoadingPopup();

    const formData = new FormData();
    formData.append('msgs', document.getElementById('message').value);
    formData.append('file', document.getElementById('file').files[0]);

    const response = await fetch('http://192.168.0.100:5200/send-email-anon', {
        method: 'POST',
        body: formData
    })

    result = await response.json();
    closeLoadingPopup();
    showPopupMessage(result.message);

})

const popup = document.getElementById('popup-msg');
const loadingPopup = document.getElementById('loading-popup');
const msg = document.getElementById('msg');
const popupCon = document.getElementById('popup-msg-init');
const img = document.getElementById('img');

function showPopupMessage(message) {
    
    showPopupContainerInit();
    if(!result.success) {
        img.src = './images/close.ico';
    }
    popup.classList.add('show-popup');
    msg.innerText = message;
}

function closePopupMessage() {
    closePopupContainerInit();
    popup.classList.remove('show-popup');
}

function showLoadingPopup() {
    showPopupContainerInit();
    loadingPopup.classList.add('show-popup');
}

function closeLoadingPopup() {
    closePopupContainerInit();
    loadingPopup.classList.remove('show-popup');
}

document.getElementById('btn').addEventListener('click', (event) => {
    closePopupMessage();
})

function showPopupContainerInit() {
    popupCon.classList.add('popup-init');
}

function closePopupContainerInit() {
    popupCon.classList.remove('popup-init');
}

// popupCon.addEventListener('click', (event) => {
//     closePopupMessage();
// })