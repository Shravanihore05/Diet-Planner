// Handling form submission to prevent page reload and show a message
document.getElementById('diet-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload on form submit

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const preferences = document.getElementById('preferences').value;

    if (name && email && goal) {
        alert(`Thank you, ${name}! Your diet plan for ${goal} has been submitted.`);
        // Optionally, you can reset the form here
        document.getElementById('diet-form').reset();
    } else {
        alert('Please fill out all required fields.');
    }
});


// chatbot
// Function to toggle chat window visibility
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'flex') ? 'none' : 'flex';
}

// Function to send message
function sendMessage() {
    const input = document.getElementById('user-input');
    const messageText = input.value.trim();

    if (messageText) {
        // Display user's message
        addMessage(messageText, 'user-message');
        input.value = ''; // Clear input field

        // Simulate bot response after 1 second
        setTimeout(() => {
            const botResponse = getBotResponse(messageText);
            addMessage(botResponse, 'bot-message');
        }, 1000);
    }
}

// Function to display a message
function addMessage(message, type) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(type);
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate a bot response based on the user's message
function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm doing great, thank you!",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm sorry, I didn't understand that. Could you please rephrase?"
    };

    return responses[userMessage.toLowerCase()] || responses["default"];
}
