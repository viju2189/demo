import React from 'react'

const ListComponent = () => {
    const items = ['item1', 'item2', 'item3', 'item4'];
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>

            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListComponent
