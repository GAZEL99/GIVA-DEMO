// products-data.js - Data produk untuk halaman utama (DIPERBAIKI & DISINKRONKAN)
window.productData = {
  categories: [
    { id: 0, name: "Semua Produk" },
    { id: 1, name: "Streaming" },
    { id: 2, name: "Musik" },
    { id: 3, name: "Editing" },
    { id: 4, name: "AI" },
    { id: 5, name: "Lainnya" }
  ],
  
  products: [
    // 🔥 STREAMING
    {
      id: 1,
      name: "Netflix Premium",
      category: "Streaming",
      price: 25000,
      originalPrice: 49000,
      image: "../image/netflix.png",
      discount: 49,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Netflix",
      description: "Layanan streaming film dan series terpopuler",
      features: ["Aktif Instan", "Garansi 30 Hari", "Support 24/7"],
      stock: 100,
      sold: 2500
    },
    
    {
      id: 3,
      name: "Disney+",
      category: "Streaming",
      price: 23000,
      originalPrice: 55000,
      image: "../image/disneyplus.png",
      discount: 58,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Disney%2B",
      description: "Disney, Marvel, Star Wars dalam satu platform",
      features: ["3 User Sharing", "All Content", "Garansi 30 Hari"],
      stock: 60,
      sold: 1200
    },
    {
      id: 4,
      name: "YouTube Premium",
      category: "Streaming",
      price: 7500,
      originalPrice: 9500,
      image: "../image/youtube.png",
      discount: 87,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Youtube",
      description: "YouTube Premium tanpa iklan",
      features: ["No Ads", "Background Play", "YouTube Music"],
      stock: 200,
      sold: 3500
    },
    {
      id: 5,
      name: "Amazon Prime Video",
      category: "Streaming",
      price: 10000,
      originalPrice: 12000,
      image: "../image/prime-video.png",
      discount: 17,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Amazon%20Prime",
      description: "Amazon Prime Video dengan konten eksklusif",
      features: ["Shared Account", "Original Content", "Garansi 30 Hari"],
      stock: 45,
      sold: 800
    },
    {
      id: 6,
      name: "iQIYI Premium",
      category: "Streaming",
      price: 8800,
      originalPrice: 25000,
      image: "../image/iqiyi.png",
      discount: 65,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Iqiyi",
      description: "Streaming drama dan film Asia",
      features: ["Standard Plan", "Asian Content", "1 Bulan"],
      stock: 65,
      sold: 600
    },
    {
      id: 7,
      name: "Dramabox Premium",
      category: "Streaming",
      price: 10800,
      originalPrice: 30000,
      image: "../image/dramabox.png",
      discount: 64,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Dramabox",
      description: "Platform streaming khusus drama",
      features: ["Sharing Account", "Drama Collection", "1 Bulan"],
      stock: 30,
      sold: 450
    },
    {
      id: 8,
      name: "Loklok Premium",
      category: "Streaming",
      price: 20000,
      originalPrice: 45000,
      image: "../image/loklok.png",
      discount: 56,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Loklok",
      description: "Streaming film pendek dan konten viral",
      features: ["Bisa TV", "Sharing Basic", "Multi Paket"],
      stock: 35,
      sold: 500
    },
    {
      id: 9,
      name: "Viu Premium",
      category: "Streaming",
      price: 5500,
      originalPrice: 10000,
      image: "../image/viu.png",
      discount: 75,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Viu",
      description: "Streaming drama Korea dan Asia",
      features: ["Anti Limit", "1 Tahun", "Harga Terjangkau"],
      stock: 70,
      sold: 1500
    },
    {
      id: 10,
      name: "WeTV VIP",
      category: "Streaming",
      price: 16000,
      originalPrice: 30000,
      image: "../image/wetv.png",
      discount: 47,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Wetv",
      description: "Tencent Video international",
      features: ["Premium Shared", "Chinese Content", "1 Bulan"],
      stock: 45,
      sold: 700
    },
    {
      id: 11,
      name: "Bstation Premium",
      category: "Streaming",
      price: 6000,
      originalPrice: 35000,
      image: "../image/bstation.png",
      discount: 83,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Bstation",
      description: "Platform streaming anime dan manga",
      features: ["Shared 1 Device", "Anime Content", "1 Bulan"],
      stock: 55,
      sold: 900
    },
    {
      id: 12,
      name: "Youkou VIP",
      category: "Streaming",
      price: 10000,
      originalPrice: 30000,
      image: "../image/youkou.png",
      discount: 67,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Youkou",
      description: "Youku dengan konten China terbaru",
      features: ["Sharing Account", "Chinese Drama", "1 Bulan"],
      stock: 40,
      sold: 650
    },
    {
      id: 13,
      name: "Crunchyroll Premium",
      category: "Streaming",
      price: 13500,
      originalPrice: 30000,
      image: "../image/crunchyroll.png",
      discount: 55,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Crunchyroll",
      description: "Streaming anime terbesar dengan koleksi terlengkap",
      features: ["No Ads", "Simulcast", "Sharing", "1 Bulan"],
      stock: 65,
      sold: 850
    },

    // 🔥 MUSIK
    {
      id: 14,
      name: "Apple Music",
      category: "Musik",
      price: 8000,
      originalPrice: 20000,
      image: "../image/applemusic.png",
      discount: 60,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Apple%20Music",
      description: "Apple Music dengan jutaan lagu",
      features: ["Famplan", "No Ads", "Download Songs"],
      stock: 50,
      sold: 1600
    },
    
    // 🔥 EDITING
    {
      id: 15,
      name: "Canva Pro",
      category: "Editing",
      price: 2000,
      originalPrice: 20000,
      image: "../image/canva.png",
      discount: 90,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Canva",
      description: "Canva Pro untuk desain grafis",
      features: ["All Elements", "Premium Templates", "1 Bulan"],
      stock: 200,
      sold: 4200
    },
    {
      id: 16,
      name: "Capcut pro",
      category: "Editing",
      price: 60000,
      originalPrice: 10000,
      image: "../image/capcut.png",
      discount: 65,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Capcut",
      description: "Capcut Pro untuk editing video",
      features: ["No Watermark", "7 Hari", "Private Account"],
      stock: 150,
      sold: 2200
    },
    {
      id: 17,
      name: "Meitu VIP",
      category: "Editing",
      price: 2700,
      originalPrice: 55000,
      image: "../image/meitu.png",
      discount: 95,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Meitu",
      description: "Meitu untuk editing foto profesional",
      features: ["Private Account", "7 Hari", "Renew Tersedia"],
      stock: 60,
      sold: 1100
    },
    {
      id: 18,
      name: "Picsart Gold",
      category: "Editing",
      price: 4500,
      originalPrice: 15000,
      image: "../image/picsart.png",
      discount: 70,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Picsart",
      description: "Picsart Gold untuk editing lengkap",
      features: ["Sharing Account", "1 Bulan", "All Features"],
      stock: 100,
      sold: 1800
    },
    {
      id: 25,
      name: "Alight Motion Pro",
      category: "Editing",
      price: 5500,
      originalPrice: 15000,
      image: "../image/alight-motion.png",
      discount: 63,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Alight%20Motion",
      description: "Alight Motion untuk editing video profesional",
      features: ["No Watermark", "Premium Features", "Private Account"],
      stock: 150,
      sold: 2200
    },
    
    // 🔥 AI
    {
      id: 23,
      name: "ChatGPT Plus",
      category: "AI",
      price: 20000,
      originalPrice: 60000,
      image: "../image/chatgpt.png",
      discount: 67,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=ChatGPT",
      description: "ChatGPT dengan akses premium untuk AI",
      features: ["GPT-4 Access", "Faster Response", "1 Bulan"],
      stock: 90,
      sold: 1200
    },

    // 🔥 LAINNYA - DUOLINGO
    {
      id: 24,
      name: "Duolingo Plus",
      category: "Lainnya",
      price: 10800,
      originalPrice: 25000,
      image: "../image/duolingo.png",
      discount: 57,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Duolingo",
      description: "Platform pembelajaran bahasa interaktif",
      features: ["Sharing Account", "1 Bulan", "No Ads", "Offline Lessons"],
      stock: 75,
      sold: 950
    },
    {
      id: 24,
      name: "Spotify",
      category: "Music",
      price: 22800,
      originalPrice: 60000,
      image: "../image/spotify.png",
      discount: 65,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Spotify",
      description: "",
      features: [""],
      stock: 75,
      sold: 950
    }
    
  ]
};

console.log("✅ products-data.js DIPERBAIKI berhasil dimuat!");
console.log("Total produk:", window.productData.products.length);
console.log("✅ PERUBAHAN UTAMA:");
console.log("   1. ❌ Vidio DIHAPUS");
console.log("   2. ❌ Oldroll DIHAPUS");
console.log("   3. ❌ Ibis Paint X DIHAPUS");
console.log("   4. ❌ Dazzcam DIHAPUS");
console.log("   5. ✅ Harga disinkronkan dengan produk.js (paket termurah)");
console.log("   6. ✅ Parameter pageUrl diperbaiki untuk semua produk");
console.log("   7. ✅ Fitur ChatGPT diperbaiki (sebelumnya error)");
console.log("📊 Statistik:");
console.log("   - Streaming: " + window.productData.products.filter(p => p.category === "Streaming").length + " produk");
console.log("   - Musik: " + window.productData.products.filter(p => p.category === "Musik").length + " produk");
console.log("   - Editing: " + window.productData.products.filter(p => p.category === "Editing").length + " produk");
console.log("   - AI: " + window.productData.products.filter(p => p.category === "AI").length + " produk");
console.log("   - Lainnya: " + window.productData.products.filter(p => p.category === "Lainnya").length + " produk");
