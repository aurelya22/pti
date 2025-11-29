// Logika Login untuk index.html (Kode Lama)
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('login-message');

            if (username === 'Kelompok 2' && password === '12345') {
                window.location.href = 'dashboard.html'; 
            } else {
                loginMessage.textContent = 'Username atau password salah. Coba: Kelompok 2 / 12345';
            }
        });
    }
    
    // Panggil fungsi inisialisasi pop-up saat DOMContentLoaded
    initializePopupListeners();
});

// --- FUNGSI BARU UNTUK HALAMAN EVALUASI ---

function openPopup() {
    document.getElementById('evaluation-popup').classList.add('active');
}

function closePopup() {
    document.getElementById('evaluation-popup').classList.remove('active');
}

// Fungsi untuk menambahkan listener saat elemen tersedia
function initializePopupListeners() {
    const popupOverlay = document.getElementById('evaluation-popup');
    if (popupOverlay) {
        // Logika opsional: Tutup pop-up jika klik di luar card (pada overlay)
        popupOverlay.addEventListener('click', function(e) {
            // Memastikan klik tepat di atas overlay, bukan di dalam popup-card
            if (e.target === this) {
                closePopup();
            }
        });
    }
}