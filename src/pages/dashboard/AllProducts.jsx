import { useEffect, useState } from "react"
import ProductRow from "./ProductRow";

export default function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/shoe")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    return (

        <div className="overflow-x-auto w-full mx-5">
            <h1 className="text-3xl text-center p-5">All Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th><div className="text-center">action</div></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => <ProductRow key={item.id} item={item}></ProductRow>)
                    }
                </tbody>


            </table>
        </div>

    )
}
