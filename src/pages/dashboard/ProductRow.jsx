import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductRow({ item }) {

    const { id, name, price, image } = item;

    const handleDelete = () => {
        console.log('clicked')
    }
    const handleEdit = () => {
        console.log('clicked')
    }

    return (
        <tr>
            <td>1</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <div className="flex justify-evenly">
                    <button className="btn btn-sm"><Link to={`/product/${id}`}>See details</Link></button>
                    <button onClick={handleEdit} className="btn  btn-xs">Edit</button>
                    <button onClick={handleDelete} className="btn btn-ghost btn-xs">Delete</button>
                </div>
            </td>
        </tr>
    )
}
