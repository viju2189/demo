import React from 'react';
import data from '../utility/data';

const Accordian = () => {
    const [selected, setSelected] = React.useState<string | null>(null);
    const [enableMultiSelection, setEnableMultiSelection] = React.useState<boolean>(false);
    const [multiSelected, setMultiSelected] = React.useState<string[]>([]);

    const onClickSelectedItem = (getId: string) => {
        setSelected(selected === getId ? null : getId);
    };

    const onClickMultiSelectedItem = (getId: string) => {
        let copyMultiSelected = [...multiSelected];

        const findIndexOfCurrentId = copyMultiSelected.indexOf(getId);
        if (findIndexOfCurrentId === -1) {
            copyMultiSelected.push(getId);
        }
        else {
            copyMultiSelected.splice(findIndexOfCurrentId, 1);
        }
        setMultiSelected(copyMultiSelected);
    };

    return (
        <div className='flex flex-col items-center justify-center m-auto h-[100vh] bg-gray-100 w-full'>
            <h1 className='mb-4 text-3xl'>Accordian</h1>
            <div className='flex flex-col justify-center w-1/2 p-6 bg-white'>
                {
                    data && data.length > 0 ?
                        <div className="">
                            {
                                data.map((item) => (
                                    <div key={item.id} className="flex flex-col">
                                        <div className='flex justify-between p-4 my-2 bg-amber-200' onClick={enableMultiSelection ? () => onClickMultiSelectedItem(item.id) : () => onClickSelectedItem(item.id)}>
                                            <p>{item.question}</p>
                                            <span>+</span>
                                        </div>
                                        {enableMultiSelection ? multiSelected.includes(item.id) && <div className="p-4 bg-amber-100">{item.answer}</div> :
                                            selected === item.id && <div className="p-4 bg-amber-100">{item.answer}</div>
                                        }
                                    </div>
                                ))
                            }
                        </div> : null
                }
                {
                    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className='p-2 mt-4 text-white bg-orange-300'>
                        {
                            enableMultiSelection ? 'multi Selection' : 'Sigle Selection'
                        }
                    </button>
                }
            </div>

        </div>
    )
}

export default Accordian;
