// intro 




document.getElementById('login-btn').addEventListener('click', function () {

    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');

    if (email.value == 'spbank@gmail.com' && password.value == 'spbankfree') {
        window.location.href = 'bank.html';
    }
    else {
        alert('wrong password');
    }
    // alert('clicked')
})
