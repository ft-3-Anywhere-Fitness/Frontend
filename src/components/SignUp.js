import styled from "styled-components";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import schema from '../validation/signUpFormSchema';
import { SignInContainer, FormItem, ErrorText } from '../styles/FormStyles'
import warning from '../images/g4.svg';
import axios from "axios";
import { signIn } from "../utils/auth";

/*
	Required form fields:
		- e-mail address (used for sign in) [name=email]
		- password (used for sign in) [name=password]
		- password confirm [name=passwordConfirm]
		- full name (it's a networking site where people meet up - full name is required) [name=fullName]
		- instructor code (used to denote a user as being an 'instructor' vs a regular 'client') [name=instructorCode]

	other fields we might implement:
		- primary location/region
		- checklist of fitness activities/interests
*/

/** Empty formValues object for initial state */
const emptySignUpFormValues = {
	email: '',
	password: '',
	passwordConfirm: '',
	fullName: '',
	isInstructor: '',
	instructorCode: '',
}

/** Empty formErrors object for initial state */
const emptySignUpFormErrors = { ...emptySignUpFormValues };

const InputError = styled.img`
	position: absolute;
	top: 50%;
	right: .7em;
	margin-top: -9px;
	pointer-events: none;
`;

/** Component containing the new user sign up form */
const SignUp = () => {
	const [formValues, setFormValues] = useState(emptySignUpFormValues);
	const [formErrors, setFormErrors] = useState(emptySignUpFormErrors);
	const [isFormValid, setIsFormValid] = useState(true);
	const history = useHistory();


	const submitForm = formData => {
		// user registration stuff goes here
		// for now, I'm just gonna log it and redirect

		const newUser = {
			username: formData.email,
			password: formData.password
		}

		axios.post('https://anywhere-fitness-3-ft.herokuapp.com/api/auth/register', newUser)
			//sign up was sucessful, so go ahead and sign in
			.then(response => signIn(newUser.username, newUser.password))
			.then(response => history.push('/signupsuccess'))
			.catch(error => {
				console.log(error);
			});
	};


	/** sets 'isFormValid' as formValues changes */
	useEffect(() => {
		schema.isValid(formValues).then(isValid => {
			setIsFormValid(isValid);
		});
	}, [formValues]);


	/** helper function that updates formErrors with any validation errors */
	const validateField = (name, value) => {
		return yup.reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	};


	/** Callback for input 'onChange' event */
	const onChange = e => {
		const { name, value, type, checked } = e.target;
		const valueToUse = type === "checkbox" ? checked : value;

		setFormValues({ ...formValues, [name]: valueToUse });

		validateField(name, valueToUse);
	};


	/** Call back for 'onSubmit' event - prevents default submit behavior and calls submitForm() */
	const onSubmit = e => {
		e.preventDefault();

		//double check the form is valid before calling the provided submitForm callback
		schema.isValid(formValues).then(isValid => {
			if (isValid)
				submitForm(formValues);
		});
	};

	return (
		<SignInContainer>
			<h2>Sign up</h2>

			<form onSubmit={onSubmit}>

				{/* --- Email Address --- */}
				<FormItem>
					<label htmlFor="signup-email">Email address</label>

					<div style={{ position: 'relative', display: 'flex' }}>
						<input style={{ width: '100%' }}
							name="email" type="text" id="signup-email"
							className={formErrors.email ? "invalid" : ""}
							value={formValues.email} onChange={onChange} />

						{formErrors.email &&
							<InputError src={warning} alt="warning" width='20' height='20' />
						}
					</div>

					{formErrors.email &&
						<ErrorText>{formErrors.email}</ErrorText>
					}
				</FormItem>

				{/* --- Password --- */}
				<FormItem>
					<label htmlFor="signup-password">Password</label>

					<div style={{ position: 'relative', display: 'flex' }}>
						<input style={{ width: '100%', paddingRight: formErrors.password ? '35px' : 'inherit' }}
							name="password" type="password" id="signup-password"
							className={formErrors.password ? "invalid" : ""}
							value={formValues.password} onChange={onChange} />

						{formErrors.password &&
							<InputError src={warning} alt="warning" width='20' height='20' />
						}
					</div>

					{formErrors.password &&
						<ErrorText>{formErrors.password}</ErrorText>
					}
				</FormItem>

				{/* --- Password Confirmation --- */}
				{/* --- removing this for the time being because I couldn't get Yup to validate it properly
								and I didn't want to keep wasting time on it
				<label>
					<p>
						Confirm Password
					</p>
					<ErrorText>{formErrors.passwordConfirm}</ErrorText>
					<input
						name="passwordConfirm" type="password" id="signup-password-confirm"
						value={formValues.passwordConfirm} onChange={onChange} />
				</label> */}

				{/* --- Full Name --- */}
				<FormItem>
					<label htmlFor="signup-full-name">Full Name</label>
					<div style={{ position: 'relative', display: 'flex' }}>
						<input style={{ width: '100%' }}
							name="fullName" type="text" id="signup-full-name"
							className={formErrors.fullName ? "invalid" : ""}
							value={formValues.fullName} onChange={onChange} />

						{formErrors.fullName &&
							<InputError src={warning} alt="warning" width='20' height='20' />
						}
					</div>

					{formErrors.fullName &&
						<ErrorText>{formErrors.fullName}</ErrorText>
					}
				</FormItem>

				{/* --- Instructor Checkbox --- */}
				<FormItem>
					<label>
						<input
							name="isInstructor" type="checkbox" id="signup-is-instructor"
							checked={formValues.isInstructor} onChange={onChange} />
						Are you registering as an instructor?
					</label>
				</FormItem>

				{/* --- Instructor Code --- */}
				{formValues.isInstructor &&
					<FormItem>
						<label htmlFor="signup-instructor-code">Instructor Code</label>
						<div style={{ position: 'relative', display: 'flex' }}>
							<input style={{ width: '100%' }}
								name="instructorCode" type="text" id="signup-instructor-code"
								value={formValues.instructorCode} onChange={onChange} />

							{formErrors.instructorCode &&
								<InputError src={warning} alt="warning" width='20' height='20' />
							}
						</div>
						<ErrorText>{formErrors.instructorCode}</ErrorText>
					</FormItem>
				}

				{/* ---  Submit Button --- */}
				<button id="signup-submit-button" disabled={!isFormValid}>Submit</button>

			</form>
		</SignInContainer>
	);
};

export default SignUp;