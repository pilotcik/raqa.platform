function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var storedUser = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');
    var storedEmail = localStorage.getItem('email');
    if (email === storedEmail && password === storedPass) {
        alert('Login Successful');
        window.location.href = 'platform.html';
    } else {
        alert('Access Denied');
    }
}
