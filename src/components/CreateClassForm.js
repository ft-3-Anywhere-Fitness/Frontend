import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensityLevel: '',
    location: '',
    registeredAttendees: '',
    maxClassSize: '',
}
const CreateClassForm = () => {
    const history = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues)

    const ChangeHandler = (e) => {
        setFormValues({...formValues,[e.target.name]: e.target.value })
    };

    const handleButtonClick = () => {
        history.push('/classes');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('added new class!');

        // TODO - Add new class object to the database.

        history.push('/classes');
    };

    return (
        <div className='class-container'>
            <div className='label-container'>
                <h3 className='label-title'>Instructor</h3>
                <p className='label-button' onClick={handleButtonClick}>Manage Classes</p>
            </div>
            <div className='label-container'>
                <h3 className='label-title'>Create Class</h3>
            </div>
            <div className='card-container-no'>
                <form className='form-container' onSubmit={submitHandler}>
                    <input className='input-style' type="text" name="name" value={formValues.name} placeholder="Name" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="type" value={formValues.type} placeholder="Type" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="startTime" value={formValues.startTime} placeholder="Start Time" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="duration" value={formValues.duration} placeholder="Duration" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="intensityLevel" value={formValues.intensityLevel} placeholder="Intensity Level" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="location" value={formValues.location} placeholder="Location" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="registeredAttendees" value={formValues.registeredAttendees} placeholder="Registered Attendees" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="maxClassSize" value={formValues.maxClassSize} placeholder="Max Class Size" onChange={ChangeHandler}/>
                    <button className='input-style-no'>Add Class!</button>
                </form>
            </div>
        </div>
    )
}
export default CreateClassForm;