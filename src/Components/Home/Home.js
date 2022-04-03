import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = reviews.slice(3);
    return (
        <div>
            <div className='grid grid-cols-2 bg-gray-400'>
                <div className=''>
                    <h1>BUY THE BEST CLOTHS</h1>
                    <p>You can find various types of clothing stuff in this website. We always make sure that the quality of our products remain top notch. And customer satisfaction if our top priority. Don't have to believe us, just rome around the reviews section and you will know. Happy Shopping !</p>
                </div>
                <div className='bg-gray-600'>
                    <h1>hey </h1>
                    <img src="./cloths.png" alt="" />
                </div>
            </div>
            <h1>Reviews </h1>
            <div className='grid grid-cols-3 gap-3 px-5 mt-8'>
                {
                    homeReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Home;