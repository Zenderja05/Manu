let username = document.querySelector('input[name="username"]');
let password = document.querySelector('input[name="password"]');
let loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', function() {
    if (username.value === 'Zen' && password.value === '050552') {
        alert('เข้าสู่ระบบสำเร็จ!');
        window.location.href = '../nav.html';
        if (username.value === 'Maysa' && password.value === 'Maysa26') {
            alert('เข้าสู่ระบบสำเร็จ!');
            window.location.href = '../nav.html';
        }
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!');
    }
});