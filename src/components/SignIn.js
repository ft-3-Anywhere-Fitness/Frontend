import { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from '../validation/signInSchema'

const initialSignIn = []

const initialFormValues = {
	username: '',
	password: '',
}

const initialFormErrors = {
	username: '',
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
		username: formValues.username.trim(),
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
		<div>
			<h2>Sign In</h2>
			<form onSubmit={onSubmit}>
				<label>Username:&nbsp;
					<input 
						type='text'
						name='username'
						placeholder='enter username'
						onChange={onChange}
						value={formValues.username}
					/>
				</label>
				<div>{formErrors.username}</div>
				<label>Password:&nbsp;
					<input 
						type='password'
						name='password'
						placeholder='enter password'
						onChange={onChange}
						value={formValues.password}
					/>
				</label>
				<div>{formErrors.password}</div>
				<button disabled={disabled}>Sign In</button>
			</form>
		</div>
	)
 };

export default SignIn;