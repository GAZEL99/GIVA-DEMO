// produk.js - Data semua produk untuk halaman product.html (DIPERBAIKI & DISINKRONKAN)
const semuaProduk = {
  // 🔥 STREAMING
  "Netflix": {
    name: "NETFLIX",
    description: "Layanan streaming film dan series terpopuler",
    bannerImage: "../image/netflix.png",
    logo: "../image/netflix.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Netflix Sharing 1P2U",
        price: 25000,
        duration: "1 BULAN"
      },
      {
        name: "Netflix Sharing 1P1U",
        price: 30000,
        duration: "1 BULAN"
      },
      {
        name: "Netflix Semi Private (2 Device)",
        price: 35000,
        duration: "1 BULAN"
      }
    ]
  },

  "Disney+": {
    name: "DISNEY+",
    description: "Disney, Marvel, Star Wars dalam satu platform",
    bannerImage: "../image/disneyplus.png",
    logo: "../image/disneyplus.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "DISNEY+ Sharing 3 user",
        price: 23000,
        duration: "1 BULAN"
      },
      {
        name: "DISNEY+ Sharing 6 user",
        price: 30000,
        duration: "1 BULAN"
      }
    ]
  },

  "Youtube": {
    name: "YOUTUBE",
    description: "YouTube Premium tanpa iklan",
    bannerImage: "../image/youtube.png",
    logo: "../image/youtube.png",
    category: "Streaming",
    inputFields: [
      {
        type: "email",
        name: "email",
        label: "Email YouTube",
        placeholder: "Masukkan email YouTube Anda",
        required: true,
        hint: "Email yang terdaftar di YouTube"
      }
    ],
    packages: [
      {
        name: "YOUTUBE Famplan (bisa login yt music)",
        price: 7500,
        duration: "1 BULAN"
      },
      {
        name: "YOUTUBE Famplan (bisa login yt music)",
        price: 13500,
        duration: "2 BULAN"
      }
    ]
  },

  "Amazon Prime": {
    name: "AMAZON PRIME",
    description: "Amazon Prime Video dengan konten eksklusif",
    bannerImage: "../image/prime-video.png",
    logo: "../image/prime-video.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Prime Shared 1 Bulan",
        price: 10000,
        duration: "1 BULAN"
      },
      {
        name: "Prime Private 1 Bulan",
        price: 15000,
        duration: "1 BULAN"
      }
    ]
  },

  "Iqiyi": {
    name: "IQIYI",
    description: "Streaming drama dan film Asia",
    bannerImage: "../image/iqiyi.png",
    logo: "../image/iqiyi.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "IQIYI Standard 1 Bulan",
        price: 8800,
        duration: "1 BULAN"
      },
      {
        name: "IQIYI Premium 1 Bulan",
        price: 11800,
        duration: "1 BULAN"
      },
      {
        name: "IQIYI Antilimit Premium 1 Bulan",
        price: 17600,
        duration: "1 BULAN"
      },
      {
        name: "IQIYI Premium 1 Tahun",
        price: 18000,
        duration: "1 TAHUN"
      }
    ]
  },

  "Dramabox": {
    name: "DRAMABOX",
    description: "Platform streaming khusus drama",
    bannerImage: "../image/dramabox.png",
    logo: "../image/dramabox.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "DRAMABOX Sharing 1 Bulan",
        price: 10800,
        duration: "1 BULAN"
      }
    ]
  },

  "Loklok": {
    name: "LOKLOK",
    description: "Streaming film pendek dan konten viral",
    bannerImage: "../image/loklok.png",
    logo: "../image/loklok.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "LOKLOK Sharing Basic Premium 1 Month (GaBisa TV)",
        price: 20000,
        duration: "1 BULAN"
      },
      {
        name: "LOKLOK Sharing Basic 1 Month (3 User)",
        price: 21000,
        duration: "1 BULAN"
      },
      {
        name: "LOKLOK Sharing Standar 1 Month (Bisa TV)",
        price: 23500,
        duration: "1 BULAN"
      }
    ]
  },

  "Viu": {
    name: "VIU",
    description: "Streaming drama Korea dan Asia",
    bannerImage: "../image/viu.png",
    logo: "../image/viu.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "VIU Anti Limit 1 Tahun",
        price: 5500,
        duration: "1 TAHUN"
      },
      {
        name: "VIU Anti Limit 1 Bulan",
        price: 10000,
        duration: "1 BULAN"
      },
      {
        name: "VIU Anti Limit Lifetime",
        price: 5800,
        duration: "LIFETIME"
      }
    ]
  },

  "Wetv": {
    name: "WETV",
    description: "Tencent Video international",
    bannerImage: "../image/wetv.png",
    logo: "../image/wetv.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "WETV Premium Shared",
        price: 16000,
        duration: "1 BULAN"
      },
      {
        name: "WETV Premium Private",
        price: 33000,
        duration: "1 BULAN"
      }
    ]
  },

  "Bstation": {
    name: "BSTATION",
    description: "Platform streaming anime dan manga",
    bannerImage: "../image/bstation.png",
    logo: "../image/bstation.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "BsTation Premium 1 Bulan [ AKUN - SHARED - 1 DEVICES ]",
        price: 6000,
        duration: "1 BULAN"
      },
      {
        name: "BsTation Premium 3 Bulan [ AKUN - SHARED - 1 DEVICES ]",
        price: 13000,
        duration: "3 BULAN"
      },
      {
        name: "BsTation Premium 1 Tahun [ AKUN - SHARED - 1 DEVICES ]",
        price: 15000,
        duration: "12 BULAN (1 TAHUN)"
      },
      {
        name: "BsTation Premium 1 Bulan [ AKUN - PRIVATE ]",
        price: 23000,
        duration: "1 BULAN"
      },
      {
        name: "BsTation Premium 2 Bulan [ AKUN - PRIVATE ]",
        price: 38000,
        duration: "2 BULAN"
      }
    ]
  },

  "Youkou": {
    name: "YOUKOU",
    description: "Youku dengan konten China terbaru",
    bannerImage: "../image/youkou.png",
    logo: "../image/youkou.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "YOUKOU Sharing",
        price: 10000,
        duration: "1 BULAN"
      }
    ]
  },

  "Crunchyroll": {
    name: "CRUNCHYROLL",
    description: "Streaming anime terbesar dengan koleksi terlengkap",
    bannerImage: "../image/crunchyroll.png",
    logo: "../image/crunchyroll.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Crunchyroll Sharing 1 Bulan",
        price: 13500,
        duration: "1 BULAN"
      }
    ]
  },

  // 🔥 MUSIK
  "Apple Music": {
    name: "APPLE MUSIC",
    description: "Apple Music dengan jutaan lagu",
    bannerImage: "../image/applemusic.png",
    logo: "../image/applemusic.png",
    category: "Musik",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Apple Music Famplan 1 Bulan",
        price: 8000,
        duration: "1 BULAN"
      }
    ]
  },

  // 🔥 EDITING
  "Canva": {
    name: "CANVA",
    description: "Canva Pro untuk desain grafis dengan semua elemen premium",
    bannerImage: "../image/canva.png",
    logo: "../image/canva.png",
    category: "Editing",
    inputFields: [
      {
        type: "email",
        name: "email",
        label: "Email Canva",
        placeholder: "Masukkan email Canva Anda",
        required: true,
        hint: "Email yang terdaftar di Canva"
      }
    ],
    packages: [
      {
        name: "Canva 1 Bulan Member + Desain",
        price: 2000,
        duration: "1 BULAN"
      },
      {
        name: "Canva 1 Bulan Admin",
        price: 7500,
        duration: "1 BULAN"
      },
      {
        name: "Canva Owner 1 Bulan",
        price: 8500,
        duration: "1 BULAN"
      },
      {
        name: "Canva 1 Tahun Member + Desain",
        price: 10500,
        duration: "1 TAHUN"
      },
      {
        name: "Canva Lifetime",
        price: 15000,
        duration: "LIFETIME"
      }
    ]
  },

  "Capcut": {
    name: "CAPCUT",
    description: "Capcut Pro untuk editing video tanpa watermark",
    bannerImage: "../image/capcut.png",
    logo: "../image/capcut.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Capcut private",
        price: 5000,
        duration: "7 Hari"
      },
      {
        name: "Capcut private",
        price: 17000,
        duration: " 1 Bulan"
  
      }
    ]
  },

  "Meitu": {
    name: "MEITU",
    description: "Meitu untuk editing foto profesional",
    bannerImage: "../image/meitu.png",
    logo: "../image/meitu.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "MEITU PRIVATE 7 Days",
        price: 2700,
        duration: "7 HARI"
      },
      {
        name: "MEITU PRIVATE 1 Bulan (Renew)",
        price: 5400,
        duration: "1 BULAN"
      }
    ]
  },

  "Picsart": {
    name: "PICSART",
    description: "Picsart Gold untuk editing lengkap",
    bannerImage: "../image/picsart.png",
    logo: "../image/picsart.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "PicsArt Sharing 1 Bulan",
        price: 4500,
        duration: "1 BULAN"
      }
    ]
  },

  "Alight Motion": {
    name: "ALIGHT MOTION",
    description: "Alight Motion untuk editing video profesional",
    bannerImage: "../image/alight-motion.png",
    logo: "../image/alight-motion.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Alight Motion Premium Private",
        price: 5500,
        duration: "Akun dari kami"
      }
    ]
  },

  // 🔥 AI
  "ChatGPT": {
    name: "CHATGPT",
    description: "ChatGPT dengan akses premium untuk kebutuhan AI",
    bannerImage: "../image/chatgpt.png",
    logo: "../image/chatgpt.png",
    category: "AI",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "ChatGPT 3 Hari Garansi",
        price: 20000,
        duration: "1 BULAN"
      }
    ]
  },

  // 🔥 LAINNYA - DUOLINGO
  "Duolingo": {
    name: "DUOLINGO",
    description: "Platform pembelajaran bahasa dengan metode interaktif",
    bannerImage: "../image/duolingo.png",
    logo: "../image/duolingo.png",
    category: "Lainnya",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Duolingo Sharing 1 Bulan",
        price: 10800,
        duration: "1 BULAN"
      },
      {
        name: "Duolingo Private 1 Bulan",
        price: 19200,
        duration: "1 BULAN"
      }
    ]
  }
};

// Fungsi untuk mendapatkan data produk berdasarkan nama
function getProductData(productName) {
  console.log('Mencari produk:', productName);
  
  // Normalize product name
  const normalizedInput = productName.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Cek apakah produk ada langsung
  if (semuaProduk[productName]) {
    console.log('✅ Produk ditemukan langsung:', productName);
    return semuaProduk[productName];
  }
  
  // Cari dengan matching yang lebih baik
  for (const key in semuaProduk) {
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    const productNameNormalized = semuaProduk[key].name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (normalizedKey.includes(normalizedInput) || 
        productNameNormalized.includes(normalizedInput) ||
        normalizedInput.includes(normalizedKey)) {
      console.log('✅ Product match found:', key, 'for input:', productName);
      return semuaProduk[key];
    }
  }
  
  // Coba cari dengan matching partial tanpa normalisasi
  for (const key in semuaProduk) {
    if (key.toLowerCase().includes(productName.toLowerCase()) || 
        semuaProduk[key].name.toLowerCase().includes(productName.toLowerCase())) {
      console.log('✅ Product partial match found:', key, 'for input:', productName);
      return semuaProduk[key];
    }
  }
  
  // Default fallback dengan data lengkap
  console.warn('❌ Produk tidak ditemukan:', productName, ', menggunakan default');
  return {
    name: productName || "Produk",
    description: "Produk tidak ditemukan",
    bannerImage: "https://via.placeholder.com/1200x300/1E40AF/FFFFFF?text=PRODUK",
    logo: "https://via.placeholder.com/150/1E40AF/FFFFFF?text=LOGO",
    category: "Other",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Paket 1 Bulan",
        price: 10000,
        duration: "1 BULAN"
      }
    ]
  };
}

// Fungsi untuk mendapatkan semua produk berdasarkan kategori
function getProductsByCategory(category) {
  const products = [];
  for (const key in semuaProduk) {
    if (semuaProduk[key].category === category) {
      products.push(semuaProduk[key]);
    }
  }
  return products;
}

// Fungsi untuk mendapatkan produk populer
function getPopularProducts() {
  const popularProducts = [
    semuaProduk["Netflix"],
    semuaProduk["Canva"],
    semuaProduk["Alight Motion"],
    semuaProduk["Youtube"],
    semuaProduk["ChatGPT"],
    semuaProduk["Duolingo"]
  ];
  return popularProducts.filter(Boolean); // Filter null/undefined
}

// Fungsi untuk mendapatkan semua produk dengan format sederhana
function getAllProductsSimple() {
  const products = [];
  for (const key in semuaProduk) {
    const product = semuaProduk[key];
    products.push({
      id: key,
      name: product.name,
      category: product.category,
      description: product.description,
      logo: product.logo,
      bannerImage: product.bannerImage
    });
  }
  return products;
}

// Debug function
function debugProducts() {
  console.log("=== DEBUG PRODUK.JS (DIPERBAIKI) ===");
  console.log("Total produk:", Object.keys(semuaProduk).length);
  console.log("Daftar produk:", Object.keys(semuaProduk));
  console.log("Kategori tersedia:", [...new Set(Object.values(semuaProduk).map(p => p.category))]);
  
  // Cek produk yang memiliki gambar bermasalah
  const productsWithIssues = [];
  for (const key in semuaProduk) {
    const product = semuaProduk[key];
    if (!product.bannerImage || !product.logo) {
      productsWithIssues.push(key);
    }
  }
  
  if (productsWithIssues.length > 0) {
    console.warn("Produk dengan gambar bermasalah:", productsWithIssues);
  } else {
    console.log("✅ Semua gambar produk OK");
  }
  
  console.log("====================================");
}

// Panggil debug saat file dimuat
debugProducts();
console.log("✅ produk.js DIPERBAIKI loaded");
console.log("❌ Vidio DIHAPUS dari database");
console.log("❌ Oldroll DIHAPUS dari database");
console.log("❌ Ibis Paint X DIHAPUS dari database");
console.log("❌ Dazzcam DIHAPUS dari database");
console.log("✅ Semua harga disinkronkan dengan products-data.js");
console.log("✅ Deskripsi produk dilengkapi");
