import axios from 'axios';
import React, { useEffect } from 'react'

interface IImageSlider {
    url: string;
    limit: number;
    page: string;
}
const ImageSlider: React.FC<IImageSlider> = ({ url, page, limit }) => {
    const [images, setImage] = React.useState<string[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = React.useState<number>(0);
    const [error, setError] = React.useState<string | null>(null);

    const fetchImages = async (getUrl: string) => {
        setLoading(true)
        try {
            const response = await axios.get(`${getUrl}?page=${page}=1&limit=${limit}`);
            if (response) {
                setImage(response.data);
                setLoading(false)
            }
        }
        catch (e: any) {
            setError(e.message);
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    console.log(images);
    

    if (loading) {
        return <div className="div">Loading...</div>
    }

    if (error !== null) {
        return <div className="div">error occured! {error}</div>
    }

    return (
        <div className='bg-gray-100 h-[100vh]'>

        </div>
    )
}

export default ImageSlider;
