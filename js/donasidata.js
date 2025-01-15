// Data kategori donasi
const donasiData = {
  'pendidikan': [
    { title: 'Buku untuk Anak Desa', target: 'Rp 2,000,000', Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 50 },
    { title: 'Beasiswa Pendidikan', target: 'Rp 5,000,000',  Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 30 },
    { title: 'Beasiswa Pendidikan', target: 'Rp 5,000,000',  Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 30 },
    { title: 'Beasiswa Pendidikan', target: 'Rp 5,000,000',  Fundraiser: 'Haikal', img: 'img/pendidikan.jpeg', progress: 30 },
  ],
  'bencana-alam': [
    { title: 'Bantuan Gempa Bumi', target: 'Rp 10,000,000', Fundraiser: 'Haikal', img: 'img/bencana.jpg', progress: 70 },
    { title: 'Korban Tsunami', target: 'Rp 8,000,000',   Fundraiser: 'Haikal', img: 'img/bencana3.webp', progress: 20 },
    { title: 'Tanah Longsor', target: 'Rp 8,000,000',   Fundraiser: 'Haikal', img: 'img/bencana3.webp', progress: 60 },
    { title: 'Korban Kebakaran', target: 'Rp 8,000,000',   Fundraiser: 'Haikal', img: 'img/bencana3.webp', progress: 40 },
    { title: 'Korban Tsunami', target: 'Rp 8,000,000',   Fundraiser: 'Haikal', img: 'img/bencana3.webp', progress: 10 },
    { title: 'Korban Tsunami', target: 'Rp 8,000,000',   Fundraiser: 'Haikal', img: 'img/bencana3.webp', progress: 80 },
  ],
  'kesehatan': [
    { title: 'Pengobatan Gratis', target: 'Rp 3,000,000',   Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 90 },
    { title: 'Bantu Operasi Anak', target: 'Rp 7,000,000',   Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 40 },
    { title: 'Bantu Operasi Anak', target: 'Rp 7,000,000',   Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 40 },
    { title: 'Bantu Operasi Anak', target: 'Rp 7,000,000',   Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 40 },
    { title: 'Bantu Operasi Anak', target: 'Rp 7,000,000',   Fundraiser: 'Haikal', img: 'img/sehat.jpg', progress: 40 },
  ]
};


// ambil elemen
const donasiContainer = document.getElementById('donasi-list');
const categoryButtons = document.querySelectorAll('.category-btn');

// Fungsi untuk membuat elemen donasi
const createDonasiCard = (data, category, index) => {
  return `
    <div class="flex items-center bg-white shadow p-4 rounded-lg">
      <img src="${data.img}" alt="${data.title}" class="w-60 h-40 object-cover rounded-md">
      <div class="ml-4 flex-grow">
        <h3 class="text-lg font-bold">${data.title}</h3>
        <p class="text-gray-600 text-sm">Target Donasi: ${data.target}</p>
        <p class="text-sm text-gray-600">Fundraiser: ${data.Fundraiser}</p>
        <!-- Persentase Progres -->
        <div class="mt-2">
          <p class="text-gray-600 text-sm">Progress: ${data.progress}%</p>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-blue-500 h-2 rounded-full" style="width: ${data.progress}%"></div>
          </div>
        </div>
      </div>
      <button 
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ml-4" 
          onclick="showDetail('${category}', ${index})">
          Lihat Detail
        </button>
    </div>
  `;
};

// Fungsi untuk merender data donasi
const renderDonasi = (category) => {
  const donasiList = donasiData[category] || [];
  donasiContainer.innerHTML = donasiList
    .map((data, index) => createDonasiCard(data, category, index))
    .join('');
};

// Tambahkan event listener ke tombol kategori
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    renderDonasi(category);
  });
});

// Render kategori default (pendidikan)
renderDonasi('pendidikan');