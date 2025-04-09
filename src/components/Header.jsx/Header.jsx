import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cửa Composite</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Trang Chủ</Link></li>
            <li><Link to="/san-pham" className="hover:underline">Sản Phẩm</Link></li>
            <li><Link to="/bang-gia" className="hover:underline">Bảng Giá</Link></li>
            <li><Link to="/lien-he" className="hover:underline">Liên Hệ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;Header.jsx