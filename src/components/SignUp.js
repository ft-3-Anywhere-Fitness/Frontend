import styled from "styled-components";

/*
	Required form fields:
		- e-mail address (used for sign in) [name=email]
		- password (used for sign in) [name=password]
		- full name (it's a networking site where people meet up - full name is required) [name=fullName]
		- instructor code (used to denote a user as being an 'instructor' vs a regular 'client') [name=instructorCode]

	other fields we might implement:
		- primary location/region
		- checklist of fitness activities/interests
*/


const SignInContainer = styled.div`
	background-color: #22222244;
	border: 1px dotted #22222288;

	h3 {

	}
`;

const SignUp = props => {
	return (
		<SignInContainer>
			<h3>Sign up</h3>
		</SignInContainer>
	);
};

export default SignUp;