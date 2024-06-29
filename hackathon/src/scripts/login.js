// Get the forms and inputs
const adminLoginForm = document.getElementById('admin-login-form');
const userLoginForm = document.getElementById('user-login-form');
const adminEmailInput = document.getElementById('admin-email');
const adminPasswordInput = document.getElementById('admin-password');
const userEmailInput = document.getElementById('user-email');
const userPasswordInput = document.getElementById('user-password');

// Add event listeners to the forms
adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const adminData = {
        email: adminEmailInput.value,
        password: adminPasswordInput.value
    };
    loginRequest('/api/admin/login', adminData, 'Admin logged in successfully!');
});

userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        email: userEmailInput.value,
        password: userPasswordInput.value
    };
    loginRequest('/api/user/login', userData, 'User logged in successfully!');
});

// Function to send login requests to the API endpoints
function loginRequest(endpoint, data, successMessage) {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert(successMessage);
        // Redirect to the dashboard or profile page
        window.location.href = '/dashboard';
    })
    .catch((error) => {
        console.error(error);
        alert('Invalid email or password. Please try again.');
    });
}