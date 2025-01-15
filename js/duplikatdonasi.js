const donasiData = {
    'pendidikan': [
      { title: 'Buku untuk Anak Desa', target: 'Rp 2,000,000', Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 50, link: 'card1.html' },
      { title: 'Beasiswa Pendidikan', target: 'Rp 5,000,000', Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 30, link: 'detail-beasiswa.html' },
      { title: 'Buku untuk Anak Desa', target: 'Rp 2,000,000', Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 50, link: 'profil_fundraiser.html' },
    ],
    'bencana-alam': [
      { title: 'Bantuan Gempa Bumi', target: 'Rp 10,000,000', Fundraiser: 'Haikal', img: 'img/bencana.jpg', progress: 70, link: 'detail-gempa.html' },
      { title: 'Korban Tsunami', target: 'Rp 8,000,000', Fundraiser: 'Haikal', img: 'img/bencana3.webp', progress: 20, link: 'detail-tsunami.html' },
    ],
    'kesehatan': [
      { title: 'Pengobatan Gratis', target: 'Rp 3,000,000', Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 90, link: 'detail-pengobatan.html' },
      { title: 'Bantu Operasi Anak', target: 'Rp 7,000,000', Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 40, link: 'detail-operasi-anak.html' },
    ],
  };

  const createDonasiCard = (data) => {
    return `
      <div class="flex items-center bg-white shadow p-4 rounded-lg">
        <img src="${data.img}" alt="${data.title}" class="w-60 h-40 object-cover rounded-md">
        <div class="ml-4 flex-grow">
          <h3 class="text-lg font-bold">${data.title}</h3>
          <p class="text-gray-600 text-sm">Target Donasi: ${data.target}</p>
          <p class="text-sm text-gray-600">Fundraiser: ${data.Fundraiser}</p>
          <div class="mt-2">
            <p class="text-gray-600 text-sm">Progress: ${data.progress}%</p>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: ${data.progress}%"></div>
            </div>
          </div>
        </div>
        <a href="${data.link}" 
           class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ml-4">
          Lihat Detail
        </a>
      </div>
    `;
  };

  const renderDonasi = (category) => {
    const container = document.getElementById('donasi-container');
    container.innerHTML = ''; // Bersihkan container sebelum render
  
    donasiData[category].forEach((item) => {
      container.innerHTML += createDonasiCard(item);
    });
  };
  
  // Contoh: Render kategori 'pendidikan'
  renderDonasi('pendidikan');

  // Event listener untuk kategori tombol
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = button.getAttribute('data-category');
      renderDonasi(category); // Render daftar donasi berdasarkan kategori
    });
  });
