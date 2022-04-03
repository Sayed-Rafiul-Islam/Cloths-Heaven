import React from 'react';

const Review = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div>
            <div className=' border-2 border-red-500 text-left p-3 rounded-lg bg-red-100'>
                <h3>{name}</h3>
                <p className='italic font-semibold'>{review}</p>
                <p className='italic'><small>Rating : <span className='text-red-500'>{rating}</span></small></p>
            </div>
        </div>
    );
};

export default Review;