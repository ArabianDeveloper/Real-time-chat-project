// JavaScript for real-time chat page

const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

inputEl.addEventListener('input', () => {
    sendBtn.disabled = inputEl.value.trim().length === 0;
});

sendBtn.addEventListener('click', () => {
    const text = inputEl.value.trim();
    if (!text) return;
    addMessage('You', text);
    inputEl.value = '';
    sendBtn.disabled = true;
    // TODO: send message over websocket
});

function addMessage(user, text) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<span class="user">${user}:</span> <span class="text">${text}</span>`;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Example of receiving a message
// setTimeout(() => addMessage('Alice', 'Hello!'), 1000);
