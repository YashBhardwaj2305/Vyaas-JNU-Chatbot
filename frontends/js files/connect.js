// Function to show the appropriate tab
function showTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Highlight the selected button
    event.currentTarget.classList.add('active');
}

// Handle Sign In form submission
document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('signin-username').value.trim();
    const password = document.getElementById('signin-password').value.trim();

    if (!username || !password) {
        displayMessage('signin-message', 'Please fill in all fields.', 'error');
        return;
    }

    const data = { username, password };

    axios.post('http://localhost:4000/api/data/login', data)
        .then(response => {
            console.log(response);
            
            if (response.data.statuscode===200) {
                window.location.href = 'ask.html'; // Redirect if login is successful
            } else {
                document.getElementById('signin-message').textContent = 'Invalid username or password'; // Display error message
            }
            console.log('Sign In Response:', response.data);
            displayMessage('signin-message', response.data.message, 'success');
            // Optionally, redirect the user or store authentication tokens here
        })
        .catch(error => {
            console.error('Sign In Error:', error.response ? error.response.data : error.message);
            const errorMsg = error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'An error occurred during sign in.';
            displayMessage('signin-message', errorMsg, 'error');
        });
});

// Handle Sign Up form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (!username || !email || !password) {
        displayMessage('signup-message', 'Please fill in all fields.', 'error');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayMessage('signup-message', 'Please enter a valid email address.', 'error');
        return;
    }

    const data = { username, email, password };

    axios.post('http://localhost:4000/api/data/register', data)
        .then(response => {
            console.log('Sign Up Response:', response.data);
            displayMessage('signup-message', response.data.message, 'success');
            // Optionally, redirect the user or clear the form here
        })
        .catch(error => {
            console.error('Sign Up Error:', error.response ? error.response.data : error.message);
            const errorMsg = error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'An error occurred during sign up.';
            displayMessage('signup-message', errorMsg, 'error');
        });
});

// Function to display messages
function displayMessage(elementId, message, type) {
    const messageDiv = document.getElementById(elementId);
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Automatically hide the message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}