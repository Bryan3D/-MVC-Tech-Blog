
// login form handler - this is the function that is called when the login form is submitted

const loginForm = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        // this function will send a POST request to the server to log in the user
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // if successful, redirect the browser to the profile page 

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// this function will send a POST request to the server to log in the user

const signupForm = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // this function will send a POST request to the server to log in the user
    if (name && email && password) {
        
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        // if successful, redirect the browser to the profile page
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// this function will send a POST request to the server to log in the user

document.querySelector('.login-form').addEventListener('submit', loginForm);
document.querySelector('.signup-form').addEventListener('submit', signupForm);

// Path: public\js\dashboard.js



