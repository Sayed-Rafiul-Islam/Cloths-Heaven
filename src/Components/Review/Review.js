import React from 'react';

const Review = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div>
            <div className=' border-2 border-gray-500 text-left p-3'>
                <h3>{name}</h3>
                <p className='italic font-semibold'>{review}</p>
                <p className='italic'><small>Rating : {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;