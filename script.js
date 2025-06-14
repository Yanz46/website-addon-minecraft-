document.addEventListener('DOMContentLoaded', () => {
    const originalLinkInput = document.getElementById('originalLink');
    const convertButton = document.getElementById('convertButton');
    const convertedLinkInput = document.getElementById('convertedLink');
    const copyButton = document.getElementById('copyButton');
    const errorMessage = document.getElementById('errorMessage');

    convertButton.addEventListener('click', () => {
        const originalUrl = originalLinkInput.value.trim();
        errorMessage.textContent = ''; // Clear previous error message
        convertedLinkInput.value = ''; // Clear previous converted link

        // Regex untuk mengekstrak ID dari URL Minecraft
        // Pola: '/[a-zA-Z0-9-]+/[a-zA-Z0-9-]+/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})'
        // Ini mencari pola `/nama-folder/nama-sub-folder/ID_GUID`
        const regex = /\/marketplace\/pdp\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i;
        const match = originalUrl.match(regex);

        if (match && match[1]) {
            const id = match[1];
            const baseUrl = "https://www.minecraft.net/en-us/marketplace/pdp?id=";
            const newUrl = baseUrl + id;
            convertedLinkInput.value = newUrl;
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
});
