// Redirect to new page when clicking anywhere on the page
document.body.addEventListener('click', function() {
    document.body.classList.add('transitioning');
    setTimeout(function() {
        window.location.href = 'connect.html'; // Change to your desired page
    }, 1000); // 1 second delay for smooth transition
});