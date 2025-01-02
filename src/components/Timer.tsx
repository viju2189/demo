import React, { useEffect } from 'react'

const Timer = () => {
    const [time, setTime] = React.useState<number>(60);

    useEffect(() => {
        if (time <= 0) return
        const timer = setTimeout(() => {
            setTime((prev) => prev - 1)
        }, 1000)
        return () => clearTimeout(timer);
    }, [time]);

    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <span className='p-4 m-4 text-6xl border-4'> Time Left: {time} seconds</span>
        </div>
    )
}

export default Timer
