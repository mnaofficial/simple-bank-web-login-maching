//login maching....
document.getElementById('login-submit').addEventListener('click', function () {

    //get user email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;

    //get user password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;

    //chack email & password
    if (userEmail == 'mna@gmail.com' && userPassword == 'munna') {
        window.location.href = "banking.html"
    };

});

