const signupbtn = document.querySelectorAll('#signupbtn');
signupbtn.addEventListener('click',async (e) => {

    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    // const password2 = document.querySelector('#password2').value.trim();
  


    const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({ 
            name: name,
            email: email,
            password: password,
            // password2: password2

        }),

        headers: { 'Content-Type': 'application/json' },

});

if (response.ok) {
    document.location.replace('/dashboard');
} else {
    document.querySelector('signup-error').textContent = 'Failed to sign up';
}

});


