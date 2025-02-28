
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IMAGE from './img/45.jpg';

const ShoppingCart = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [userId, setUserId] = useState(''); 

  useEffect(() => {
    const { products } = location.state || {};
    if (products) {
      setProducts(products);
      sessionStorage.setItem('cartProducts', JSON.stringify(products));
    } else {
      sessionStorage.removeItem('cartProducts');
      setProducts([]);
    }
  }, [location.state]);

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cartProducts');
    if (savedCart) {
      setProducts(JSON.parse(savedCart));
    } else {
      setProducts([]);
    }
  }, []);

  useEffect(() => {
    const total = products.reduce((sum, product) => sum + (parseFloat(product.price) || 0), 0); 
    setTotalPrice(total); 
  }, [products]); 

  const handleRemoveProduct = (productIndex) => {
    const updatedProducts = products.filter((_, index) => index !== productIndex); 
    setProducts(updatedProducts);
    sessionStorage.setItem('cartProducts', JSON.stringify(updatedProducts)); 
  };

  const handleClearCart = () => {
    sessionStorage.removeItem('cartProducts');
    setProducts([]);
  };

  const handleCarts = () => {
    handleSubmit();
    handleClearCart();

  };

  const handleSubmit = () => {
    const userId = localStorage.getItem('userId');
  
    if (!userId) {
      alert('User ID not found! Please log in again.');
      return;
    }
  
    const productIds = products.map((product) => product.id); 
  
    if (productIds.length === 0) {
      alert("سبد خرید شما خالی است!");
      return;
    }
  
 
    fetch('http://localhost:3000/submitOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId, 
        productIds: productIds, 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        alert('سفارش شما ثبت شد!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('مشکلی در ثبت سفارش پیش آمده است.');
      });
  };
  
  

  return (
    <div className="bg-gray-200 p-4">
      <div className="relative">
        <img
          src={IMAGE}
          className="w-full h-[750px] object-cover border-20 border-white sm:h-[500px] md:h-[600px]"
          alt="Trendify"
        />
      </div>

      <div className="absolute top-0 left-0 w-full bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <p className="text-xl font-semibold text-gray-800">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white p-8 shadow-lg space-y-4">
        <div className="w-full">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="relative w-72 h-72 bg-white shadow-md rounded-lg overflow-hidden border-2 border-gray-300 hover:border-gray-500"
                >
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-gray-600">Color: {product.color}</p>
                    <p className="text-gray-600">Price: ${product.price}</p>
                    <p className="text-gray-600">Size: {product.size}</p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button
                      onClick={() => handleRemoveProduct(index)}
                      className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 mt-4">No products in the cart.</p>
          )}
        </div>

      
        <div className="text-center mt-4">
          <button
            onClick={handleCarts}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
