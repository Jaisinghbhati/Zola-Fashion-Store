import React, { useState } from 'react';

const movies = [
    { id: 1, name: 'Movie 1', image: 'http://graphicdesignjunction.com/wp-content/uploads/2012/05/large/movie-poster-15.jpg', description: 'A thrilling adventure movie.' },
    { id: 2, name: 'Movie 2', image: 'http://graphicdesignjunction.com/wp-content/uploads/2012/05/large/movie-poster-20.jpg', description: 'A heartwarming romantic comedy.' },
    { id: 3, name: 'Movie 3', image: 'https://wallpapercave.com/wp/wp1945933.jpg', description: 'An action-packed superhero film.' },
    { id: 4, name: 'Movie 4', image: 'http://blog.karachicorner.com/wp-content/uploads/2013/04/large/TheWolverine+movie+posters.jpg', description: 'A gripping sci-fi thriller.' },
    { id: 5, name: 'Movie 5', image: 'https://wallpapercave.com/wp/wp5014280.jpg', description: 'A mysterious horror movie.' },
    { id: 6, name: 'Movie 6', image: 'http://3.bp.blogspot.com/-aRx3vMaxyFQ/UOwfMdLZ4oI/AAAAAAAAB9c/rCT9VjtdRuc/s1600/The-Last-Stand-poster-final+poster.jpg', description: 'An inspiring sports drama.' },
    { id: 7, name: 'Movie 7', image: 'https://wallpaperaccess.com/full/917610.jpg', description: 'A fun family animated movie.' },
    { id: 8, name: 'Movie 8', image: 'https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/22/bloodshot-movie-HD-poster-.jpg?fit=1727%2C2560&quality=90&zoom=1&ssl=1', description: 'A classic historical drama.' },
    { id: 9, name: 'Movie 9', image: 'https://3.bp.blogspot.com/-68gQieNCtkY/VtlelG7YJyI/AAAAAAAADIE/YAvjf1CSKt4/s1600/Ryde%2BPoster%2BFINAL.jpg', description: 'A futuristic space opera.' },
    { id: 10, name: 'Movie 10', image: 'https://i.pinimg.com/originals/9c/7a/98/9c7a9817f94540479a2943aa334aa407.jpg', description: 'A hilarious comedy.' },
    { id: 11, name: 'Movie 11', image: 'https://cdn.wallpapersafari.com/89/16/rdtDbU.jpg', description: 'A romantic drama.' },
    { id: 12, name: 'Movie 12', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e22ff753131197.596c4c560ae3b.jpg', description: 'A gripping crime thriller.' },
  ];

const MoviesSection = () => {
  const [showPopup, setShowPopup] = useState(null);

  const handleBuyClick = (movie) => {
    setShowPopup(movie);
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div className="movies-section bg-black text-black font-sans">
      {/* Hero Section */}
      <div className="hero-section relative mb-16 flex justify-center p-5 ">
        <img 
          src="https://w.wallhaven.cc/full/42/wallhaven-42roy9.jpg" 
          alt="Featured Movie" 
          className="w-[200vh]  h-[400px] object-cover rounded-lg shadow-lg "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white  bg-opacity-70 p-8 rounded-lg shadow-lg animate-pulse">
          <h2 className="text-5xl font-extrabold mb-4"><span className=' lg:text-[8vh] text-[#B2456E]'>Movies</span>Section</h2>
          <p className="text-lg">Catch the latest blockbuster!</p>
        </div>
      </div>

      {/* Movies Grid */}
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card border p-6 rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105">
              <img src={movie.image} alt={movie.name} className="w-full h-84 object-cover mb-4" />
              <h2 className="text-xl font-bold text-[#B2456E] mb-2">{movie.name}</h2>
              <p className="text-gray-600 mb-4">{movie.description}</p>
              <button 
                className="buy-button bg-[#B2456E] text-white p-3 rounded w-full"
                onClick={() => handleBuyClick(movie)}
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Buy Popup */}
      {showPopup && (
        <div className="buy-popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300 scale-105">
            <button 
              className="close-popup-button absolute top-2 right-2 text-red-500 text-xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <img src={showPopup.image} alt={showPopup.name} className="w-80 h-80 object-cover mb-4" />
            <h2 className="text-2xl font-bold text-[#B2456E] mb-2">{showPopup.name}</h2>
            <p className="text-gray-600 mb-4">{showPopup.description}</p>
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
              onClick={handleClosePopup}
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesSection;
