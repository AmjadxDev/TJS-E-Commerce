import { Link } from 'react-router-dom';
import {Hero, FlashSale, Categories, BestSelling, NewArrival, Arivals, Featured} from '../Index.jsx';

export default function Home() {
    
    return (
        <>
        <Hero />
        <FlashSale />
        <Categories />
        <BestSelling />
        <NewArrival />
        <Featured />
        <Arivals />
        </>
    );
}