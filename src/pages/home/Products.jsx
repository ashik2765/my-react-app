import React from 'react'
import Product from './Product';

export default function Products({ shoe }) {
    console.log(shoe);
    return (
        <div className='flex flex-wrap gap-5 mx-16'>
            {
                shoe.slice(0,3).map(item => <Product key={item.id} shoe={item}></Product>)
            }
        </div>
    )
}
