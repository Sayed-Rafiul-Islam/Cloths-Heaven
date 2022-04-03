import React from 'react';
import { Line } from 'recharts';

const Review = (props) => {
    const { image, name, review, rating } = props.review;
    return (
        <div>
            <div className='flex items-center border-2 border-red-500 text-left p-3 rounded-lg bg-red-100'>
                <div>
                    <img className='w-36 h-36 rounded-full' src={image} alt="" />
                </div>
                <div className='ml-4'>
                    <h3>{name}</h3>
                    <p className='italic font-semibold'>{review}</p>
                    <p className='italic'><small>Rating : <span className='text-red-500'>{rating}</span></small></p>
                </div>
            </div>
        </div>

    );
};

export default Review;