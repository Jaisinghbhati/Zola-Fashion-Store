import React from 'react'

const Footer = () => {
  return (
    <div>
     
     <section className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="mt-3 text-lg text-gray-300">
                            Sign up to receive updates on new arrivals and special offers.
                        </p>
                        <div className="mt-6 max-w-lg mx-auto sm:flex sm:justify-center">
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 sm:text-sm" />
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button className="w-full px-4 py-3 bg-[#B2456E] text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                                    Subscribe
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-white flex justify-center pt-5  italic'>By- Jai Singh Bhati</p>
                <p className=" text-white text-sm flex justify-center pt-5">© 2024 Zola. All rights reserved.</p>
            </section> 
            
    </div>
  )
}

export default Footer
