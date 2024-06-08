'use client';

import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Page = () => {
  const { data, error } = useSWR('https://dummyjson.com/products', fetcher);

  if (error) return <div className="text-center text-red-500 text-lg">Failed to load</div>;
  if (!data) return <div className="text-center text-gray-500 text-lg">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.products.map((product) => (
          <li key={product.id} className="border rounded-lg shadow-lg overflow-hidden bg-white flex flex-col items-center text-center p-4">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-gray-800">Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
