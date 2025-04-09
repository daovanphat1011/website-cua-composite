import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Cửa Nhựa Composite Hà Nội</h1>
      <p className="text-gray-700 mb-6">Chuyên thi công & lắp đặt cửa composite cao cấp, bền đẹp – chống nước – giá tốt. Phục vụ toàn Hà Nội.</p>
      <img src="https://i.imgur.com/yNfswRl.jpg" alt="Mẫu cửa composite đẹp" className="rounded-xl shadow-lg w-full max-w-5xl mx-auto" />
    </div>
  );
}

function Products() {
  const products = [
    { src: "/images/z6447955880124_3897d3e7ff7e930c625149cbfc1b8544.jpg", name: "KOS 107" },
    { src: "/images/z6447955880213_e96564a03c27c92323f3a1094feddb8c.jpg", name: "KOS 211" },
    { src: "/images/z6447955888726_2c2a747f16002d9a5b44490c4199275f.jpg", name: "KOS 213" },
    { src: "/images/z6447955888979_75b5e6ba5d1a6f737b1ac2439fb3e65c.jpg", name: "KOS 108**" },
    { src: "/images/z6447955891205_bab56527ba77630de0bb43045ed3ef94.jpg", name: "KOS 113" },
    { src: "/images/z6447955897459_314a63245283376741019788049d9349.jpg", name: "KOS 114" },
    { src: "/images/z6447955900398_faa92d4454de12e79af6ff09acac05cc.jpg", name: "KOS 211R" },
    { src: "/images/z6447955904669_e3cf9f4073c14e629606a7004a4bacdb.jpg", name: "KOS 216" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Danh Mục Sản Phẩm</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-xl overflow-hidden">
            <img src={item.src} alt={`Mẫu cửa ${item.name}`} className="w-full" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Cửa Composite {item.name}</h3>
              <p className="text-sm text-gray-600">Giá từ 2.300.000đ – Lắp đặt tận nơi</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Bảng Giá Tham Khảo</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Cửa cơ bản: từ 2.300.000đ – 2.700.000đ</li>
        <li>Cửa luxury: từ 3.000.000đ – 3.800.000đ</li>
        <li>Phụ kiện + thi công: từ 300.000đ</li>
        <li>Miễn phí khảo sát tận nơi Hà Nội</li>
      </ul>
    </div>
  );
}

function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Tin Tức & Kinh Nghiệm</h2>
      <p className="text-gray-700">Sắp có bài viết chia sẻ về: cách chọn cửa, cách bảo dưỡng, ưu nhược điểm…</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Liên Hệ Tư Vấn</h2>
      <form className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        <input type="text" placeholder="Họ tên" className="w-full border rounded px-3 py-2" />
        <input type="text" placeholder="Số điện thoại" className="w-full border rounded px-3 py-2" />
        <input type="text" placeholder="Nội dung cần tư vấn" className="w-full border rounded px-3 py-2" />
        <button type="submit" className="w-full bg-orange-600 text-white rounded px-4 py-2 font-semibold">Gửi Thông Tin</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/bang-gia" element={<Pricing />} />
            <Route path="/tin-tuc" element={<Blog />} />
            <Route path="/lien-he" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
