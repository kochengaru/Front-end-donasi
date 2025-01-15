// Ambil query string dari URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const index = params.get('index');

// Ambil data donasi berdasarkan kategori dan indeks
const selectedDonasi = donasiData[category][index];

// Tampilkan detail donasi
const detailContainer = document.getElementById('detail-container');
detailContainer.innerHTML = `
  <div class="p-4 bg-white shadow rounded-lg">
    <img src="${selectedDonasi.img}" alt="${selectedDonasi.title}" class="w-full h-60 object-cover rounded-md mb-4">
    <h2 class="text-2xl font-bold">${selectedDonasi.title}</h2>
    <p class="text-gray-600">Target Donasi: ${selectedDonasi.target}</p>
    <p class="text-gray-600">Fundraiser: ${selectedDonasi.Fundraiser}</p>
    <p class="text-gray-600">Progress: ${selectedDonasi.progress}%</p>
    <div class="w-full bg-gray-200 rounded-full h-2 my-2">
      <div class="bg-blue-500 h-2 rounded-full" style="width: ${selectedDonasi.progress}%"></div>
    </div>
  </div>
`;
