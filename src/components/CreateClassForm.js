import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    fitness_class_name: '',
    fitness_class_type: '',
    start_time: '',
    duration: '',
    intensity_level: '',
    location: '',
    fitness_class_attendees: '',
    fitness_class_max: '',
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

        axios.post('https://anywhere-fitness-3-ft.herokuapp.com/api/classes', formValues)
        .then(res => console.log(res))
        .catch(err => console.log(err))

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
                    <input className='input-style' type="text" name="fitness_class_name" value={formValues.fitness_class_name} placeholder="Name" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="fitness_class_type" value={formValues.fitness_class_type} placeholder="Type" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="start_time" value={formValues.start_time} placeholder="Start Time" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="duration" value={formValues.duration} placeholder="Duration" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="intensity_level" value={formValues.intensity_level} placeholder="Intensity Level" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="location" value={formValues.location} placeholder="Location" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="fitness_class_attendees" value={formValues.fitness_class_attendees} placeholder="Registered Attendees" onChange={ChangeHandler}/>
                    <input className='input-style' type="text" name="fitness_class_max" value={formValues.fitness_class_max} placeholder="Max Class Size" onChange={ChangeHandler}/>
                    <button className='input-style-no'>Add Class!</button>
                </form>
            </div>
        </div>
    )
}
export default CreateClassForm;