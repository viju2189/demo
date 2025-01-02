import React from 'react';

const Login = () => {
    const [currentStatus, setCurrentStatus] = React.useState<string>('signUP');
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const onSubmit = (e: any) => {
        e.preventDefault();
    };

    const onEmailChange = (e: any) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: any) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const onNameChange = (e: any) => {
        e.preventDefault();
        setName(e.target.value);
    };

    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <form onSubmit={onSubmit}>
                {
                    currentStatus === 'login' ?
                        <div className='flex flex-col'>
                            <input type="email" value={email} placeholder='Email...' className='my-3 border' onChange={onEmailChange} />
                            <input type="password" value={password} placeholder='Password...' className='my-3 border' onChange={onPasswordChange} />
                        </div> :
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Name...' className='my-3 border' value={name} onChange={onNameChange} />
                            <input type="email" value={email} placeholder='Email...' className='my-3 border' onChange={onEmailChange} />
                            <input type="password" value={password} placeholder='Password...' className='my-3 border' onChange={onPasswordChange} />
                        </div>
                }
                <div>
                    {
                        currentStatus === 'login' ?
                            <button onClick={() => setCurrentStatus('signup')}>Sign Up</button> :
                            <button onClick={() => setCurrentStatus('login')}>Login</button>
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;