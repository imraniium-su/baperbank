document.getElementById('btn-log').addEventListener('click', function () {
    //    email 
    const emilfild = document.getElementById('user-email');
    const email = emilfild.value;
    // password 
    const passwordfild = document.getElementById('user-password');
    const password = passwordfild.value;
    if (email === 'imraniium2019@gmail.com' && password === 'imraniium') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Input your valid email and password')
    }
})