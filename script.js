const HOST_CREDENTIALS = {
    username: '1',
    password: '1'
};

const HOST_CREDENTIALS1= {
    username: 'shashi1',
    password: 'shashi123'
};

function showRegistrationForm() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('registrations-list').style.display = 'none';
    document.getElementById('host-login').style.display = 'none';
}

function showHostLogin() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('registrations-list').style.display = 'none';
    document.getElementById('host-login').style.display = 'block';
    document.getElementById('loginError').style.display = 'none';
}

function showLandingPage() {
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('registrations-list').style.display = 'none';
    document.getElementById('host-login').style.display = 'none';
}

function showRegistrationsList() {
    if (!isHostLoggedIn()) {
        showHostLogin();
        return;
    }
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('host-login').style.display = 'none';
    document.getElementById('registrations-list').style.display = 'block';
    loadRegistrations();
}

function showRegistrationsList() {
    if (!isHostLoggedIn()) {
        showHostLogin();
        return;
    }
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('host-login').style.display = 'none';
    document.getElementById('registrations-list').style.display = 'block';
    loadRegistrations();
}

function handleHostLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === HOST_CREDENTIALS.username && password === HOST_CREDENTIALS.password) {
        sessionStorage.setItem('hostLoggedIn', 'true');
        
        // Redirect to the desired link after successful login
        window.location.href = 'https://docs.google.com/spreadsheets/d/1gbh9M4rsVvpjPSj2s2MIbysE-Cq-_RZsEBldPyfHpUo/edit?usp=sharing'; // Replace with your desired URL
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

function isHostLoggedIn() {
    return sessionStorage.getItem('hostLoggedIn') === 'true';
}

function handleLogout() {
    sessionStorage.removeItem('hostLoggedIn');
    showLandingPage();
}

function handleRegistration(event) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        usn: document.getElementById('usn').value.toUpperCase(),
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('course').value,
        batch: document.getElementById('batch').value,
        timestamp: new Date().toISOString()
    };

    const registrations = JSON.parse(localStorage.getItem('workshopRegistrations') || '[]');
    registrations.push(formData);
    localStorage.setItem('workshopRegistrations', JSON.stringify(registrations));

    event.target.reset();
    alert('Registration successful!');
    showLandingPage();
}
// Initialize the view
showLandingPage();
