import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function ProductRow({ item, onDelete }) {

    const { id, name, price, image } = item;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/shoe/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.length !== 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            onDelete(id);
                        }

                    })
            }
        });



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
                    <button className="btn btn-sm btn-primary"><Link to={`/product/${id}`}>See details</Link></button>
                    <button className="btn btn-sm"><Link to={`edit/${id}`}>Edit</Link></button>
                    <button onClick={handleDelete} className="btn btn-sm btn-error text-white">Delete</button>
                </div>
            </td>
        </tr>
    )
}
