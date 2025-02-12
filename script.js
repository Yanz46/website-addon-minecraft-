// Data addon (contoh)
const addons = [
    {
        image: "addon1.jpg",
        title: "ACTIONS AND STUFF",
        description: "ACTIONS AND STUFF adalah animasi minecraft keren dan sangat bagus",
        link: "https://sub4unlock.co/GW7vS23z"
    },
    {
        image: "addon2.jpg",
        title: "TNT++",
        description: "TNT++ adalah addon paling bagus menurut saya karena addon ini sangatlah berguna bagi saya yang suka menghancurkan dunia",
        link: "https://sfl.gl/eDlXx1q"
    },
     {
        image: "addon3.jpg",
        title: "backblings+ ",
        description: "  addon ini sangatlah keren ",
        link: " https://sfl.gl/TGmN "
    },
    {
        image: "addon4.jpg",
        title: "block blasters ",
        description: " addon ini bagus  ",
        link: " https://sfl.gl/QMKiJO6 "
    },
    // ... tambahkan data addon lainnya
];

// Fungsi untuk menampilkan daftar addon
function displayAddons(addons, containerId) {
    const container = document.getElementById(containerId);
    addons.forEach(addon => {
        const addonItem = document.createElement("div");
        addonItem.classList.add("addon-item");
        addonItem.innerHTML = `
            <img src="${addon.image}" alt="${addon.title}">
            <h3>${addon.title}</h3>
            <p>${addon.description}</p>
            <a href="${addon.link}">Unduh</a>
        `;
        container.appendChild(addonItem);
    });
}

// Panggil fungsi untuk menampilkan addon saat halaman dimuat
window.onload = () => {
    displayAddons(addons, "featured-addons");
    displayAddons(addons, "all-addons");
};
const filterKategori = document.getElementById("kategori");

filterKategori.addEventListener("change", () => {
    const kategoriTerpilih = filterKategori.value;
    const addonsTerfilter = kategoriTerpilih === "" ? addons : addons.filter(addon => addon.kategori === kategoriTerpilih);
    displayAddons(addonsTerfilter, "all-addons");
});
