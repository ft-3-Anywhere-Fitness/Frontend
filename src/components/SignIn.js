import { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from '../validation/signInSchema'
import styled from 'styled-components'
import { SignInContainer, FormItem, ErrorText } from '../styles/FormStyles'

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