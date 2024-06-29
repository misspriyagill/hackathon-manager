// Get the forms and inputs
const adminForm = document.getElementById('admin-form');
const userForm = document.getElementById('user-form');
const adminEmailInput = document.getElementById('admin-email');
const adminPasswordInput = document.getElementById('admin-password');
const adminNameInput = document.getElementById('admin-name');
const userEmailInput = document.getElementById('user-email');
const userPasswordInput = document.getElementById('user-password');
const userNameInput = document.getElementById('user-name');

// Add event listeners to the forms
adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const adminData = {
        email: adminEmailInput.value,
        password: adminPasswordInput.value,
        name: adminNameInput.value
    };
    sendRequest('/api/admin/signup', adminData, 'Admin signed up successfully!');
});

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        email: userEmailInput.value,
        password: userPasswordInput.value,
        name: userNameInput.value
    };
    sendRequest('/api/user/signup', userData, 'User signed up successfully!');
});

// Function to send requests to the API endpoints
function sendRequest(endpoint, data, successMessage) {
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
        // Reset the form fields
        adminEmailInput.value = '';
        adminPasswordInput.value = '';
        adminNameInput.value = '';
        userEmailInput.value = '';
        userPasswordInput.value = '';
        userNameInput.value = '';
    })
    .catch((error) => {
        console.error(error);
        alert('Error signing up. Please try again.');
    });
}