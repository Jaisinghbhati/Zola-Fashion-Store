import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Carousel from './Carousel';

const Homepage = () => {
    const [fadeIn, setFadeIn] = useState(false);

    const images = [
        'https://wallpapercave.com/wp/wp357124.jpg',
        'https://images.unsplash.com/photo-1708920325933-5988622fe361?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const categoryImages = [
        'https://images.pexels.com/photos/24902712/pexels-photo-24902712/free-photo-of-muscular-man-flexing-muscles-wearing-white-undershirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://i.pinimg.com/originals/14/69/1c/14691c0fffd7c913681b6df622ac73bd.png',
        'https://i.pinimg.com/736x/06/5a/cc/065acc0ddf661a067904124419f6e84b.jpg',
        'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://instaloverz.com/wp-content/uploads/2016/07/4-winter-mens-fashion.jpg',
    ];

    const featuredImagesO = [
        'https://img.faballey.com/images/product/DRS04670Z/1.JPG',
        'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/27367835/pexels-photo-27367835/free-photo-of-woman-wearing-denim-dress-on-a-street-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/27333592/pexels-photo-27333592/free-photo-of-beautiful-brunette-woman-in-a-white-dress-posing-on-the-meadow-by-the-hills-and-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/27310016/pexels-photo-27310016/free-photo-of-brunette-woman-wearing-elegant-clothes-in-a-studio.jpeg?auto=compress&cs=tinysrgb&w=600',
        
    ];


    const eaturedImagesO = [
        { name: 'Product 1', price: '$10', image: 'path_to_image1' },
        { name: 'Product 2', price: '$15', image: 'path_to_image2' },
        { name: 'Product 3', price: '$20', image: 'path_to_image3' },
        
    ]

    const featuredImagesT = [
        'https://hips.hearstapps.com/ell.h-cdn.co/assets/cm/15/02/768x1152/54aa6da93139e_-_male-models-22-74391212.jpg?crop=1.0xw:1xh;center,top&resize=768:*',
        'https://go-talent.co.uk/sites/default/files/shutterstock_159456308_0.jpg',
        'https://i.pinimg.com/originals/61/4b/17/614b177dd231989f58165d60bc5be371.jpg',
        'https://i.pinimg.com/originals/ec/3f/6a/ec3f6aa3e1a3a04fa7230016fa968ddd.png',
        'https://cdna.lystit.com/photos/07b4-2014/07/24/he-by-mango-blue-classic-fit-vintage-denim-shirt-product-1-21585710-0-934665010-normal.jpeg',
        
    ];

    const testimonialImages = [
        'https://i.pinimg.com/originals/e4/c5/9f/e4c59fdbb41ccd0f87dc0be871d91d98.jpg',
        'https://i.pinimg.com/236x/e6/c5/37/e6c537b5ccdf0b2bf5e6503b78916bf4.jpg',
        'https://i.pinimg.com/originals/06/10/32/061032888541ee3f4b8efdf1b6a76401.jpg',
        'https://tse2.mm.bing.net/th?id=OIP.l1AxbXsFZjLcrHItjbvLQgHaKX&pid=Api&P=0&h=180',
        'https://tse1.mm.bing.net/th?id=OIP.4Py7MYDlJMhMjiA_gELNdAHaGh&pid=Api&P=0&h=180',
        'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
    ];

    return (
        <>
            <Carousel />

            <div className="bg-[#B2456E] text-white">
                <style>{`
                    .fade-in {
                        opacity: 0;
                        transition: opacity 2s ease-in-out;
                    }
                    .fade-in.show {
                        opacity: 1;
                    }
                    .hover-effect:hover {
                        transform: scale(1.05);
                        transition: transform 0.3s ease-in-out;
                    }
                `}</style>

              
              

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="lg:text-6xl text-3xl text-gray-100 sm:text-4xl">
                               SHOP BY CATEGORY
                            </h2>
                            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-gray-500 ">
                                {[
                                    { name: 'Men Section', description: 'Fashionable and comfortable clothing.' },
                                    { name: 'Women Section', description: 'Complement your style.' },
                                    { name: 'Kids', description: 'Kids Section.' },

                                ].map((item, index) => (
                                    <div key={index} className="">
                                        <div className="w-full bg-gray-200 rounded-lg overflow-hidden lg:ml-[35vh]">
                                            <img
                                                src={categoryImages[index]}
                                                alt={item.name}
                                                className="w-full h-90 object-cover object-center "
                                            />
                                        </div>
                                        <h3 className="mt-4 w-full text-gray-100 lg:ml-[35vh]">{item.name}</h3>
                                        <p className="mt-1  w-full text-gray-400 lg:ml-[35vh]">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="lg:text-6xl text-3xl text-gray-100 sm:text-4xl">
                Featured Products
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-gray-500">
                {featuredImagesO.map((src, index) => (
                    <div key={index} className="relative">
                        <Link to="Women">
                            <img
                                src={src}
                                alt={`Featured ${index}`}
                                className="w-full h-auto object-cover rounded-lg hover-effect"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white transition-opacity duration-300 opacity-100 sm:opacity-0 sm:hover:opacity-100">
                               
                                <button className="relative px-4 py-2 rounded-lg overflow-hidden bg-[#B2456E] text-white">
                                    <span className="relative z-10">Order Now</span>
                                    <div className="absolute inset-0 bg-pink-600 transform -translate-x-full hover:translate-x-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

<section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="lg:text-6xl text-3xl text-gray-100 sm:text-4xl">
                Featured Men’s Products
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-gray-500">
                {featuredImagesT.map((src, index) => (
                    <div key={index} className="relative">
                        <Link to="Mens">
                            <img
                                src={src}
                                alt={`Featured ${index}`}
                                className="w-full h-auto object-cover rounded-lg hover-effect"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white transition-opacity duration-300 opacity-100 sm:opacity-0 sm:hover:opacity-100">
                               
                                <button className="relative px-4 py-2 rounded-lg overflow-hidden bg-[#B2456E] text-white">
                                    <span className="relative z-10">Order Now</span>
                                    <div className="absolute inset-0 bg-pink-600 transform -translate-x-full hover:translate-x-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>




                  
                     {/* Best Selling Products */}
                <div className="bg-black text-white">
                    <style>{`
                        .fade-in {
                            opacity: 0;
                            transition: opacity 2s ease-in-out;
                        }
                        .fade-in.show {
                            opacity: 1;
                        }
                        .hover-effect:hover {
                            transform: scale(1.05);
                            transition: transform 0.3s ease-in-out;
                        }
                        .image-container {
                            position: relative;
                            width: 100%;
                            height: auto;
                        }
                        .overlay {
                            position: absolute;
                            top: 50%;
                            left: -100%;
                            transform: translateY(-50%);
                            color: #fff;
                            font-size: 3rem;
                            font-weight: bold;
                            background-color: rgba(0, 0, 0, 0.5);
                            padding: 20px;
                            border-radius: 10px;
                            transition: left 0.5s ease-in-out;
                        }
                        .image-container:hover .overlay {
                            left: 10%;
                        }
                    `}</style>

                    <section className={`py-16 ${fadeIn ? 'fade-in show' : 'fade-in'}`}>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="lg:text-4xl text-xl  text-gray-100 sm:text-4xl">
                                    Best Selling Product of the Year <br /> <span className='lg:text-6xl  text-2xl text-gray-400'>LONG COATS<br /> off 50%</span>
                                </h2>
                                <div className="mt-6">
                                    <img
                                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBhOThndW9rMTVqbHY2Ynh5dXFtMnBkcWpndWpmNnFrNHlqYjg1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Gl1my1kgSZsK0kVR4p/giphy.webp"
                                        alt="Best Selling Product"
                                        className="w-full h-auto object-cover"
                                    />
                                    <p className="text-gray-300 mt-4 text-xl font-semibold">
                                        Check out our best selling product of the year and get amazing discounts on it!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                {/* MOVIE */}
                <div className="bg-[#404041] text-white">
            {/* Other sections... */}

            <style>{`
                .fade-in {
                    opacity: 0;
                    transition: opacity 2s ease-in-out;
                }
                .fade-in.show {
                    opacity: 1;
                }
                .hover-effect:hover {
                    transform: scale(1.05);
                    transition: transform 0.3s ease-in-out;
                }
                .movie-card {
                    position: relative;
                    overflow: hidden;
                }
                .movie-card img {
                    transition: transform 0.3s ease-in-out;
                }
                .movie-card:hover img {
                    transform: scale(1.1);
                }
                .movie-title {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.5);
                    color: #fff;
                    padding: 10px;
                }
            `}</style>

            <section className={`py-16 ${fadeIn ? 'fade-in show' : 'fade-in'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl   text-gray-100 sm:text-6xl">
                            Zola Movies Section
                        </h2>

                        <Link to="Movies">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                            {[
                                { name: 'OLYMPUS HAS FALLEN - 5$', img: 'http://www.graphicdesignjunction.com/wp-content/uploads/2013/03/large/Olympus+Has+Fallen+movie+posters.jpg' },
                                { name: 'ANTEBELLUE - 5$', img: 'https://i0.wp.com/thefilmstage.com/wp-content/uploads/2020/12/pp012021-16-antebellum.jpg?ssl=1' },
                                { name: 'OPPENHEIMER - 5$', img: 'https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg' },
                                { name: 'POPEYE - 5$', img: 'https://i.pinimg.com/736x/1d/6c/5f/1d6c5fd0f54ed353c1620591ad34f0e8--upcoming-events-movie--upcoming.jpg' },
                                { name: 'NOAH - 5$ ', img: 'http://uiconstock.com/wp-content/uploads/2014/05/noah-2014-movie-poster.jpg' },
                               
                                
                            ].map((movie, index) => (
                                <div key={index} className="movie-card shadow-md rounded-lg overflow-hidden hover-effect transition duration-300">
                                    <img src={movie.img} alt={movie.name} className="w-full h-auto object-cover" />
                                    <div className="movie-title">
                                        {movie.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other sections... */}
        </div>

                {/* BEST SELLING PRODUCT BRING THEM BACK FROM GPT */}
                  
              
                

                <section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
        <h2 className="text-3xl  text-gray-100 sm:text-4xl">
            Customer Testimonials
        </h2>
        <div className="mt-6 flex grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
                { name: 'John Doe', feedback: 'Amazing products and fast delivery!' },
                { name: 'Jane Smith', feedback: 'Great customer service and quality.' },
                { name: 'Sam Wilson', feedback: 'Wide range of products to choose from.' },
                { name: 'Anna Johnson', feedback: 'Highly recommend this store!' },
                { name: 'Peter Brown', feedback: 'Fantastic shopping experience!' },
                { name: 'Emily Davis', feedback: 'Love the discounts and deals.' },
            ].map((testimonial, index) => (
                <div key={index} className="bg-black shadow-md rounded-lg p-4 hover-effect transition duration-300">
                    <div className="w-20 h-20 mx-auto bg--600 rounded-full mb-4">
                        <img src={testimonialImages[index]} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400 mb-2">"{testimonial.feedback}"</p>
                        <p className="font-semibold text-gray-100">{testimonial.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
</section>
            </div>
        </>
    );
};

export default Homepage;
