import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
    const data = useLoaderData();
    const { id, name, description, image, price, categories } = data;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-1/3' src={image} alt="Album" /></figure>
            <div className="card-body w-auto">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl text-red-700'>${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    )
}
