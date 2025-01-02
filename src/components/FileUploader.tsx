import React, { useState } from 'react';

const FileUploader = () => {
    const [input, setInput] = useState();

    const onChange = (e: any) => {
        setInput(e.target.files[0]);
    };

    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <input type="file" accept='image/*' onChange={onChange} />
            <div>{
                input &&
                <img src={URL.createObjectURL(input)} alt="input" />
            }
            </div>
        </div>
    )
}

export default FileUploader;
