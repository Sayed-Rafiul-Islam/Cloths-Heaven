import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const reviews = useReviews();

    return (
        <div className='mt-10 lg:mx-0 mx-auto'>
            <h1 className='text-3xl'>Words of <span className='text-red-500'>Customers</span></h1>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 px-5 mt-8'>
                {
                    reviews.map(review => <Review
                        review={review}
                    ></Review>)
                }

            </div>
        </div >
    );
};

export default Reviews;