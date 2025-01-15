// Fungsi untuk mengaktifkan animasi zoom-in satu per satu
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-index]");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove("scale-75", "opacity-0");
        card.classList.add("scale-100", "opacity-100");
      }, index * 200); // Tambah delay untuk setiap elemen
    });
  });