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

    return (
        <div>
            <form>
                <label>
                name
                    <input type="text" name="name" value={formValues.name} onChange={ChangeHandler}/>
                </label>
                <label>
                type
                    <input type="text" name="type" value={formValues.type} onChange={ChangeHandler}/>
                </label>
                <label>
                startTime
                    <input type="text" name="startTime" value={formValues.startTime} onChange={ChangeHandler}/>
                </label>
                <label>
                duration
                    <input type="text" name="duration" value={formValues.duration} onChange={ChangeHandler}/>
                </label>
                <label>
                intensity level
                    <input type="text" name="intensityLevel" value={formValues.intensityLevel} onChange={ChangeHandler}/>
                </label>
                <label>
                location
                    <input type="text" name="location" value={formValues.location} onChange={ChangeHandler}/>
                </label>
                <label>
                registered attendees
                    <input type="text" name="registeredAttendees" value={formValues.registeredAttendees} onChange={ChangeHandler}/>
                </label>
                <label>
                max class size
                    <input type="text" name="maxClassSize" value={formValues.maxClassSize} onChange={ChangeHandler}/>
                </label>

            </form>
        </div>
    )
}

export default CreateClassForm
