import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20'>
            <div className='text-left px-5'>
                <h1>What is <span className='text-red-500'>semantics?</span></h1>
                <p className='italic'>Semantic elements mean elements with meaning. These elements help developers identify different elements of the website easily.Not only developers, these elements also help search engines and other associated technologies to understand the codes greatly. For example, {'<header></header>'} is a semantic tag which means the codes inside this tag are the codes that made that websites heading section. And this is understandable for both developers and browsers.</p>
            </div>

            <div className='text-left px-5 mt-5'>
                <h1>What is the difference between <span className='text-red-500'>inline, block, inline-block</span> elements?</h1>
                <p className='italic'><span className='text-red-500'>Inline :</span> An inline element does not start a new line. It takes up only the space that is required for that specific element, which means if there is space left it is possible to create another element right beside it. <br />
                    <span className='text-red-500'>Block :</span> A block element always starts a new line, when we create a block element, it takes up the full width which means we cannot create another element in that line. <br />
                    <span className='text-red-500'>Inline-Block :</span> Inline-block elements are similar to inline elements, expect we can add padding to all four sides of it.We have to set display : inline-block; in the css file.
                </p>

            </div>
        </div>
    );
};

export default Blogs;