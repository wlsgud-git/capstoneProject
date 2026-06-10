
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');


    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

    
        if (username.length < 2) {
            showNotification('이름은 최소 2글자 이상 입력해주세요.', 'error');
            return;
        }

       
        if (!validateEmail(email)) {
            showNotification('올바른 이메일 형식을 입력해주세요.', 'error');
            return;
        }

        
        if (password.length < 6) {
            showNotification('비밀번호는 최소 6자리 이상이어야 합니다.', 'error');
            return;
        }

        
        if (password !== confirmPassword) {
            showNotification('비밀번호가 일치하지 않습니다. 다시 확인해주세요.', 'error');
            return;
        }

       
        showNotification('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.', 'success');

        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });

  
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

   
    function showNotification(message, type = 'success') {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast-notification ${type}`;
        toast.textContent = message;

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '12px 24px',
            borderRadius: '6px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: '1000',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'opacity 0.3s, transform 0.3s',
            transform: 'translateY(20px)',
            opacity: '0',
            backgroundColor: type === 'success' ? '#10a37f' : '#ef4444'
        });

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 50);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
});