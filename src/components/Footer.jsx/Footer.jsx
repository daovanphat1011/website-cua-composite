Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 Cửa Composite Hà Nội - Tất cả quyền được bảo vệ</p>
      <div>
        <a href="#" className="text-orange-600 hover:underline">Facebook</a>
        <span> | </span>
        <a href="#" className="text-orange-600 hover:underline">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;

