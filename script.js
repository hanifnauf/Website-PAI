// Menunggu hingga seluruh konten HTML dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function() {

    // Memilih semua elemen yang kita butuhkan
    const figureCards = document.querySelectorAll('.figure-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalName = document.getElementById('modal-name');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');

    // Menambahkan 'event listener' (penunggu klik) ke setiap kartu tokoh
    figureCards.forEach(card => {
        card.addEventListener('click', function() {
            // 1. Mengambil data dari atribut 'data-*' di HTML
            const name = this.getAttribute('data-name');
            const desc = this.getAttribute('data-desc');
            const img = this.getAttribute('data-image');

            // 2. Memasukkan data tersebut ke dalam elemen modal
            modalName.textContent = name;
            modalDescription.textContent = desc;
            modalImage.src = img;
            modalImage.alt = "Gambar " + name;

            // 3. Menampilkan modal (pop-up)
            modalOverlay.style.display = 'flex';
        });
    });

    // Fungsi untuk menutup modal
    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    // Menambahkan event listener ke tombol 'X'
    modalClose.addEventListener('click', closeModal);

    // Menambahkan event listener untuk menutup modal jika mengklik di luar area konten
    modalOverlay.addEventListener('click', function(event) {
        // 'event.target' adalah elemen yang diklik
        // Jika elemen yang diklik adalah 'modal-overlay' (latar belakang), tutup modal
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

});