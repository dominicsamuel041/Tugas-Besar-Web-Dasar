fetch('data/makanan.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('menu-list');
    data.forEach(makanan => {
      let item = document.createElement('div');
      item.innerHTML = `
        <img src="assets/images/${makanan.gambar}" onclick="location.href='detail.html?id=${makanan.id}'" />
        <p>${makanan.nama}</p>
      `;
      container.appendChild(item);
    });
  });