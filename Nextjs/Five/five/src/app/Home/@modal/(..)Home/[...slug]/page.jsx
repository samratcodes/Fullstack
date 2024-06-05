
import React from 'react'
import Modal from '../../../../../components/Modal';

const Page = ({ params }) => {
  // Dummy photo data
  const products = [
    { 
      id: 1, 
      name: 'Sports Sneakers Off White Red', 
      price: 79.99, 
      description: 'High-quality sports sneakers for all your fitness needs.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png'
    },
    { 
      id: 2, 
      name: 'Eyeshadow Palette with Mirror', 
      price: 29.99, 
      description: 'Create stunning eye makeup looks with this versatile eyeshadow palette.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png'
    },
    { 
      id: 3, 
      name: 'Annibale Colombo Sofa', 
      price: 899.99, 
      description: 'Elegant and comfortable sofa for your living room.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png'
    },
    { 
      id: 4, 
      name: 'Knoll Saarinen Executive Conference Chair', 
      price: 399.99, 
      description: 'Stylish and ergonomic chair for your office or conference room.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png'
    },
    { 
      id: 5, 
      name: 'Dog Food', 
      price: 19.99, 
      description: 'Nutritious dog food for your furry friend.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png'
    },
    { 
      id: 6, 
      name: 'Asus Zenbook Pro Dual Screen Laptop', 
      price: 1499.99, 
      description: 'Powerful laptop with dual screens for enhanced productivity.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png'
    },
    { 
      id: 7, 
      name: 'Rolex Cellini Moonphase Watch', 
      price: 9999.99, 
      description: 'Luxurious watch with moon phase complication for watch enthusiasts.', 
      imageUrl: 'https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png'
    }
  ];
  

  // Filter dummy data based on params.slug
  const photo = products.find(photo => photo.id === Number(params.slug));

  return (
    <div>
      <Modal>
        <div className="relative w-full aspect-w-1 aspect-h-1">
          <img src={photo.imageUrl} alt={photo.name} />
          
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-semibold">{photo.name}</h2>
          <h3>{photo.price}</h3>
          <h3>{photo.description}</h3>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
