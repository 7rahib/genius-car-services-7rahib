import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices()
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://enigmatic-depths-52435.herokuapp.com/service/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .them(data => {
                    const remaining = services.filter(service => service._id !== _id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div>
            <h2>Manage your services</h2>
            {
                services.map(service => <div className='d-flex m-4' key={service._id}><h5>{service.name}</h5>
                    <button onClick={() => handleDelete(service._id)} className='btn btn-primary ms-2'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;