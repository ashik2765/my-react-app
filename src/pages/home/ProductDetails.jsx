import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
    const data = useLoaderData();
    console.log(data);
  return (
    <div>
      <h1>Product details</h1>
    </div>
  )
}
