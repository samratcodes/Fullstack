import React from 'react';

const Page = ({ params }) => {
  // Dummy product data
  const products = [
    { 
      id: 1, 
      name: 'Sports Sneakers Off White Red', 
      price: 79.99, 
      description: 'High-quality sports sneakers for all your fitness needs.', 
      specifications: 'Color: Off White, Red | Size: 9 | Material: Synthetic',
      imageUrl: 'https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png'
    },
    { 
      id: 2, 
      name: 'Eyeshadow Palette with Mirror', 
      price: 29.99, 
      description: 'Create stunning eye makeup looks with this versatile eyeshadow palette.', 
      specifications: 'Includes: 20 colors | Mirror: Yes | Vegan: Yes',
      imageUrl: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png'
    },
    { 
      id: 3, 
      name: 'Annibale Colombo Sofa', 
      price: 899.99, 
      description: 'Elegant and comfortable sofa for your living room.', 
      specifications: 'Color: Beige | Dimensions: 84 x 34 x 30 inches | Material: Leather',
      imageUrl: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png'
    },
    { 
      id: 4, 
      name: 'Knoll Saarinen Executive Conference Chair', 
      price: 399.99, 
      description: 'Stylish and ergonomic chair for your office or conference room.', 
      specifications: 'Color: Black | Adjustable Height: Yes | Material: Fabric',
      imageUrl: 'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png'
    },
    { 
      id: 5, 
      name: 'Dog Food', 
      price: 19.99, 
      description: 'Nutritious dog food for your furry friend.', 
      specifications: 'Weight: 5 lbs | Flavor: Chicken | Grain-Free: Yes',
      imageUrl: 'https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png'
    },
    { 
      id: 6, 
      name: 'Asus Zenbook Pro Dual Screen Laptop', 
      price: 1499.99, 
      description: 'Powerful laptop with dual screens for enhanced productivity.', 
      specifications: 'Processor: Intel i7 | RAM: 16GB | Storage: 1TB SSD',
      imageUrl: 'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png'
    },
    { 
      id: 7, 
      name: 'Rolex Cellini Moonphase Watch', 
      price: 9999.99, 
      description: 'Luxurious watch with moon phase complication for watch enthusiasts.', 
      specifications: 'Dial Color: White | Strap Material: Leather | Water-Resistant: Yes',
      imageUrl: 'https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png'
    }
  ];

  // Filter product data based on params.slug
  const product = products.find(product => product.id === Number(params.slug));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative w-full h-96">
          <img
            alt={product.name}
            src={product.imageUrl}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-2xl text-red-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <p className="text-gray-600">{product.specifications}</p>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
