var result;
document.getElementById('email-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    showLoadingPopup();

    const formData = new FormData();
    formData.append('name', document.getElementById('fullname').value);
    formData.append('email', document.getElementById('user-email').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('body', document.getElementById('message').value);
    formData.append('file', document.getElementById('file').files[0]);

    const response = await fetch('http://localhost:5200/send-email', {
        method: 'POST',
        body: formData,
    });
    
    result = await response.json();
    closeLoadingPopup();
    
    if(result.success) {
        showPopupMessage(result.message);
    } else {
        showPopupMessage(result.message);
    }
});

const popup = document.getElementById('popup-msg');
const loadingPopup = document.getElementById('loading-popup');
const msg = document.getElementById('msg');
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
    document.getElementById('popup-msg-init').classList.add('popup-init');
}

function closePopupContainerInit() {
    document.getElementById('popup-msg-init').classList.remove('popup-init');
}