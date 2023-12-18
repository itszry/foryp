function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'suryastt' && password === 'santoso11') {
        window.location.href = 'beranda.html';
    } else if (username === 'yunifrzki_' && password === 'yuni15') {
        window.location.href = 'beranda.html';
    } else {
        showAlert('danger', 'Invalid username or password. Please try again.');
    }
}

function showAlert(type, message) {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type + ' position-fixed top-0 end-0 m-3 animate__animated animate__fadeIn';
    alertDiv.role = 'alert';
    alertDiv.innerHTML = message;

    document.body.appendChild(alertDiv);

    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}