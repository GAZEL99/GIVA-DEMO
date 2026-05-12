// produk.js - Data semua produk untuk halaman product.html
const semuaProduk = {
  // 🔥 STREAMING
  "Netflix": {
    name: "NETFLIX",
    description: "",
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
        name: "Netflix Sharing 1P1U",
        price: 30000,
        duration: "1 BULAN"
      },
      {
        name: "Netflix Sharing 1P2U",
        price: 25000,
        duration: "1 BULAN"
      },
      {
        name: "Netflix Semi Private (2 Device)",
        price: 35000,
        duration: "1 BULAN"
      }
    ]
  },

  "Vidio": {
    name: "VIDIO",
    description: "",
    bannerImage: "../image/vidio.png",
    logo: "../image/vidio.png",
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
        name: "Vidio Sharing 1 Month Mobile Only",
        price: 15500,
        duration: "1 BULAN"
      },
      {
        name: "Vidio Sharing 1 Month All Device",
        price: 20000,
        duration: "1 BULAN"
      },
      {
        name: "Vidio Private 1 Month Mobile Only",
        price: 25000,
        duration: "1 BULAN"
      },
      {
        name: "Vidio Private 1 Month All Device",
        price: 39500,
        duration: "1 BULAN"
      },
      {
        name: "Vidio Private 1 Year Only TV (Garansi 6 Bulan)",
        price: 5700,
        duration: "1 TAHUN"
      }
    ]
  },

  "Disney+": {
    name: "DISNEY+",
    description: "",
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
      },
    ]
  },

  "Youtube": {
    name: "YOUTUBE",
    description: "",
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
        price: 9500,
        duration: "1 BULAN"
      },
      {
        name: "YOUTUBE Famplan (bisa login yt music)",
        price: 18500,
        duration: "2 BULAN"
      }
    ]
  },

  "Amazon Prime": {
    name: "AMAZON PRIME",
    description: "",
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
    description: "",
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
        name: "IQIYI Premium 1 Bulan",
        price: 11800,
        duration: "1 BULAN"
      },
      {
        name: "IQIYI Standard 1 Bulan",
        price: 8800,
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
    description: "",
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
    description: "",
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
        name: "LOKLOK Sharing Standar 1 Month (Bisa TV)",
        price: 23500,
        duration: "1 BULAN"
      },
      {
        name: "LOKLOK Sharing Basic 1 Month (3 User)",
        price: 21000,
        duration: "1 BULAN"
      },
      {
        name: "LOKLOK Sharing Basic Premium 1 Month (GaBisa TV)",
        price: 20000,
        duration: "1 BULAN"
      }
    ]
  },

  "Viu": {
    name: "VIU",
    description: "",
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
        name: "VIU Anti Limit 1 Bulan",
        price: 3000,
        duration: "1 BULAN"
      },
      {
        name: "VIU Anti Limit 1 Tahun",
        price: 2500,
        duration: "1 TAHUN"
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
    description: "",
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
    description: "",
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
        name: "BsTation Premium 3 Bulan [ AKUN - SHARED - 1 DEVICES ]",
        price: 13000,
        duration: "3 BULAN"
      },
      {
        name: "BsTation Premium 1 Bulan [ AKUN - SHARED - 1 DEVICES ]",
        price: 6000,
        duration: "1 BULAN"
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
      },
      {
        name: "BsTation Premium 1 Tahun [ AKUN - SHARED - 1 DEVICES ]",
        price: 15000,
        duration: "12 BULAN (1 TAHUN)"
      }
    ]
  },

  "Youkou": {
    name: "YOUKOU",
    description: "",
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
      },
    ]
  },

  // 🔥 MUSIK
  "Apple Music": {
    name: "APPLE MUSIC",
    description: "",
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
        name: "Canva 1 Tahun Member + Desain",
        price: 10500,
        duration: "1 TAHUN"
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
        name: "CapCut Private 7 Hari",
        price: 3500,
        duration: "7 HARI"
      },
      {
        name: "CapCut Private 14 Hari",
        price: 4500,
        duration: "14 HARI"
      },
      
      {
        name: "CapCut Private 28 Hari",
        price: 8800,
        duration: "28 HARI"
      },
      {
        name: "CapCut Private 35 Hari",
        price: 11500,
        duration: "35 HARI"
      },
      {
        name: "CapCut Private 42 Hari",
        price: 14800,
        duration: "42 HARI"
      }
    ]
  },

  "Meitu": {
    name: "MEITU",
    description: "",
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
    description: "",
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

  "Oldroll": {
    name: "OLDROLL",
    description: "",
    bannerImage: "../image/oldroll.png",
    logo: "../image/oldroll.png",
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
        name: "OldRoll Lifetime",
        price: 13000,
        duration: "LIFETIME"
      }
    ]
  },

  "Ibis Paint X": {
    name: "IBIS PAINT X",
    description: "",
    bannerImage: "../image/ibispaint.png",
    logo: "../image/ibispaint.png",
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
        name: "IBIS PAINT X Sharing",
        price: 20000,
        duration: "1 TAHUN"
      }
    ]
  },

  "Alight Motion": {
    name: "Alight MOTION",
    description: "",
    bannerImage: "../image/Alight-motion.png",
    logo: "../image/Alight-motion.png",
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

  "Dazzcam": {
    name: "DAZZCAM",
    description: "Dazzcam untuk editing foto dengan efek vintage",
    bannerImage: "../image/dazzcam.png",
    logo: "../image/dazzcam.png",
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
        name: "Dazzcam Lifetime",
        price: 25000,
        duration: "Ios Only"
      }
    ]
  },

  // 🔥 STREAMING BARU
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
        name: "ChatGPT 3 Hari Garansi ",
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
    description: "",
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
    semuaProduk["Vidio"],
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
  console.log("=== DEBUG PRODUK.JS ===");
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
  }
  
  console.log("========================");
}

// Panggil debug saat file dimuat
debugProducts();
console.log("produk.js FULL UPDATED loaded");
console.log("✅ Spotify dihapus dari database");
console.log("✅ HBO (Hbo Go Max) dihapus dari database");
console.log("✅ Produk baru ditambahkan: Duolingo (Kategori: Lainnya)");
console.log("✅ Paket Vidio diperbarui dengan harga baru");
console.log("✅ Paket Dramabox diperbarui: 1B Sharing: 10.800");
console.log("✅ Paket Iqiyi diperbarui dengan 4 paket baru");
console.log("✅ Paket Loklok diperbarui dengan 3 paket baru");
console.log("✅ Paket Meitu diperbarui: 7d priv: 2.700, 1B: 5.400");
console.log("✅ Paket Viu diperbarui: 1th: 2.500, Lifetime: 5.800");
