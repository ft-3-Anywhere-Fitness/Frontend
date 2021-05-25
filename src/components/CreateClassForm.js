import React, { useState } from 'react'

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
    const [formValues, setFormValues] = useState(initialFormValues)
    const ChangeHandler = (e) => {
        setFormValues({...formValues,[e.target.name]: e.target.value })
    }

const submitHandler = (e) => {
    e.preventDefault()
    console.log('added new class!');
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                Name
                    <input type="text" name="name" value={formValues.name} onChange={ChangeHandler}/>
                </label>
                <label>
                Type
                    <input type="text" name="type" value={formValues.type} onChange={ChangeHandler}/>
                </label>
                <label>
                Start Time
                    <input type="text" name="startTime" value={formValues.startTime} onChange={ChangeHandler}/>
                </label>
                <label>
                Duration
                    <input type="text" name="duration" value={formValues.duration} onChange={ChangeHandler}/>
                </label>
                <label>
                Intensity Level
                    <input type="text" name="intensityLevel" value={formValues.intensityLevel} onChange={ChangeHandler}/>
                </label>
                <label>
                Location
                    <input type="text" name="location" value={formValues.location} onChange={ChangeHandler}/>
                </label>
                <label>
                Registered Attendees
                    <input type="text" name="registeredAttendees" value={formValues.registeredAttendees} onChange={ChangeHandler}/>
                </label>
                <label>
                Max Class Size
                    <input type="text" name="maxClassSize" value={formValues.maxClassSize} onChange={ChangeHandler}/>
                </label>
                <button> Add Class! </button>
            </form>
        </div>
    )
}
export default CreateClassForm;