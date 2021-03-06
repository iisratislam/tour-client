import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])

        useEffect(() => {
            fetch('https://howling-castle-16701.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setServices(data))
        }, [])
        const handelDelete = id => {
            const url = `https://howling-castle-16701.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount){
                        alert('remove successfully')
                        const remaining = services.filter(service => service._id !==id);
                        setServices(remaining);
                    }
                })

        }
        return (
            <div>
                <h1>Manage Services</h1>
                {
                    services.map(service => <div key={service._id}>
                        <h3>{service.name}</h3>
                        <button onClick={() => handelDelete(service._id)}>Delete</button>
                    </div>)
                }
            </div>
        );
    };

    export default ManageServices;