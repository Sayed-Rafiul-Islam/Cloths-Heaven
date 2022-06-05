type ReviewProps = {
    review: {
        id?: string,
        name?: string,
        image?: string,
        rating?: string,
        review?: string
    }
}

const Review = (props: ReviewProps) => {
    const { image, name, review, rating } = props.review;
    return (
        <div>
            <div className='flex lg:flex-row items-center flex-col border-2 lg:h-40 h-80 border-red-500 text-left lg:p-2 p-3 rounded-lg bg-red-100'>
                <div className='lg:w-1/4 w-1/2 lg:mr-4 mx-auto'>
                    <img className='rounded-full' src={image} alt="" />
                </div>
                <div className='lg:pt-3  w-full pl-5 pt-3'>
                    <h3>{name}</h3>
                    <p className='italic font-semibold'>{review}</p>
                    <p className='italic'><small>Rating : <span className='text-red-500'>{rating}</span></small></p>
                </div>
            </div>
        </div>

    );
};

export default Review;