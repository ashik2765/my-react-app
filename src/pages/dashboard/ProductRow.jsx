import React from 'react'
import { Link } from 'react-router-dom';


export default function ProductRow({ item, onDelete }) {

    const { id, name, price, image } = item;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/shoe/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                onDelete(id);
                console.log(data)

            })
    };
    
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
                    <button className="btn btn-xs"><Link to={`edit/${id}`}>Edit</Link></button>
                    <button onClick={handleDelete} className="btn btn-ghost btn-xs">Delete</button>
                </div>
            </td>
        </tr>
    )
}
