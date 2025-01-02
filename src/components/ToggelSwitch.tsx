import React from 'react';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";

const ToggelSwitch = () => {
    const [toggle, setToggle] = React.useState<boolean>(false);

    const onClick = () => {
        setToggle(!toggle);
    };

    const handleChange = () => {
        setToggle(!toggle);
    }

    return (
        <div className="flex flex-col justify-center h-[100vh] items-center ">
            {
                toggle ?
                    <button className='text-5xl' onClick={onClick}><FaToggleOn /></button> :
                    <button className='text-5xl' onClick={onClick}><FaToggleOff /></button>
            }
            <input type="checkbox" onChange={handleChange} />
            {
                toggle ? 'ON' : 'OFF'
            }
        </div>
    );
};

export default ToggelSwitch;
