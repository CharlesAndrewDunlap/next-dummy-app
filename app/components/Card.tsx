import React from 'react'
import { Delete } from './Delete';
import { Update } from './Update';

export function Card(props: any) {
    // console.log('hello from card');
    return (
        <div className='card'>{props.comment}
            <Update />
            <Delete />
        </div>
    )
}