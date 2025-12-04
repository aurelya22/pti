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

// File: script.js (Revisi Final)

// Tambahkan fungsi closePopup() agar tombol 'X' berfungsi (Sudah Benar)
function closePopup() {
    document.getElementById('evaluation-popup').classList.remove('active');
}

function openPopup(mode = 'anggota') {
    // Dapatkan elemen-elemen penting
    const popup = document.getElementById('evaluation-popup');
    const anggotaContainer = document.getElementById('anggota-list');
    const pesanInput = document.getElementById('pesan-kesan');
    const hasilPesanDiv = document.getElementById('hasil-pesan');
    
    // PERBAIKAN: Dapatkan Judul menggunakan ID dari HTML final Anda
    const judulAnggota = document.getElementById('judul-anggota');
    const judulPesan = document.getElementById('judul-pesan');
    
    // Pastikan semua elemen ditemukan sebelum melanjutkan
    if (!popup || !anggotaContainer || !pesanInput || !hasilPesanDiv || !judulAnggota || !judulPesan) {
        console.error("Salah satu elemen pop-up tidak ditemukan. Periksa ID di HTML Anda.");
        return; // Hentikan fungsi jika elemen hilang
    }
    
    popup.classList.add('active');
    hasilPesanDiv.innerHTML = ''; 

    // --- Sembunyikan semua elemen konten sebelum beralih mode ---
    // Ini penting agar tidak ada tumpang tindih dari mode sebelumnya
    judulAnggota.style.display = 'none';
    judulPesan.style.display = 'none';
    anggotaContainer.style.display = 'none';
    pesanInput.style.display = 'none';
    hasilPesanDiv.style.display = 'none'; 
    // ------------------------------------------------------------


    if (mode === 'anggota') {
        // --- LOGIKA TAMPILKAN ANGGOTA KELOMPOK ---
        
        // Tampilkan elemen Anggota
        judulAnggota.style.display = 'block';
        anggotaContainer.style.display = 'block'; 
        
        // Sembunyikan elemen Pesan/Kesan
        judulPesan.style.display = 'none'; // Pastikan ini disembunyikan
        
        const anggotaList = [
            "Anastasia Sevilla Mariama - 672024206",
            "Aurelya Chesya Vinenci - 672025213", 
            "Syalommita Marchia Klensi Turangan - 672025217",
            "Efratu Todingdatu Andi Lolo - 672025229",
            "Jhelsy Salsa Rumbewa - 672025238",
        ];
        
        anggotaContainer.innerHTML = "";
        anggotaList.forEach(nama => {
            const li = document.createElement("li");
            li.textContent = nama;
            anggotaContainer.appendChild(li);
        });

    } else if (mode === 'kesan_pesan') {
        // --- LOGIKA TAMPILKAN KESAN DAN PESAN STATIS ---
        
        // Tampilkan elemen Pesan/Kesan Statis
        judulPesan.style.display = 'block';
        judulPesan.textContent = "Pesan dan Kesan Evaluasi:"; // Memastikan teks judul tetap
        hasilPesanDiv.style.display = 'block'; 
        
        // Sembunyikan elemen Anggota dan Input
        judulAnggota.style.display = 'none'; 
        pesanInput.style.display = 'none'; // Input textarea disembunyikan
        
        // Masukkan teks statis
        hasilPesanDiv.innerHTML = `
            <p><strong>Kesan:</strong> Kami sangat berterima kasih atas bimbingan Kak Patrick dan Kak Andaru selama satu semester ini. 
            Kebaikan dan kesediaan kalian untuk selalu membantu kami, baik di dalam maupun di luar kelas, benar-benar sangat berkesan. 
            Meskipun di awal sempat ada penyesuaian jadwal (kelasnya sempat jarang masuk, hehe), semangat kalian untuk tetap mengajar dan membimbing kami tidak pernah luntur.
            Kami merasa sangat terbantu dengan kesabaran kalian.</p>
            <p><strong>Pesan:</strong> Secara keseluruhan, materi yang disampaikan sangat bermanfaat. Namun, kami memiliki sedikit masukan agar proses pembelajaran ke depan bisa lebih optimal. 
            Terkadang, kecepatan dalam menjelaskan dan mempraktikkan materi terasa sedikit terlalu cepat, 
            sehingga kami yang baru pertama kali mencoba menjadi sulit untuk mengikuti secara maksimal. 
            Kami berharap di kesempatan berikutnya, kakak-kakak bisa sedikit menurunkan tempo penjelasan agar kami punya waktu lebih banyak untuk mencerna dan mempraktikkannya.
            TERAKHIRR,Terima kasih banyak, Kak Patrick dan Kak Andaru, untuk satu semester yang luar biasa.
             Sehat selalu, tetap semangat, dan semoga sukses dalam semua kegiatannya kakak-kakak!</p>
        `;
    }
}

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