import React from 'react';

const AboutUs = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* Header Section with Background Image */}
      <header className="relative h-screen">
        <img 
          src="https://media3.giphy.com/media/YnjVXWI4di65kEoK4s/giphy.webp?cid=ecf05e47ictmw1loejk01lym2w2wmf20rk677yrscvsquvc0&ep=v1_gifs_related&rid=giphy.webp&ct=g" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="lg:text-6xl  md:text-4xl text-2xl md:text-8xl font-bold text-[#B2456E] animate-fadeIn"><span className='text-white'>About <span className='text-[#B2456E]'>Fashion</span>-Store</span> <span className='lg:text-[15vh] text-4xl'> Zola</span></h1>
        </div>
      </header>

      <main className="py-12 px-4 md:px-16">
        {/* About Section */}
        <section className="container mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-[12vh] font-bold mb-6 animate-slideUp text-[#B2456E]">About Us</h2>
          <p className="text-lg md:text-xl mb-8 animate-slideUp text-gray-400 pt-5 font-bold">
            At Zola, we redefine the boundaries of fashion with our exclusive collection of branded clothing. Our dedication to quality and style is unmatched, and we strive to bring you timeless pieces that make a statement. Explore our journey and discover what sets us apart in the world of high fashion.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <img 
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHpwbjB0a29jYWF3bjc4cWVsbmk4YTczcXVrbXJhYmN0OHNqbWxlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85fRMP1tMsqwjizm/giphy.webp" 
              alt="Our Story" 
              className="w-full md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp"
            />
            <div className="md:ml-8 mt-8 md:mt-0">
              <h3 className="text-6xl font-bold font-semibold mb-4 animate-slideUp text-[#B2456E]">Our Mission</h3>
              <p className="text-base mb-6 animate-slideUp text-gray-400 font-bold ">
                At Zola, we’re committed to revolutionizing the world of branded clothing with our innovative designs and exceptional craftsmanship. Our mission is to create fashion-forward pieces that not only complement your style but also reflect our dedication to quality and sustainability.
              </p>
              <button className="bg-[#B2456E] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-white hover:text-[#B2456E] transition-colors duration-300 animate-pulse">Explore More</button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[#222] py-8 px-4 md:px-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp text-[#B2456E]">Meet the Team</h2>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 p-4">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp">
          <img 
            src="https://c.stocksy.com/a/XJC000/z9/47339.jpg" 
            alt="Team Member 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 animate-slideUp text-[#B2456E]">John Smith</h3>
        <p className="text-base animate-slideUp">Creative Director</p>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp">
          <img 
            src="https://images.pexels.com/photos/25072221/pexels-photo-25072221/free-photo-of-sepia-toned-portrait-of-a-young-woman-with-bangs.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Team Member 2" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 animate-slideUp text-[#B2456E]">Jane Doe</h3>
        <p className="text-base animate-slideUp">Head Designer</p>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp">
          <img 
            src="https://i.pinimg.com/originals/81/f8/6c/81f86c18b9fb887317e13995fbf6cc1f.jpg" 
            alt="Team Member 3" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 animate-slideUp text-[#B2456E]">Emily Johnson</h3>
        <p className="text-base animate-slideUp">Marketing Specialist</p>
      </div>
    </div>
  </div>
</section>


        {/* Values Section */}
        <section className="py-12 px-4 md:px-16 bg-[#333]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp text-[#B2456E]">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="p-6 bg-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp border border-[#B2456E]">
                <h3 className="text-2xl font-semibold mb-4 text-[#B2456E]">Quality</h3>
                <p>We prioritize quality in every stitch and fabric, ensuring our clothing meets the highest standards of excellence and durability.</p>
              </div>
              <div className="p-6 bg-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp border border-[#B2456E]">
                <h3 className="text-2xl font-semibold mb-4 text-[#B2456E]">Innovation</h3>
                <p>Our designs push the boundaries of fashion, blending contemporary trends with timeless elegance to create unique and inspiring collections.</p>
              </div>
              <div className="p-6 bg-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 animate-slideUp border border-[#B2456E]">
                <h3 className="text-2xl font-semibold mb-4 text-[#B2456E]">Sustainability</h3>
                <p>We are committed to sustainable practices that reduce our environmental footprint while providing you with fashionable choices that are kind to the planet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 md:px-16 bg-[#B2456E] text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Get in Touch</h2>
          <p className="text-lg md:text-xl mb-8 animate-slideUp">
            Whether you have questions, feedback, or just want to say hello, we’d love to hear from you. Fill out the form below and let us know how we can assist you.
          </p>
          <form className="bg-black p-8 rounded-lg shadow-lg mx-auto max-w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="p-3 border border-[#B2456E] rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#B2456E] transition-all duration-300"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 border border-[#B2456E] rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#B2456E] transition-all duration-300"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full p-3 border border-[#B2456E] rounded-lg mt-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#B2456E] transition-all duration-300"
            />
            <button type="submit" className="bg-[#B2456E] text-white py-2 px-6 rounded-lg shadow-lg mt-4 hover:bg-white hover:text-[#B2456E] transition-colors duration-300 animate-pulse">Send Message</button>
          </form>
        </section>
      </main>

    

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }

        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
