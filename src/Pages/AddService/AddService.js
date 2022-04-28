import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add new Service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 ' placeholder='Name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-2' placeholder='Photo Url' {...register("img", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;