// JavaScript for real-time chat page

const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const chatForm = document.getElementById('chat-form');

inputEl.addEventListener('input', () => {
    sendBtn.disabled = inputEl.value.trim().length === 0;
});

let lastMessageId = 0; // Track the last message we've seen

// 1. Function to Send Messages
chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('message', inputEl.value);
    formData.append('csrfmiddlewaretoken', document.querySelector('[name=csrfmiddlewaretoken]').value);

    fetch('/send_message/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        inputEl.value = ''; // Clear the box
        sendBtn.disabled = inputEl.value.trim().length === 0;
    })
    .catch(error => console.error('Error sending message:', error));
});

// 2. Function to Poll for New Messages
function fetchMessages() {
    fetch(`/get_messages/${lastMessageId}/`)
    .then(response => response.json())
    .then(data => {
        data.messages.forEach(msg => {

            const msgDiv = document.createElement('div');
            const isMe = msg.sender__username === currentUser; 
            
            // Format the timestamp (e.g., 3:45 PM)
            const messageTime = new Date(msg.timestamp).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });

            msgDiv.classList.add('message');
            msgDiv.classList.add(isMe ? 'sent' : 'received');

            // Create the bubble with Username, Text, and Time
            msgDiv.innerHTML = `
                <span class="username">${isMe ? 'You' : msg.sender__username}</span>
                <div class="text">${msg.content}</div>
                <span class="timestamp">${messageTime}</span>
            `;

            messagesEl.appendChild(msgDiv);

            lastMessageId = msg.id; // Update last seen message ID

            messagesEl.scrollTop = messagesEl.scrollHeight; // Auto-scroll to bottom
        
        });
    })
    .catch(error => console.error('Error fetching messages:', error));
}

fetchMessages(); // Initial fetch when page loads
// Run every 2000ms (2 seconds)
// setInterval(fetchMessages, 2000);