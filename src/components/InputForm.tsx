import React from 'react'

const InputForm = () => {
    const [value, setValue] = React.useState<string>('');

    const onChange = (e:any) => {
        setValue(e.target.value);
    };

    const onSubmit = (e:any) =>{
        e.preventDefault();
        return 
    }

    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <form action="" className='flex' onSubmit={onSubmit}>
                <input type="text" value={value} onChange={(e)=>onChange(e)} className='m-5 border-2' />
                <button>Submit</button>
            </form>
            <div className=''>User Input: {value}</div>
        </div>
    )
}

export default InputForm
