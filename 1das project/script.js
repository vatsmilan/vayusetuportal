const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
// --- Code to redirect to the event page after login ---
const loginForm = document.querySelector('.form-box.login form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stops the form from just refreshing the page
    
    // This line tells the browser to open your new file
    window.location.href = "events.html"; 
});