import React from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStar = 5 }) => {
    const [rating, setRating] = React.useState<number>(0);
    const [hoverRating, setHoverRating] = React.useState<number>(0);

    const onClick = (getIndexOf: number) => {
        setRating(getIndexOf);
    };

    return (
        <div className="flex flex-col justify-center h-[100vh] items-center ">
            <h1 className='mb-8 text-3xl'>Star Rating</h1>
            <div className='flex'>
                {
                    [...Array(totalStar)].map((_, index) => {
                        index += 1
                        return (
                            <FaStar
                                key={index}
                                className={index <= (hoverRating || rating) ? 'text-yellow-300' : 'text:black'}
                                onClick={() => onClick(index)}
                                onKeyDown={(e) => e.key === 'Enter' && onClick(index)}
                                onMouseMove={() => setHoverRating(index)}
                                onMouseLeave={() => setHoverRating(rating)}
                                size={40}
                            />)
                    })}
            </div>
        </div>
    );
};

export default StarRating;
