import React from 'react';

const texts = [
    'aaaaaaaaaaaaaaa bbbbbbbbbbb', 'cccccccc dddddddddddddd', 'eeeeeeeee ffffff ijiodjgd', 'serjsn kjriej znj\dukh',
    'aaaaaaaaaaaaaaa bbbbbbbbbbb', 'cccccccc dddddddddddddd', 'eeeeeeeee ffffff ijiodjgd', 'serjsn kjriej znj\dukh'

]

const textIndex = Math.floor(Math.random() * texts.length);
const text = texts[textIndex];

const RandomText = () => {

    return (
        <div>
            {text}
        </div>
    )
}

export default RandomText;
