const renderdonasi = (category) => {
    const donasiList = donasiData[category] || [];
    donasiContainer.innerHTML = donasiList
      .map(
        (data, index) => `
        <div class="donasi-card flex items-center bg-white shadow p-4 rounded-lg" style="transition-delay: ${index * 100}ms;">
          <img src="${data.img}" alt="${data.title}" class="w-60 h-40 object-cover rounded-md">
          <div class="ml-4 flex-grow">
            <h3 class="text-lg font-bold">${data.title}</h3>
            <p class="text-gray-600 text-sm">Target Donasi: ${data.target}</p>
            <!-- Persentase Progres -->
            <div class="mt-2">
              <p class="text-gray-600 text-sm">Progress: ${data.progress}%</p>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: ${data.progress}%"></div>
              </div>
            </div>
          </div>
        </div>
      `
      )
      .join('');
  
    // Tambahkan animasi satu per satu
    const donasiCards = document.querySelectorAll('.donasi-card');
    donasiCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 100); // Delay setiap kartu sebesar 100ms
    });
  };
  