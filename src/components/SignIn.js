import { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from '../validation/signInSchema'
import styled from 'styled-components'

// styled components
const SignInContainer = styled.section`
	max-width: 25%;
	text-align: left;
	padding: 2%;
	margin: 5% auto;
	background-color: #808080;
    color: white;
    text-shadow: 0px 0px 10px black;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	button {
		width: 25%;
		align-self: center;
		padding: 2%;
		border: none;
		color: white;
		/* transition: 0.5s; */
		background-color: #BEBEBE;
		color: white;
		box-shadow: 0px 0px 10px black;
		border-radius: 10px;
		margin-top: 3%;
		font-size: 1em;
		font-weight: 500;
	}
	button:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
	button:disabled {
		background-color: #fafafa;
		color: #bdbdbd;
	}
	button:hover:disabled {
		cursor: auto;
		transform: scale(1);
	}
`;

const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;

	label {
		font-weight: 500;
		margin: 3%;
	}
	input {
		padding: 3%;
		font-size: 1.2em;
	}
	input.invalid {
		border: 2px solid red;
	}
`;

const ErrorText = styled.div`
	color: red;
	min-height: 1em;
	font-size: 1em;
`;

const initialSignIn = []

const initialFormValues = {
	email: '',
	password: '',
}

const initialFormErrors = {
	email: '',
	password: '',
}

const initialDisabled = true;

const SignIn = props => {
const [signInInfo, setSignInInfo] = useState(initialSignIn)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const onChange = (evt) => {
	const { name, value } = evt.target
	validate(name, value)
	setFormValues({...formValues, [name]: value})
}

const validate = (name, value) => {
	yup.reach(schema, name)
		.validate(value)
		.then(() => setFormErrors({...formErrors, [name]: ''}))
		.catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const onSubmit = (evt) => {
	evt.preventDefault()
	const newSignIn = {
		username: formValues.email.trim(),
		password: formValues.password.trim(),
	}
	// postNewSignIn(newSignIn)
}

// const postNewSignIn = newSignIn => {

// }


useEffect(() => {
	schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

	return (
		<SignInContainer>
			<h2>Sign In</h2>
			<form onSubmit={onSubmit}>
				<FormItem>
					<label>Email</label>
						<input 
							type='email'
							name='email'
							placeholder='enter email'
							onChange={onChange}
							value={formValues.email}
							className={formErrors.email ? 'invalid' : ''}
						/>
					<ErrorText>{formErrors.email}</ErrorText>
				</FormItem>

				<FormItem>
					<label>Password</label>
						<input 
							type='password'
							name='password'
							placeholder='enter password'
							onChange={onChange}
							value={formValues.password}
							className={formErrors.password ? 'invalid' : ''}
						/>
					<ErrorText>{formErrors.password}</ErrorText>
				</FormItem>
				<button disabled={disabled}>Sign In</button>
			</form>
		</SignInContainer>
	)
 };

export default SignIn;