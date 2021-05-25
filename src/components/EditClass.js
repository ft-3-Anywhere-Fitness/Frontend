import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Data = {
    name: '',
    type: '',
    start_time: '',
    duration: '',
    intensity_level: '',
    location: '',
    current_attendees: '',
    max_attendees: ''
};

const EditClass = () => {
    const history = useHistory();

    const { id } = useParams();

    const [values, setValues] = useState(Data);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setValues({ ...values, [name]: value });

    };

    const handleButtonClick = () => {
        history.push('/classes');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/classes');
    };

    return (
        <div className='class-container'>
            <div className='label-container'>
                <h3 className='label-title'>Instructor</h3>
                <p className='label-button' onClick={handleButtonClick}>Manage Classes</p>
            </div>
            <div className='label-container'>
                <h3 className='label-title'>Edit Class</h3>
            </div>
            <div className='card-container-no'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <input
                        className='input-style'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        placeholder='Name'
                    />
                    <input
                        className='input-style'
                        name='type'
                        value={values.type}
                        onChange={handleChange}
                        placeholder='Type'
                    />
                    <input
                        className='input-style'
                        name='start_time'
                        value={values.start_time}
                        onChange={handleChange}
                        placeholder='Start Time'
                    />
                    <input
                        className='input-style'
                        name='duration'
                        value={values.duration}
                        onChange={handleChange}
                        placeholder='Duration'
                    />
                    <input
                        className='input-style'
                        name='intensity_level'
                        value={values.intensity_level}
                        onChange={handleChange}
                        placeholder='Intensity Level'
                    />
                    <input
                        className='input-style'
                        name='location'
                        value={values.location}
                        onChange={handleChange}
                        placeholder='Location'
                    />
                    <input
                        className='input-style'
                        name='current_attendees'
                        value={values.current_attendees}
                        onChange={handleChange}
                        placeholder='Registered Attendees'
                    />
                    <input
                        className='input-style'
                        name='max_attendees'
                        value={values.max_attendees}
                        onChange={handleChange}
                        placeholder='Class Size'
                    />
                    <button className='input-style-no' type='submit'>Edit Class</button>
                </form>
            </div>
        </div>
    )

};

export default EditClass;
