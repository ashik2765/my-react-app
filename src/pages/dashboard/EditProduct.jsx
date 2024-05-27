import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function EditProduct() {
    const shoe = useLoaderData();
    const { id, name, brand, categories, price, image, description } = shoe;

    const hadnleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const brand = form.brand.value;
        const name = form.name.value;
        const categories = form.categories.value;
        const price = form.price.value;
        const image = form.imgUrl.value;
        const description = form.description.value;

        const data = { id, brand, name, categories, price, image, description };
        console.log(data)
        await fetch(`http://localhost:3000/shoe/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product edited successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    };
    return (
        <form onSubmit={hadnleAddProduct}>
            <h1 className="text-center text-3xl mb-10">Edit Product</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label className="input input-bordered w-full flex items-center gap-2">
                    ID
                    <input type="number" name="id" defaultValue={id} className="grow" placeholder="02" disabled />
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                    Name
                    <input type="text" defaultValue={name} name="name" className="grow" placeholder="Snekers" />
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                    Brand
                    <input type="text" defaultValue={brand} name="brand" className="grow" placeholder="Apex" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Categories
                    <input type="text" defaultValue={categories} name="categories" className="grow" placeholder="Sports" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Price
                    <input type="number" defaultValue={price} name="price" className="grow" placeholder="$" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Image
                    <input type="text" defaultValue={image} name="imgUrl" className="grow" placeholder="Image-URL" />
                </label>
                <textarea name="description" defaultValue={description} className="textarea textarea-bordered col-span-2" placeholder="Description"></textarea>
            </div>
            <button className="btn btn-primary mt-5 w-full">Edit</button>
        </form>
    )
}
