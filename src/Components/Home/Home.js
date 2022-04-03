import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import image from '../../images/cloths.png';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = reviews.slice(3);
    const navigate = useNavigate();

    const showAllReviews = () => {
        navigate('/reviews');
    }
    return (
        <div className='mt-12 pb-36'>
            <div className='grid grid-cols-2 mb-12'>
                <div className='text-left p-4'>
                    <h1>BUY THE BEST <span className='text-red-500'>CLOTHS</span></h1>
                    <p className='italic pr-12'>You can find various types of clothing stuff in this website. We always make sure that the quality of our products remain top notch. And customer satisfaction if our top priority. Don't have to believe us, just rome around the reviews section and you will know. Happy Shopping !</p>
                </div>
                <div>
                    <img className="w-3/4 ml-28 rounded-3xl" src={image} alt="" />
                </div>
            </div>
            <div>
                <h1><span className='text-red-500'>R</span>eviews [{homeReviews.length}] </h1>
                <div className='grid grid-cols-3 gap-3 px-5 mt-8 mb-4'>
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