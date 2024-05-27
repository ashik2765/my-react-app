import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ProductRow({ item }) {

    const { id, name, price, image } = item;

    const handleDelete = () => {
        console.log('clicked')
    }
    const handleEdit = async () => {
        console.log('clicked')
        const { value: formValues } = await Swal.fire({
            title: "Multiple inputs",
            html: `
              <input id="swal-input1" class="swal2-input">
              <input id="swal-input2" class="swal2-input">
              <input id="swal-input3" class="swal2-input">
            `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                    document.getElementById("swal-input3").value
                ];
            }
        });
        if (formValues) {
            <h1>Done</h1>
        }
        console.log(formValues)
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
