import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import '../styles/ManageClasses.css';

const ManageClasses = (props) => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: '',
        password: '',
        fullName: '',
        instructorCode: '',
    });

    const [createdClasses, setCreatedClasses] = useState([]);
    const [scheduledClasses, setScheduledClasses] = useState([]);
    const [availableClasses, setAvailableClasses] = useState([]);

    useEffect(() => {
        // TODO - Get user data from the database and check if they are an instrcutor or client, which then loads the appropriate data.
        setUser({ email: 'test@email.com', password: 'Test12345', fullName: 'Test', instructorCode: 'RANDOM' });
    }, []);

    useEffect(() => {
        Axios.get('https://anywhere-fitness-3-ft.herokuapp.com/api/classes')
            .then(res => {
                setCreatedClasses(res.data);
                setAvailableClasses(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleButtonClick = () => {
        const Role = user.instructorCode.length > 0 ? 'Instructor' : 'Client';

        switch (Role) {
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
    };

    const handleAvailable = (id) => {
        const Find = availableClasses.find(x => x.fitness_class_id === id);
        setScheduledClasses([...scheduledClasses, Find]);
        const Filter = availableClasses.filter(x => x.fitness_class_id !== id);
        setAvailableClasses([...Filter]);
    };

    const handleScheduled = (id) => {
        const Find = scheduledClasses.find(x => x.fitness_class_id === id);
        setAvailableClasses([...availableClasses, Find]);
        const Filter = scheduledClasses.filter(x => x.fitness_class_id !== id);
        setScheduledClasses([...Filter]);
    };

    return (
        <div className='class-container'>
            {
                user.instructorCode.length > 0
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
                                            <div key={created.fitness_class_id} className='card-container' onClick={() => handleEditClass(created.fitness_class_id)} >
                                                <p><span className='text-highlight'>Name:</span> {created.fitness_class_name}</p>
                                                <p><span className='text-highlight'>Type:</span> {created.fitness_class_type}</p>
                                                <p><span className='text-highlight'>Start Time:</span> {created.start_time}</p>
                                                <p><span className='text-highlight'>Duration:</span> {created.duration}</p>
                                                <p><span className='text-highlight'>Intensity Level:</span> {created.intensity_level}</p>
                                                <p><span className='text-highlight'>Location:</span> {created.location}</p>
                                                <p><span className='text-highlight'>Registered Attendees:</span> {created.fitness_class_attendees}</p>
                                                <p><span className='text-highlight'>Class Size:</span> {created.fitness_class_max}</p>
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
                        availableClasses.length > 0
                        &&
                        <Fragment>
                            <div className='label-container'>
                                <h3 className='label-title'>Available</h3>
                            </div>
                            <div className='data-container'>
                                {
                                    availableClasses.map(available => {
                                        return (
                                            <div key={available.fitness_class_id} className='card-container' onClick={() => handleAvailable(available.fitness_class_id)} >
                                                <p><span className='text-highlight'>Name:</span> {available.fitness_class_name}</p>
                                                <p><span className='text-highlight'>Type:</span> {available.fitness_class_type}</p>
                                                <p><span className='text-highlight'>Start Time:</span> {available.start_time}</p>
                                                <p><span className='text-highlight'>Duration:</span> {available.duration}</p>
                                                <p><span className='text-highlight'>Intensity Level:</span> {available.intensity_level}</p>
                                                <p><span className='text-highlight'>Location:</span> {available.location}</p>
                                                <p><span className='text-highlight'>Registered Attendees:</span> {available.fitness_class_attendees}</p>
                                                <p><span className='text-highlight'>Class Size:</span> {available.fitness_class_max}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    }
                    {
                        scheduledClasses.length > 0
                        &&
                        <Fragment>
                            <div className='label-container'>
                                <h3 className='label-title'>Scheduled</h3>
                            </div>
                            <div className='data-container'>
                                {
                                    scheduledClasses.map(available => {
                                        return (
                                            <div key={available.fitness_class_id} className='card-container' onClick={() => handleScheduled(available.fitness_class_id)} >
                                                <p><span className='text-highlight'>Name:</span> {available.fitness_class_name}</p>
                                                <p><span className='text-highlight'>Type:</span> {available.fitness_class_type}</p>
                                                <p><span className='text-highlight'>Start Time:</span> {available.start_time}</p>
                                                <p><span className='text-highlight'>Duration:</span> {available.duration}</p>
                                                <p><span className='text-highlight'>Intensity Level:</span> {available.intensity_level}</p>
                                                <p><span className='text-highlight'>Location:</span> {available.location}</p>
                                                <p><span className='text-highlight'>Registered Attendees:</span> {available.fitness_class_attendees}</p>
                                                <p><span className='text-highlight'>Class Size:</span> {available.fitness_class_max}</p>
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
