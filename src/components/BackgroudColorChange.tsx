import React from 'react'

const BackgroudColorChange = () => {
    const colors = ['pink', 'blue', 'green', 'yellow', 'purple'];
    const [colorIndex, setColorIndex] = React.useState<number>(0);

    const onClick = () => {
        setColorIndex((prev)=>prev+1 % colors.length)  
    };

    return (
        <div className={`h-[100vh] flex flex-col justify-center items-center`} style={{backgroundColor: colors[colorIndex]}}>
            <button onClick={onClick}>Change Background color</button>
        </div>
    )
}

export default BackgroudColorChange
