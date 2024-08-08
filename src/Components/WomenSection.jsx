import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Pure Silk Long Slive Shirt', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T50_7665T_KY_X_EC_0', description: '1100/- only' },
  { id: 2, name: 'Pure Cotton Midi Skirt', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T57_9873_Y0_X_EC_0', description: '1800/- only' },
  { id: 3, name: 'Linen Blend Cropped', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T59_3106J_DW_X_EC_0', description: '1000/- only' },
  { id: 4, name: 'Pure Cotton One Shoulder ', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T43_3340_Y0_X_EC_0', description: '800/- only' },
  { id: 5, name: 'Pure Cotton Broderie Blouse', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T43_3528_P6_X_EC_0', description: '1400/- only' },
  { id: 6, name: 'Pure Cotton Printed Square', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T42_6261_B4_X_EC_0', description: '1600/- only' },
  { id: 6, name: 'Camel Cargo', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T52_0610_Y0_X_EC_0', description: '1800/- only' },
  { id: 6, name: 'Printed Shirred Shirt', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T43_3255_Y4_X_EC_0', description: '1200/- only' },
  { id: 6, name: 'Pure Irish Linen Square', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T50_3218T_HX_X_EC_0', description: '600/- only' },
  { id: 6, name: 'Satin Look Relaxed Single', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T59_1828J_A6_X_EC_0', description: '500/- only' },
  { id: 6, name: 'Printed Collared Shirt', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T43_8299_N4_X_EC_0', description: '2000/- only' },
  { id: 6, name: 'Shrried Detail Bandeau Top', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T43_3293_Y0_X_EC_0', description: '2500/- only' },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      setNotification('Item already exists in the cart!');
    } else {
      setCart([...cart, product]);
      setNotification('Item added to cart!');
    }
    setTimeout(() => setNotification(''), 3000);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleOrderClick = (product) => {
    setShowOrder(product);
  };

  const handleClosePopup = () => {
    setShowOrder(null);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleOrderFromCart = (product) => {
    setShowOrder(product);
    handleCloseCart();
  };

  const handlePlaceOrder = () => {
    setShowOrder(null);
    setShowOrderConfirmation(true);
    setTimeout(() => setShowOrderConfirmation(false), 3000);
  };

  return (
    <div className="app-container bg-white text-black font-sans">
    <header className="header flex justify-between p-2">
        <div className="relative ">
          <button 
            className="cart-button fixed top-0 right-0 mt-4 mr-4 bg-[#B2456E] text-white p-3 rounded-full flex items-center justify-center shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300 z-50 mt-[130px]"
            onClick={() => setShowCart(true)}
          >
            Cart ({cart.length})
          </button>
          {showCart && (
            <div className="cart-popup fixed inset-0 bg-[#dc2626] bg-opacity-50 flex justify-center items-center z-50">
              <div className="cart-popup-content bg-white p-6 rounded-lg shadow-lg w-4/5 max-h-[80vh] overflow-y-auto relative">
                <button 
                  className="close-button absolute top-2 right-2 text-red-500 text-2xl"
                  onClick={handleCloseCart}
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold mb-4">Cart</h2>
                {cart.length === 0 ? (
                  <p>No items in the cart</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="cart-item flex items-center mb-4 border-b pb-4  ">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold">{item.name}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                      <button 
                        className="remove-button bg-red-500 w-[3vh] h-[4vh]text-white p-2 rounded ml-4"
                        onClick={() => removeFromCart(item.id)}
                      >
                        x
                      </button>
                      <button
                        className="order-button bg-[#B2456E] text-white p-2 rounded ml-4"
                        onClick={() => handleOrderFromCart(item)}
                      >
                        Order
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </header>


      {/* New Section with Large Image and Text */}
    
      <div className="hero-section relative">
        <img 
          src="https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Men's Fashion" 
          className="w-full h-[600px] object-cover p-4"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-6xl font-bold   rounded opacity-75 lg:pl-[80vh] pt-[20vh]">Women's.Section</h2>
           <p className="text-xl md:text-xl lg:text-xl xl:text-sm  rounded opacity-50  lg:pl-[80vh] ">By-Jai Singh Bhati</p>
        </div>
      </div>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map(product => (
            <div key={product.id} className="product-card border p-6 rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover mb-4" />
              <h2 className="text-xl font-bold text-[#B2456E] mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button 
                className="order-button bg-[#B2456E] text-white p-3 rounded w-full mb-2"
                onClick={() => handleOrderClick(product)}
              >
                Order
              </button>
              <button 
                className="add-to-cart-button bg-black text-white p-3 rounded w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {showOrder && (
        <div className="order-popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300 scale-105">
            <button 
              className="close-popup-button absolute top-2 right-2 text-red-500 text-xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <img src={showOrder.image} alt={showOrder.name} className="w-80 h-80 object-cover mb-4" /> {/* Updated image size */}
            <h2 className="text-2xl font-bold text-[#B2456E] mb-2">{showOrder.name}</h2>
            <p className="text-gray-600 mb-4">{showOrder.description}</p>
            <div className="mb-4">
              <label className="block mb-2">Size:</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Payment Method:</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <button 
              className="order-button bg-[#B2456E] text-white p-3 rounded w-full"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      {showOrderConfirmation && (
        <div className="order-confirmation-popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="confirmation-popup-content bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold text-green-600">Your order is placed!</h2>
            <button 
              className="close-confirmation-button mt-4 bg-green-500 text-white p-2 rounded"
              onClick={() => setShowOrderConfirmation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {notification && (
        <div className="notification fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}
    </div>
  );
};

export default App;
