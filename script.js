const products = [
  {
    id: 1,
    name: 'Sepatu Sneakers Hitam',
    price: 265000,
    category: 'sepatu',
    image: 'https://images.unsplash.com/photo-1593032457869-9b9db6f598df?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    description: 'Sneakers ringan, cocok untuk harian dan olahraga ringan.',
    testimonial: 'Ringan dan nyaman banget! Cocok buat kerja dan jalan-jalan.'
  },
  {
    id: 2,
    name: 'Sepatu Running Pria',
    price: 299000,
    category: 'sepatu',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    description: 'Sol empuk, cocok untuk lari atau aktivitas luar ruangan.',
    testimonial: 'Empuk di kaki dan stylish juga. Recommended!'
  },
  {
    id: 3,
    name: 'Sneakers Putih Wanita',
    price: 285000,
    category: 'sepatu',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d7a7?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    description: 'Desain clean dan elegan, cocok dipadukan dengan outfit apa saja.',
    testimonial: 'Warna putihnya bersih, bahan lembut. Pas banget.'
  },
  {
    id: 4,
    name: 'Jam Tangan Analog Kulit',
    price: 175000,
    category: 'jam',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4d6f3e4c7?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    description: 'Jam elegan dengan tali kulit asli.',
    testimonial: 'Kualitas premium, keliatan mahal tapi harga bersahabat.'
  },
  {
    id: 5,
    name: 'Jam Digital Minimalis',
    price: 195000,
    category: 'jam',
    image: 'https://images.unsplash.com/photo-1620288590052-03e0a265262d?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    description: 'Desain simpel dengan fitur digital lengkap.',
    testimonial: 'Pas buat saya yang suka gaya clean dan modern.'
  },
  {
    id: 6,
    name: 'Smartwatch Sporty',
    price: 349000,
    category: 'jam',
    image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    description: 'Dilengkapi fitur fitness dan notifikasi smartphone.',
    testimonial: 'Fitur lengkap, baterai awet, cocok buat olahraga.'
  },
  {
    id: 7,
    name: 'Kaos Polos Oversize',
    price: 85000,
    category: 'kaos',
    image: 'https://images.unsplash.com/photo-1602810318690-4aa8c62df655?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    description: 'Bahan adem, potongan oversize untuk gaya kasual.',
    testimonial: 'Sesuai gambar dan bahannya adem, bakal beli lagi.'
  },
  {
    id: 8,
    name: 'Kaos Graphic Hitam',
    price: 95000,
    category: 'kaos',
    image: 'https://images.unsplash.com/photo-1618354691400-538c57e9c22e?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    description: 'Sablon tahan lama, cocok buat kamu yang suka street style.',
    testimonial: 'Grafisnya keren, tidak luntur setelah dicuci.'
  },
  {
    id: 9,
    name: 'Kaos Lengan Panjang',
    price: 99000,
    category: 'kaos',
    image: 'https://images.unsplash.com/photo-1612441452249-f23b8f1edee6?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    description: 'Pas dipakai di tempat dingin, bahan katun nyaman.',
    testimonial: 'Modelnya simpel tapi keren. Pas untuk nongkrong.'
  },
  {
    id: 10,
    name: 'Jam Fashion Pria',
    price: 210000,
    category: 'jam',
    image: 'https://images.unsplash.com/photo-1589998059171-988d6d1a1c99?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    description: 'Jam formal dengan aksen metalik.',
    testimonial: 'Cocok buat kerja, bikin gaya makin rapi.'
  },
  {
    id: 11,
    name: 'Sepatu Casual Cokelat',
    price: 245000,
    category: 'sepatu',
    image: 'https://images.unsplash.com/photo-1600185365529-3976f353f024?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    description: 'Tampilan kasual, cocok dipadukan dengan celana jeans.',
    testimonial: 'Warnanya cakep dan cocok dipakai ke kantor.'
  },
  {
    id: 12,
    name: 'Kaos Polo Premium',
    price: 115000,
    category: 'kaos',
    image: 'https://images.unsplash.com/photo-1582738413806-d84b3a95ef44?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    description: 'Kaos polo berkualitas, cocok untuk semi-formal.',
    testimonial: 'Jahitan rapi dan bahan tebal. Worth it banget.'
  }
];

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

const cart = [];
const cartCount = document.getElementById('cartCount');
const cartIcon = document.getElementById('cartIcon');
const cartPreview = document.getElementById('cartPreview');
const cartItemsContainer = document.getElementById('cartItems');
const closeCartBtn = document.getElementById('closeCart');

function renderProducts(data) {
  productList.innerHTML = '';

  if (data.length === 0) {
    productList.innerHTML = `<p>Tidak ada produk yang ditemukan.</p>`;
    return;
  }

  data.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('data-id', product.id);

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
        <p class="product-rating">⭐ ${product.rating}</p>
        <button class="buy-button add-to-cart" data-id="${product.id}">+ Keranjang</button>
      </div>
    `;

    productList.appendChild(productCard);
  });
}

function filterProducts() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter(p => {
    const matchKeyword = p.name.toLowerCase().includes(keyword);
    const matchCategory = category === 'all' || p.category === category;
    return matchKeyword && matchCategory;
  });

  renderProducts(filtered);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
renderProducts(products);

// Modal Produk
document.addEventListener('click', function (e) {
  const card = e.target.closest('.product-card');
  if (card && card.hasAttribute('data-id') && !e.target.classList.contains('add-to-cart')) {
    const id = parseInt(card.getAttribute('data-id'));
    const product = products.find(p => p.id === id);

    if (product) {
      document.getElementById('modalImage').src = product.image;
      document.getElementById('modalTitle').textContent = product.name;
      document.getElementById('modalPrice').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
      document.getElementById('modalDescription').textContent = product.description;
      document.getElementById('modalTestimonial').textContent = `💬 ${product.testimonial}`;
      document.getElementById('modalBuyBtn').href = `https://wa.me/6281213643152?text=Halo,%20saya%20ingin%20membeli%20${encodeURIComponent(product.name)}.`;

      document.getElementById('productModal').style.display = 'flex';
    }
  }
});

const modalCloseBtn = document.getElementById('modalClose');
const modalOverlay = document.getElementById('productModal');

if (modalCloseBtn && modalOverlay) {
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });
}

// === CART ===
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === id);

    if (product) {
      cart.push(product);
      updateCartUI();
      showToast(); // ✅ Notifikasi setelah tambah keranjang
    }
  }
});

cartIcon.addEventListener('click', () => {
  cartPreview.style.display = cartPreview.style.display === 'flex' ? 'none' : 'flex';
});

closeCartBtn.addEventListener('click', () => {
  cartPreview.style.display = 'none';
});

function updateCartUI() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Belum ada produk di keranjang.</p>';
    return;
  }

  cartItemsContainer.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('cart-item');

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-thumb" />
      <div class="cart-details">
        <span class="cart-name">${item.name}</span>
        <span class="cart-price">Rp ${item.price.toLocaleString('id-ID')}</span>
      </div>
      <button data-index="${index}" class="remove-item">Hapus</button>
    `;

    cartItemsContainer.appendChild(div);
  });
}

cartItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-item')) {
    const index = parseInt(e.target.getAttribute('data-index'));
    cart.splice(index, 1);
    updateCartUI();
  }
});

// 🔔 Toast Notifikasi
function showToast(message = 'Produk berhasil ditambahkan ke keranjang') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Tutup cart preview jika klik di luar area
document.addEventListener('click', (e) => {
  const isCartClick = e.target.closest('#cartPreview') || e.target.closest('#cartIcon');
  if (!isCartClick) {
    cartPreview.style.display = 'none';
  }
});
