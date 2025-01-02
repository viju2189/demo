import axios from 'axios';
import React, { useEffect } from 'react';

interface IData {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const DataFetchingFromAPI = () => {
    const [data, setData] = React.useState<IData | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            if (response) {
                setData(response.data);
            }
        }
        catch (e: any) {
            <h1>ERROR:{e}</h1>
        }
    };

    // const fetchData = async () => {
    //     try {
    //         }
    //     }
    //     catch (e: any) {
    //         <h1>ERROR:{e}</h1>
    //     }
    // };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center h-[100vh] items-center ">
            {data &&
                <div className=''>
                    <p>{data.id}</p>
                    <p>{data.userId}</p>
                    <p>{data.title}</p>
                    <div>{data.body}</div>
                </div>
            }
        </div>
    )
}

export default DataFetchingFromAPI;
