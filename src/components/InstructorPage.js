import React from 'react'
import { useHistory } from 'react-router-dom'
const InstructorPage = () => {
    
    const { push } = useHistory()

    const createButtonHandler = () => {
        push('/createclass')
    }
    return (
        <div>
            <h2> **Show a list of all classes here with edit and delete option possibly??**</h2>
            <button onClick={createButtonHandler}>Create a Class</button>
        </div>
    )
}
export default InstructorPage