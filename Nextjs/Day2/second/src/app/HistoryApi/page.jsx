'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Dummy product data
const dummyProducts = [
  { id: 1, name: 'Product A', price: 30 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 50 },
  { id: 4, name: 'Product D', price: 40 },
];

// Error component
function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 border border-red-500 bg-red-100 rounded-md">
      <h2 className="text-red-500 text-lg font-bold">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}

// EcommerceApp component
export default function EcommerceApp() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'asc');
  const [locale, setLocale] = useState(pathname.split('/')[1] || 'en');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  useEffect(() => {
    if (!loading) {
      const sortedProducts = [...dummyProducts].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
      setProducts(sortedProducts);
    }
  }, [sortOrder, loading]);

  function updateSorting(order) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', order);
    window.history.pushState(null, '', `?${params.toString()}`);
    setSortOrder(order);
  }

  function switchLocale(newLocale) {
    const newPath = `/${newLocale}${pathname.substring(locale.length + 1)}`;
    window.history.replaceState(null, '', newPath);
    setLocale(newLocale);
  }

  function simulateError() {
    throw new Error('Simulated error occurred!');
  }



  return (
    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Sort Products</h3>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
          onClick={() => updateSorting('asc')}
        >
          Sort Ascending
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => updateSorting('desc')}
        >
          Sort Descending
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Switch Language</h3>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mr-2"
          onClick={() => switchLocale('en')}
        >
          English
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => switchLocale('fr')}
        >
          French
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Product List ({locale})</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-1">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Current State</h3>
        <p>Sort Order: {sortOrder}</p>
        <p>Language: {locale}</p>
      </div>

      <div>
        {/* Button to simulate error */}
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={simulateError}
        >
          Simulate Error
        </button>
      </div>
    </div>
  );
}
