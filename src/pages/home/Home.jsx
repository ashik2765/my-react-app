
import { useLoaderData } from 'react-router-dom'
import Products from './Products'
import Banner from './Banner';
import Review from './Review';

export default function Home() {
    const shoe = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Products shoe={shoe}></Products>
            <Review></Review>
        </div>
    )
}

