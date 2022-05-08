import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = review => {
        const url = 'http://localhost:5000/rating';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(result=> {
            console.log(result);
            review.target.reset();
        });
    };
    return (
        <div className='w-50 mx-auto mt-3'>
            <h2 className='text-success my-2'>Give a Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <input className='mb-3' placeholder='Email' {...register("email")} />
                <textarea className='mb-3' placeholder='Comment' {...register("comment")} />
                <input className='mb-3' placeholder='Rating' type="number" {...register("rating")} />
                <input type="submit" value="Review" />
            </form>
        </div>
    );
};

export default Review;