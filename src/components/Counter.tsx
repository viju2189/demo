import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState<number>(0);
    const onIncreamentClick = () => {
        setCount(prev => prev + 1);
    };

    const onDecreamentClick = () => {
        setCount((prev) => prev > 0 ? prev - 1 : prev);
    };

    return (
        <div className='h-[50vh] flex flex-col justify-center items-center'>
            <h1 className='mb-10 text-5xl'>Counter</h1>
            <div className='flex items-center'>
                <button onClick={onIncreamentClick} className='px-4 text-5xl bg-slate-400 hover:bg-slate-600'>+</button>
                <h1 className='px-10 text-5xl'>{count}</h1>
                <button disabled={count === 0} onClick={onDecreamentClick} className={`px-4 text-5xl ${count === 0 ? 'bg-slate-200 cursor-not-allowed' : 'bg-slate-400 hover:bg-slate-600'}`}>-</button>
            </div>
        </div>
    );
};

export default Counter;
