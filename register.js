function register() {
    var username = document.getElementById('newUsername').value;
    var password = document.getElementById('newPassword').value;
    var email = document.getElementById('newEmail').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    alert('Registration Successful');
    window.location.href = 'platform.html';
}
