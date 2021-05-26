import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: ${props => props.theme.primaryColor};

    h1{
        padding: 2%;
        margin: 0;
        text-shadow: 0px 0px 10px black;
        letter-spacing: .1em;
        color: white;
    }
`;

const StyledSection1 = styled.section`
    background-image: url('https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
    height: 50vh;
    background-size: cover;
    background-attachment: fixed;
`;

const StyledSection2 = styled.section`
    background-image: url('https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80');
    height: 50vh;
    background-size: cover;
    background-attachment: fixed;
`;

const FillerSection = styled.section`
    height: 50vh;

`;

const StyledFooter = styled.footer`
    color: white;
    text-shadow: 0px 0px 10px black;
    display: flex;
    background-color: ${props => props.theme.secondaryColor};
    padding: 2% 0;
    div{
        width: 100%;
    }
    
`;

export default function Home( {SignIn, SignUp} ) {
    return(
        <StyledContainer>
            <h1>Anywhere Fitness</h1>
            <StyledSection1>

            </StyledSection1>
            <FillerSection>

            </FillerSection>
            <StyledSection2>

            </StyledSection2>
            <StyledFooter>
                <div>
                <h2>Already a Member?</h2>
                    <SignIn />
                    </div>
                    <div>
                        <h2>Not a Member Yet?</h2>
                    <SignUp />
                    </div>
            </StyledFooter>
        </StyledContainer>
    )
}