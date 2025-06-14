document.addEventListener('DOMContentLoaded', () => {
    const originalLinkInput = document.getElementById('originalLink');
    const convertButton = document.getElementById('convertButton');
    const convertedLinkInput = document.getElementById('convertedLink');
    const copyButton = document.getElementById('copyButton');
    const whatsappShareButton = document.getElementById('whatsappShareButton');
    const errorMessage = document.getElementById('errorMessage');

    // Sembunyikan tombol WhatsApp dan input link terkonversi di awal
    convertedLinkInput.style.display = 'none';
    copyButton.style.display = 'none';
    whatsappShareButton.style.display = 'none';
    document.querySelector('.result-box label[for="convertedLink"]').style.display = 'none';

    convertButton.addEventListener('click', () => {
        const originalUrl = originalLinkInput.value.trim();
        errorMessage.textContent = ''; // Clear previous error message
        convertedLinkInput.value = ''; // Clear previous converted link

        // Sembunyikan kembali elemen jika ada error atau belum ada hasil
        convertedLinkInput.style.display = 'none';
        copyButton.style.display = 'none';
        whatsappShareButton.style.display = 'none';
        document.querySelector('.result-box label[for="convertedLink"]').style.display = 'none';


        // Regex untuk mengekstrak ID dari URL Minecraft
        const regex = /\/marketplace\/pdp\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i;
        const match = originalUrl.match(regex);

        if (match && match[1]) {
            const id = match[1];
            const baseUrl = "https://www.minecraft.net/en-us/marketplace/pdp?id=";
            const newUrl = baseUrl + id;
            convertedLinkInput.value = newUrl;

            // Tampilkan kembali elemen setelah berhasil diubah
            convertedLinkInput.style.display = 'block';
            copyButton.style.display = 'inline-block';
            whatsappShareButton.style.display = 'inline-block';
            document.querySelector('.result-box label[for="convertedLink"]').style.display = 'block';

        } else {
            errorMessage.textContent = 'Format link tidak valid. Pastikan link adalah link Minecraft Marketplace yang benar.';
        }
    });

    copyButton.addEventListener('click', () => {
        if (convertedLinkInput.value) {
            convertedLinkInput.select();
            convertedLinkInput.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            alert('Link berhasil disalin!');
        } else {
            errorMessage.textContent = 'Tidak ada link untuk disalin. Ubah link terlebih dahulu.';
        }
    });

    // Logika untuk tombol Kirim ke WhatsApp
    whatsappShareButton.addEventListener('click', () => {
        const convertedLink = convertedLinkInput.value;
        if (convertedLink) {
            // Teks pesan yang akan dikirim
            const message = encodeURIComponent("Halo, ini link Minecraft yang sudah diubah:\n" + convertedLink);
            
            // Nomor WhatsApp Anda (pastikan format internasional tanpa + atau 00 di depan)
            // +62 858-8053-6319 menjadi 6285880536319
            const phoneNumber = "6285880536319"; // Nomor Anda dari gambar profil
            
            // Menggunakan wa.me untuk berbagi link dan teks ke nomor tertentu
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            
            // Membuka jendela WhatsApp
            window.open(whatsappUrl, '_blank');
        } else {
            errorMessage.textContent = 'Tidak ada link untuk dikirim. Ubah link terlebih dahulu.';
        }
    });
});
