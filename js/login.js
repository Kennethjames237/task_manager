/**
 * Simple client-side validation for the login form.
 * @param {Event} event - The form submission event.
 */
const login_button = document.getElementById('login-button');

login_button.onclick = function (event) {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // just a test to see if it function
    const correctUsername = "Admin";
    const correctPassword = "12345";


    // 3. Check for empty fields (basic client-side check)
    if (usernameInput === '' || passwordInput === '') {
        alert('Please enter both your username and password.');
        return false; 
    }
    
    // 4. Check if the input matches the hard-coded credentials
    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // SUCCESS CASE
        alert('Login successful! Welcome Admin.');

        // In a real app, you would redirect the user to a dashboard page here:
         window.location.href = "/navbar.html";
         return true;

         
        
    } else {
        // FAILURE CASE
        alert('Login failed. Please check your username and password.');
    }

    // Always return false to prevent the form from submitting in this demo
    return false;
}
