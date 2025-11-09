/**
 * Simple client-side validation for the login form.
 * @param {Event} event - The form submission event.
 */
const submit = document.getElementById('login-button');

submit.onclick = function (event) {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    // Set mock (hard-coded) correct credentials
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
        return true;

        // In a real app, you would redirect the user to a dashboard page here:
        // window.location.href = "dashboard.html";
        
    } else {
        // FAILURE CASE
        alert('Login failed. Please check your username and password.');
    }

    // Always return false to prevent the form from submitting in this demo
    return false;
}
