import { useState, useEffect } from 'react'

const initialUsers = []

const initialFormValues = {
	username: '',
	password: '',
}

const initialFormErrors = {
	username: '',
	password: '',
}

const SignIn = props => {
const [signInInfo, setSignInInfo] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const onChange = (evt) => {
	const { name, value } = evt.target
	setFormValues({...formValues, [name]: value})
	console.log(formValues)
}

const onSubmit = () => {
	const newSignIn = {
		username: formValues.username.trim(),
		password: formValues.password.trim(),
	}
}

	return (
		<div>
			<h2>Sign In</h2>
			<form onSubmit={onSubmit}>
				<label>
					<input 
						type='text'
						name='username'
						placeholder='enter username'
						onChange={onChange}
						value={formValues.username}
					/>
				</label>
				<label>
					<input 
						type='password'
						name='password'
						placeholder='enter password'
						onChange={onChange}
						value={formValues.password}
					/>
				</label>
				<button>Sign In</button>
			</form>
		</div>
	)
 };

export default SignIn;