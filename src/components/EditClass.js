import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';

const EditClass = () => {
    const history = useHistory();

    const { id } = useParams();

    const [values, setValues] = useState({});

    useEffect(() => {
        Axios.get(`https://anywhere-fitness-3-ft.herokuapp.com/api/classes/${id}`)
            .then(res => {
                setValues(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;

        setValues({ ...values, [name]: value });

    };

    const handleButtonClick = () => {

        history.push('/classes');

    };

    const handleUpdate = (e) => {

        e.preventDefault();

        Axios.put(`https://anywhere-fitness-3-ft.herokuapp.com/api/classes/${id}`, values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

        history.push('/classes');

    };

    const handleDelete = (e) => {

        e.preventDefault();

        Axios.delete(`https://anywhere-fitness-3-ft.herokuapp.com/api/classes/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

        history.push('/classes');

    };

    return (
        <div className='class-container'>
            <div className='label-container'>
                <h3 className='label-title'>Instructor</h3>
                <p className='label-button' onClick={handleButtonClick}>Manage Classes</p>
            </div>
            <div className='label-container'>
                <h3 className='label-title'>Update/Delete Class</h3>
            </div>
            <div className='card-container-no'>
                <form className='form-container'>
                    <input
                        className='input-style'
                        name='fitness_class_name'
                        value={values.fitness_class_name}
                        onChange={handleChange}
                        placeholder='Name'
                    />
                    <input
                        className='input-style'
                        name='fitness_class_type'
                        value={values.fitness_class_type }
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
                        name='fitness_class_attendees'
                        value={values.fitness_class_attendees }
                        onChange={handleChange}
                        placeholder='Registered Attendees'
                    />
                    <input
                        className='input-style'
                        name='fitness_class_max'
                        value={values.fitness_class_max}
                        onChange={handleChange}
                        placeholder='Max Class Size'
                    />
                    <button className='input-style-no' type='button' onClick={handleUpdate}>Update Class</button>
                    <button className='input-style-no' type='button' onClick={handleDelete}>Delete Class</button>
                </form>
            </div>
        </div>
    )

};

export default EditClass;
