
import { useLoaderData } from 'react-router-dom'
import Products from './Products'

export default function Home() {
    const shoe = useLoaderData();
    console.log(shoe);
    return (
        <div>
            <Products shoe={shoe}></Products>
        </div>
    )
}

