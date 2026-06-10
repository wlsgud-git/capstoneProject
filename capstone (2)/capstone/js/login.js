document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const notification = document.getElementById('notification');
    
    const gptProfileBtn = document.getElementById('btn-gpt-profile');
    const profileDropdown = document.getElementById('profile-dropdown');
    const gptCreateBtn = document.getElementById('btn-gpt-create');
    const gptLogoutBtn = document.getElementById('btn-gpt-logout');

    // 1. 공통 커스텀 알림 함수
    function showNotification(message, type = 'success') {
        if (!notification) return;
        notification.textContent = message;
        notification.className = `notification show ${type}`;
        setTimeout(() => { notification.classList.remove('show'); }, 3000);
    }

    // 2. 우상단 프로필 클릭 시 드롭다운 토글 기능
    if (gptProfileBtn && profileDropdown) {
        gptProfileBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 이벤트 전파 방지 (바탕화면 클릭과 충돌 방지)
            profileDropdown.classList.toggle('show');
        });

        // 드롭다운 메뉴 바깥 영역(빈 화면) 누르면 자동으로 메뉴 닫히게 처리
        document.addEventListener('click', () => {
            profileDropdown.classList.remove('show');
        });
    }

    // 3. 로그인 폼 제출 이벤트
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            if (email && password) {
                showNotification('성공적으로 로그인되었습니다!', 'success');
            } else {
                showNotification('이메일과 비밀번호를 입력해주세요.', 'error');
            }
        });
    }

    // 4. 새 채팅 생성 버튼 클릭 이벤트
    if (gptCreateBtn) {
        gptCreateBtn.addEventListener('click', () => {
            const roomName = prompt('새로 만들 채팅방의 이름을 입력해주세요:');
            if (roomName !== null) {
                const trimmedName = roomName.trim();
                if (trimmedName === '') {
                    showNotification('채팅방 이름은 공백으로 만들 수 없습니다.', 'error');
                } else {
                    showNotification(`"${trimmedName}" 방이 생성되었습니다.`, 'success');
                }
            }
        });
    }

    // 5. 로그아웃 버튼 클릭 이벤트
    if (gptLogoutBtn) {
        gptLogoutBtn.addEventListener('click', () => {
            if (confirm('정말 로그아웃 하시겠습니까?')) {
                showNotification('성공적으로 로그아웃되었습니다.', 'success');
            }
        });
    }
});