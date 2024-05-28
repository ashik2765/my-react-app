import React from 'react'
import Product from './Product';

export default function Products({ shoe }) {

    return (
        <div className='mt-8'>
            <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
            <div className='flex flex-wrap gap-5 mx-16'>
                {
                    shoe.map(item => <Product key={item.id} shoe={item}></Product>)
                }
            </div>
        </div>

    )
}
