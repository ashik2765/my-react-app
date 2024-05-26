import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({ shoe }) {
    console.log(shoe)
    const { id, name, price, description, image, categories } = shoe;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{image}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/product/${id}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    )
}
