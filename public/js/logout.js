// logout function will send a POST request to the server to log in the user and redirect the browser to the profile page   

const logout = async () => {
    // this function will send a POST request to the server to log in the user

    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    // if successful, redirect the browser to the profile page
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// this function will send a POST request to the server to log in the user
document.querySelector('#logout').addEventListener('click', logout);