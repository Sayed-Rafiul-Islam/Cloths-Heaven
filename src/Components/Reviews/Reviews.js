import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div className='mt-10'>
            <h1 className='text-3xl'>Words of Customers</h1>

            <div className='grid grid-cols-3 gap-3 px-5 mt-8'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;