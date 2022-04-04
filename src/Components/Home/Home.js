import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import image from '../../images/cloths.png';
import { useNavigate } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = reviews.slice(3);
    const navigate = useNavigate();

    const showAllReviews = () => {
        navigate('/reviews');
    }
    return (
        <div className='mt-12 pb-36 lg:mx-0 mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1 mb-12'>
                <div className='lg:text-left lg:ml-0 text-justify ml-8 p-4'>
                    <h1 className='center mr-9 mb-4 lg:text-left lg-mx-0 lg:mb-0'>BUY THE BEST <span className='text-red-500'>CLOTHS</span></h1>
                    <p className='italic pr-12'>You can find various types of clothing stuff in this website. We always make sure that the quality of our products remain top notch. And customer satisfaction if our top priority. Don't have to believe us, just rome around the reviews section and you will know. Happy Shopping !</p>
                </div>
                <div className='lg:ml-0 mx-auto w-3/4'>
                    <img className="lg:w-3/4 lg:ml-28 rounded-3xl" src={image} alt="" />
                </div>
            </div>
            <div>
                <h1><span className='text-red-500'>R</span>eviews [{homeReviews.length}] </h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 px-5 mt-8 mb-4'>
                    {
                        homeReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <button onClick={() => showAllReviews()} className='bg-red-600 text-white px-8 py-2 rounded-md' >See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;