// Hàm đăng nhập
function login() {
    // Lấy giá trị từ các trường input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Thực hiện kiểm tra đơn giản, thay thế bằng kiểm tra server-side trong thực tế
    if (email === 'lieuhongthuy0612' && password === '11050612') {
        alert('Chào mừng bé của anh đã đến <3');
        // Chuyển hướng sau khi đăng nhập thành công (đường dẫn cần phù hợp với dự án của bạn)
        window.location.href = 'admin.html';
    } else {
        alert('Bạn không phải là bé của anh, bạn nên đi ra đi nhá =)))');
    }
}
