import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css'


const BgContainer = styled.div`
    background-color: lightgrey;
`
const DivContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-evenly;
    margin-top: 1rem;
`

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 1rem;
    width: 15rem;
    border: 2px solid black;
    background-color: lightgrey;
    margin: 1.5rem 0;
`

const StyledBtn = styled.button`
  align-items: center;
  width: 200px;
  height: 36px;
  border-radius: 18px;
  background-color: #1c89ff;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover {
    background-color: black;
    border-color: #fff;
    transition: all .1s ease-in-out;
  }
`

const initialClass = [
    {
      id: 1,
      name: 'Muscle Building Burn',
      type: 'Weight Lifting',
      start_time: '9am',
      duration: '1hr',
      intensity_level: 'Easy',
      location: 'Planet Fitness',
      current_attendees: 10,
      max_attendees: 15
    },
    {
        id: 2,
        name: 'Fat Loss Supreme',
        type: 'Cardio',
        start_time: '10am',
        duration: '1hr',
        intensity_level: 'Medium',
        location: 'Harbor Fitness',
        current_attendees: 20,
        max_attendees: 35
      },
    {
        id: 3,
        name: 'Fat Loss Supreme',
        type: 'Cardio',
        start_time: '10am',
        duration: '1hr',
        intensity_level: 'Medium',
        location: 'Harbor Fitness',
        current_attendees: 20,
        max_attendees: 35
      },
  ]

const InstructorPage = () => {
    const [classList, setClassList] = useState(initialClass)

    const { push } = useHistory()

    const createButtonHandler = () => {
        push('/createclass')
    }
    return (
        <BgContainer>
            <h2 className="class-title"> List of Classes! </h2>
            <StyledBtn onClick={createButtonHandler}>Create a New Class</StyledBtn>

            <DivContainer>
                {classList.map((item) => {
                    return <InfoDiv className="fit-classes">
                        <h4> Name: {item.name} </h4>
                        <h4> Type: {item.type} </h4>
                        <h4> Start Time: {item.start_time} </h4>
                        <h4> Duration: {item.duration} </h4>
                        <h4> Intensity: {item.intensity_level} </h4>
                        <h4> Location: {item.location} </h4>
                        <h4> Current Attendees: {item.current_attendees} </h4>
                        <h4> Max Class Size: {item.max_attendees} </h4>
                         </InfoDiv>
                })
                }
            </DivContainer>


        </BgContainer>
    )
}
export default InstructorPage