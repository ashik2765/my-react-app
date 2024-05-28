import React from 'react'

export default function Review() {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            review: 'These shoes are incredibly comfortable and stylish. Perfect for everyday wear!',
            rating: 5,
            image: 'https://i.ibb.co/t2RqBC4/portrait.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            review: 'I love the design and the fit is perfect. Highly recommend these shoes!',
            rating: 4,
            image: 'https://i.ibb.co/9YYvtmM/67165299-2372999789646303-3276992680285962240-n.jpg'
        },
        {
            id: 3,
            name: 'Sam Wilson',
            review: 'Great value for the price. These shoes have quickly become my favorite pair.',
            rating: 5,
            image: 'https://i.ibb.co/2cWr8hd/famus.jpg'
        }];

        const ReviewCard = ({ name, review, rating, image }) => (
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img className="w-24 h-24 rounded-full mb-4" src={image} alt={`${name}'s profile`} />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600 mb-4">{review}</p>
              <div className="flex justify-center">
                {Array(rating).fill().map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.167c.969 0 1.372 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.285 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.54-1.118l1.285-3.957a1 1 0 00-.364-1.118l-3.36-2.44c-.784-.57-.381-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.958z" />
                  </svg>
                ))}
              </div>
            </div>
          );
    return (
        <div className="bg-gray-100 py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </div>
    )
}
