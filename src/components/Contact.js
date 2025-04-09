import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Liên H?</h2>
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="H? Tên" className="w-full border rounded px-3 py-2" />
        <input type="text" placeholder="S? Ði?n Tho?i" className="w-full border rounded px-3 py-2" />
        <textarea placeholder="N?i dung c?n tu v?n" className="w-full border rounded px-3 py-2"></textarea>
        <button type="submit" className="w-full bg-orange-600 text-white rounded px-4 py-2 font-semibold">G?i Thông Tin</button>
      </form>
    </div>
  );
};

export default Contact;
