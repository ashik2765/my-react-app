import React from 'react'

export default function Banner() {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vwCCTJ9/bannerrr.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Step Into Comfort</h1>
                <p className="text-lg md:text-2xl text-white mb-8">Discover the perfect pair for every occasion</p>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    )
}
