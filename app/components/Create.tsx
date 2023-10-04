'use client';
import React, { useState, useEffect } from 'react';

export function Create() {
    const [commentForm, setCommentForm] = useState('');
    const [error, setError] = useState([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('api/comment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                commentForm
            }),
        });

        
        const { msg } = await res.json();
        setError(msg);

    };
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='comment-form'>Comment:  </label>
                <input name='comment-form' onChange={(e) => setCommentForm(e.target.value)} value={commentForm}></input>
                <button type='submit'>Add Card</button>
            </form>
        </div>
    )
}