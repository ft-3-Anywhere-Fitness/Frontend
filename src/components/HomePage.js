import styled from 'styled-components'
import '../styles/ManageClasses.css';
import photo1 from '../images/photo-1.jfif';
import photo2 from '../images/photo-2.jfif';
import background1 from '../images/background-1.jpg';

const StyledContainer = styled.div`
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;

    color: ${p => p.theme.white};

    h1 {
        padding: 2%;
        margin: 0;
        text-shadow: 0px 0px 20px black;
        letter-spacing: .1em;
        text-transform: uppercase;
        font-size: 5em;
        @media ${props => props.theme.breakpointTablet} {
            font-size: 3.5em;
        }
    }

    h3 {
        text-shadow: 0px 0px 10px black;
        letter-spacing: .1em;
        font-size: 2.5em;
        padding: 10%;
        text-shadow: 0px 0px 20px black;
    }

    p {
        font-size: 1.6em;
        text-align: justify;
        width: 75%;
        margin: auto;
        padding: 1em 0em;
        text-shadow: 0px 0px 1px black;
        @media ${props => props.theme.breakpointTablet} {
            font-size: 1.2em;
        }
    }
`;

const StyledSection1 = styled.section`
    background-image: url(${photo2});
    height: 50vh;
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 10vh; */
`;

const InfoSection = styled.section`
    background-image: linear-gradient(#353949,#26203d);
    padding: 1em 0em;
    margin: auto;
`;

const StyledSection2 = styled.section`
    background-image: url(${photo1});
    height: 50vh;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledFooter = styled.footer`
    /* text-shadow: 0px 0px 10px black; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: linear-gradient(#2d2941, #20232c);
    padding: 2%;

    &>div {
        width: 48%;
        padding: 2%;
    }

    @media ${props => props.theme.breakpointTablet} {
        flex-direction: column;
        align-items: center;

        &>div {
            width: 75%;
        }
    }
`;

export default function Home({ SignIn, SignUp }) {
    return (
        <StyledContainer>
            <StyledSection1>
                <h1>Anywhere Fitness</h1>
            </StyledSection1>
            <InfoSection>
                <div>
                    <p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</p>
                    <p><strong>AnywhereFitness</strong> is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.</p>
                    <p>Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.</p>
                </div>
            </InfoSection>
            <StyledSection2>
                <h3>Find classes near you today!</h3>
            </StyledSection2>
            <StyledFooter>
                <div>
                    <h2 id="sign-in-h2">Already a Member?</h2>
                    <SignIn />
                </div>
                <div>
                    <h2 id="sign-up-h2">Not a Member Yet?</h2>
                    <SignUp />
                </div>
            </StyledFooter>
        </StyledContainer>
    )
}