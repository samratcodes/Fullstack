'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/hello');
        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="text-center text-red-500 text-lg">Failed to load</div>;
  if (!data) return <div className="text-center text-green-100 text-lg">Loading...</div>;

  return (
    <div className="max-w-7xl bg-green-200  mx-auto p-6">
      <h1 className="text-4xl bg-green-300 font-bold text-center mb-12">Our Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.products.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
