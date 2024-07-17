document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const userPassword = document.getElementById('user-password');
    const passwordField = userPassword.value;
    if(email=== 'baaperbank@gmail.com' && passwordField === 'secret'){
        window.location.href = 'inside.html';
    }
    else{
        alert('4 talare jemne chudsi tui janos nai temni tui password mail o janosna BC')
    }
})