document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup-link');
    const showLoginLink = document.getElementById('show-login-link');

    const loginErrorMessage = document.getElementById('login-error-message');
    const signupErrorMessage = document.getElementById('signup-error-message');

    function displayErrorMessage(element, message) {
        element.textContent = message;
        element.classList.add('show');
    }

    function hideErrorMessage(element) {
        element.textContent = '';
        element.classList.remove('show');
    }

    showSignupLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        hideErrorMessage(loginErrorMessage);
        hideErrorMessage(signupErrorMessage);
    });

    showLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        hideErrorMessage(signupErrorMessage);
        hideErrorMessage(loginErrorMessage);
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        hideErrorMessage(loginErrorMessage);

        if (email === '' || password === '') {
            displayErrorMessage(loginErrorMessage, 'All inputs is required');
            return;
        }

        console.log('Login attempt with:', { email, password });
        // In a real app, send data to server for login
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        hideErrorMessage(signupErrorMessage);

        if (name === '' || email === '' || password === '') {
            displayErrorMessage(signupErrorMessage, 'Enter password');
            return;
        }

        console.log('Sign Up attempt with:', { name, email, password });
        // In a real app, send data to server for registration
    });
});