document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    let isValid = true;

    if (!firstName) {
        isValid = false;
        document.getElementById('firstNameFeedback').textContent = 'Please Enter Your First Name.';
        document.getElementById('firstName').classList.add('is-invalid');
    } else {
        document.getElementById('firstName').classList.remove('is-invalid');
    }

    if (!lastName) {
        isValid = false;
        document.getElementById('lastNameFeedback').textContent = 'Please Enter Your Last Name.';
        document.getElementById('lastName').classList.add('is-invalid');
    } else {
        document.getElementById('lastName').classList.remove('is-invalid');
    }

    if (!email) {
        isValid = false;
        document.getElementById('emailFeedback').textContent = 'Please Enter Your Email.';
        document.getElementById('email').classList.add('is-invalid');
    } else if (!validateEmail(email)) {
        isValid = false;
        document.getElementById('emailFeedback').textContent = 'Please enter a valid email address.';
        document.getElementById('email').classList.add('is-invalid');
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    if (!password) {
        isValid = false;
        document.getElementById('passwordFeedback').textContent = 'Please Enter Your Password.';
        document.getElementById('password').classList.add('is-invalid');
    } else if (!validatePassword(password)) {
        isValid = false;
        document.getElementById('passwordFeedback').textContent = 'Password must be at least 6-12 characters long, contain at least one letter, one number, and one special character.';
        document.getElementById('password').classList.add('is-invalid');
    } else {
        document.getElementById('password').classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can add code here to submit the form data to the server
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
    return re.test(password);
}

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.getElementById('togglePasswordIcon');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    passwordIcon.classList.toggle('bi-eye');
    passwordIcon.classList.toggle('bi-eye-slash');
});