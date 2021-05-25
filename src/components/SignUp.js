import styled from "styled-components";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import schema from './schema/signUpFormSchema';

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
	instructorCode: '',
}

/** Empty formErrors object for initial state */
const emptySignUpFormErrors = { ...emptySignUpFormValues };

/** Style for the SignUp component */
const SignInContainer = styled.div`
	max-width: 20em;
	margin: auto;
	text-align: left;

	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100%;
	}
`;

const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0px;
	margin-right: 0px;

	label {
		font-weight: 500;
		margin: .3em;
	}

	input {
		padding: .5em;
		font-size: 1.2em;
	}

	input.invalid {
		border: 2px solid red;
	}

`;

/** Style for error text */
const ErrorText = styled.div`
	color: red;
	min-height: 1em;
	font-size: 1em;
`;


/** Component containing the new user sign up form */
const SignUp = props => {
	const { submitForm } = props;
	const [formValues, setFormValues] = useState(emptySignUpFormValues);
	const [formErrors, setFormErrors] = useState(emptySignUpFormErrors);
	const [isFormValid, setIsFormValid] = useState(true);


	/** sets 'isFormValid' as formValues changes */
	useEffect(() => {
		schema.isValid(formValues).then(isValid => {
			setIsFormValid(isValid);
		});
	}, [formValues]);


	/** helper function that updates formErrors with any validation errors */
	const validateField = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	}


	/** Callback for input 'onChange' event */
	const onChange = e => {
		const { name, value, type, checked } = e.target;
		const valueToUse = type === "checkbox" ? checked : value;

		setFormValues({ ...formValues, [name]: valueToUse });
		validateField(name, valueToUse);
	}


	/** Call back for 'onSubmit' event - prevents default submit behavior and calls submitForm() */
	const onSubmit = e => {
		e.preventDefault();

		// double check the form is valid before calling the provided submitForm callback
		schema.isValid(formValues).then(isValid => {
			if (isValid)
				submitForm(formValues);
		});
	};

	return (
		<SignInContainer>
			<h3>Sign up</h3>

			<form onSubmit={onSubmit}>

				{/* --- Email Address --- */}
				<FormItem>
					<label htmlFor="signup-email">Email address</label>
					<input
						name="email" type="text" id="signup-email"
						className={formErrors.email ? "invalid" : ""}
						value={formValues.email} onChange={onChange} />
					<ErrorText>{formErrors.email}</ErrorText>
				</FormItem>

				{/* --- Password --- */}
				<FormItem>
					<label htmlFor="signup-password">Password</label>
					<input
						name="password" type="password" id="signup-password"
						className={formErrors.password ? "invalid" : ""}
						value={formValues.password} onChange={onChange} />
					<ErrorText>{formErrors.password}</ErrorText>
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
					<input
						name="fullName" type="text" id="signup-full-name"
						className={formErrors.fullName ? "invalid" : ""}
						value={formValues.fullName} onChange={onChange} />
					<ErrorText>{formErrors.fullName}</ErrorText>
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
						<input
							name="instructorCode" type="text" id="signup-instructor-code"
							value={formValues.instructorCode} onChange={onChange} />
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