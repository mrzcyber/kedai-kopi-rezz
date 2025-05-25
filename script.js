// ===== BAGIAN MENU HAMBURGER =====

// Mengambil elemen navbar dari HTML dengan class 'navbar-nav'
// querySelector digunakan untuk memilih elemen HTML berdasarkan selector CSS
const navbarNav = document.querySelector('.navbar-nav');

// Menambahkan event click pada tombol hamburger menu
// Ketika tombol hamburger diklik, akan menjalankan fungsi berikut
document.querySelector('#hamburger-menu').onclick = () => {
    // toggle berarti: jika class 'active' sudah ada, hapus class tersebut
    // jika class 'active' belum ada, tambahkan class tersebut
    navbarNav.classList.toggle('active');
};


// ===== BAGIAN MENUTUP MENU SAAT KLIK DI LUAR MENU =====

// Mengambil elemen hamburger menu untuk digunakan dalam pengecekan
const hamburger = document.querySelector('#hamburger-menu');

// Menambahkan event listener untuk mendeteksi klik di seluruh dokumen
document.addEventListener('click', function (e){
    // e.target adalah elemen yang diklik oleh user
    // contains() memeriksa apakah elemen yang diklik berada di dalam elemen hamburger atau navbar
    // Jika user mengklik di luar hamburger menu dan navbar, maka menu akan ditutup
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        // Menghapus class 'active' untuk menutup navbar
        navbarNav.classList.remove('active');
    };
});

