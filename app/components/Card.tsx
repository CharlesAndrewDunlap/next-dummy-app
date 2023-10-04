import React from 'react'
import { Delete } from './Delete';
import { Update } from './Update';

export function Card (props: any) {

    return (
        <div className='card'>{props.comment}
            <Update />
            <Delete />
        </div>
    )
}