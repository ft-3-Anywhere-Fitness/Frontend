import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/ManageClasses.css';

const Data = [
    {
        id: 1,
        name: 'First',
        type: 'weight lifting',
        start_time: '9am',
        duration: '1hr',
        intensity_level: 'easy',
        location: 'Planet Fitness',
        current_attendees: 10,
        max_attendees: 15
    },
    {
        id: 2,
        name: 'Second',
        type: 'weight lifting',
        start_time: '9am',
        duration: '1hr',
        intensity_level: 'easy',
        location: 'Planet Fitness',
        current_attendees: 10,
        max_attendees: 15
    },
    {
        id: 3,
        name: 'Third',
        type: 'weight lifting',
        start_time: '9am',
        duration: '1hr',
        intensity_level: 'easy',
        location: 'Planet Fitness',
        current_attendees: 10,
        max_attendees: 15
    },
    {
        id: 4,
        name: 'Fourth',
        type: 'weight lifting',
        start_time: '9am',
        duration: '1hr',
        intensity_level: 'easy',
        location: 'Planet Fitness',
        current_attendees: 10,
        max_attendees: 15
    }
];

const ManageClasses = (props) => {
    const history = useHistory();

    const [user, setUser] = useState({
        username: '',
        pssword: '',
        role: ''
    });

    const [createdClasses, setCreatedClasses] = useState([]);
    const [scheduledClasses, setScheduledClasses] = useState([]);
    const [availableClasses, setAvailableClasses] = useState([]);

    useEffect(() => {
        setUser({ username: 'Test', password: 'Test', role: 'Instructor' });
        setCreatedClasses([...Data]);
        // setScheduledClasses([...Data]);
        setAvailableClasses([...Data]);
    }, []);

    const handleButtonClick = () => {
        switch (user.role) {
            case ('Instructor'): {
                history.push('/classes/create');
                break;
            }
            case ('Client'): {
                history.push('/');
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleEditClass = (id) => {
        history.push(`/classes/${id}`);
    }
;
    const handleScheduled = (id) => {
        const Find = scheduledClasses.find(x => x.id == id);
        setAvailableClasses([...availableClasses, Find]);
        const Filter = scheduledClasses.filter(x => x.id != id);
        setScheduledClasses([...Filter]);
    };

    const handleAvailable = (id) => {
        const Find = availableClasses.find(x => x.id == id);
        setScheduledClasses([...scheduledClasses, Find]);
        const Filter = availableClasses.filter(x => x.id != id);
        setAvailableClasses([...Filter]);
    };

    return (
        <div className='class-container'>
            {
                user.role === 'Instructor'
                ?
                <Fragment>
                    <div className='label-container'>
                        <h3 className='label-title'>Instructor</h3>
                        <p className='label-button' onClick={handleButtonClick}>Create Class</p>
                    </div>
                    {
                        createdClasses.length > 0
                        &&
                        <Fragment>
                            <div className='label-container'>
                                <h3 className='label-title'>Classes</h3>
                            </div>
                            <div className='data-container'>
                                {
                                    createdClasses.map(created => {
                                        return (
                                            <div className='card-container' onClick={() => handleEditClass(created.id)} >
                                                <p><span className='text-highlight'>Name:</span> {created.name}</p>
                                                <p><span className='text-highlight'>Type:</span> {created.type}</p>
                                                <p><span className='text-highlight'>Start Time:</span> {created.start_time}</p>
                                                <p><span className='text-highlight'>Duration:</span> {created.duration}</p>
                                                <p><span className='text-highlight'>Intensity Level:</span> {created.intensity_level}</p>
                                                <p><span className='text-highlight'>Location:</span> {created.location}</p>
                                                <p><span className='text-highlight'>Registered Attendees:</span> {created.current_attendees}</p>
                                                <p><span className='text-highlight'>Class Size:</span> {created.max_attendees}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    }
                </Fragment>
                :
                <Fragment>
                    <div className='label-container'>
                        <h3 className='label-title'>Client</h3>
                        <p className='label-button' onClick={handleButtonClick}>Home Page</p>
                    </div>
                    {
                        scheduledClasses.length > 0
                        &&
                        <Fragment>
                            <div className='label-container'>
                                <h3 className='label-title'>Scheduled</h3>
                            </div>
                            <div className='data-container'>
                                {
                                    scheduledClasses.map(avaiable => {
                                        return (
                                            <div className='card-container' onClick={() => handleScheduled(avaiable.id)} >
                                                <p><span className='text-highlight'>Name:</span> {avaiable.name}</p>
                                                <p><span className='text-highlight'>Type:</span> {avaiable.type}</p>
                                                <p><span className='text-highlight'>Start Time:</span> {avaiable.start_time}</p>
                                                <p><span className='text-highlight'>Duration:</span> {avaiable.duration}</p>
                                                <p><span className='text-highlight'>Intensity Level:</span> {avaiable.intensity_level}</p>
                                                <p><span className='text-highlight'>Location:</span> {avaiable.location}</p>
                                                <p><span className='text-highlight'>Registered Attendees:</span> {avaiable.current_attendees}</p>
                                                <p><span className='text-highlight'>Class Size:</span> {avaiable.max_attendees}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    }
                    {
                        availableClasses.length > 0
                        &&
                        <Fragment>
                            <div className='label-container'>
                                <h3 className='label-title'>Available</h3>
                            </div>
                            <div className='data-container'>
                                {
                                    availableClasses.map(avaiable => {
                                        return (
                                            <div className='card-container' onClick={() => handleAvailable(avaiable.id)} >
                                                <p><span className='text-highlight'>Name:</span> {avaiable.name}</p>
                                                <p><span className='text-highlight'>Type:</span> {avaiable.type}</p>
                                                <p><span className='text-highlight'>Start Time:</span> {avaiable.start_time}</p>
                                                <p><span className='text-highlight'>Duration:</span> {avaiable.duration}</p>
                                                <p><span className='text-highlight'>Intensity Level:</span> {avaiable.intensity_level}</p>
                                                <p><span className='text-highlight'>Location:</span> {avaiable.location}</p>
                                                <p><span className='text-highlight'>Registered Attendees:</span> {avaiable.current_attendees}</p>
                                                <p><span className='text-highlight'>Class Size:</span> {avaiable.max_attendees}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    }
                </Fragment>
            }
        </div>
    )
}


export default ManageClasses;
