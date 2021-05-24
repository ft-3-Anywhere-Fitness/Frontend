import styled from "styled-components";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import schema from './schema/signUpFormSchema';
import { boolean } from "yup/lib/locale";

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

/** Style for the SignUp component */
const SignInContainer = styled.div`

	/* * {
		border: 1px dotted #222222aa;
		background-color: #22222201;
		margin: 1px;
		padding: 1px;
	} */

	h3 {

	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.instructorRadio {
		display: flex;
		flex-direction: row;
	}
`;

const FormItem = styled.div`
	display: flex;
	flex-direction: row;

	.info {
		width: 20em;
		display: flex;
		flex-direction: column;
		text-align: right;
		margin: 2px;
		padding: 2px;
	}

input[type="text"] {
	width: 20em;
	height: 1.5em;
	margin: 4px;
}

	label {
		width: 100%;
	}
`;

/** Style for error text */
const ErrorText = styled.div`
	color: red;
	min-height: 1em;
	font-size: 1em;
`;

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

/** Component containing the new user sign up form */
const SignUp = props => {
	const { submitForm } = props;
	const [formValues, setFormValues] = useState(emptySignUpFormValues);
	const [formErrors, setFormErrors] = useState(emptySignUpFormErrors);
	const [isFormValid, setIsFormValid] = useState();


	useEffect(() => {
		schema.isValid(formValues).then(isValid => setIsFormValid(isValid));
	}, [formValues])


	/** helper function that updates formErrors with any validation errors */
	const validateField = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	}


	/** Callback for input 'onChange' event */
	const onChange = e => {
		const { name, value, type } = e.target;
		const valueToUse = type === "radio" ? value === "yes" : value;

		setFormValues({ ...formValues, [name]: valueToUse });
		validateField(name, valueToUse);
	}


	/** Call back for form 'onSubmit' event Prevents default submit behavior and calls submitForm() */
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
					<div className='info'>
						<label for="signup-email">E-mail address</label>
						<ErrorText>{formErrors.email}</ErrorText>
					</div>

					<input
						name="email" type="text" id="signup-email"
						value={formValues.email} onChange={onChange} />
				</FormItem>

				{/* --- Password --- */}
				<FormItem>
					<div className='info'>
						<label for="signup-password">Password</label>
						<ErrorText>{formErrors.password}</ErrorText>
					</div>
					<input
						name="password" type="password" id="signup-password"
						value={formValues.password} onChange={onChange} />
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
				<label>
					<label>
						Full Name
					</label>
					<ErrorText>{formErrors.fullName}</ErrorText>
					<input
						name="fullName" type="text" id="signup-full-name"
						value={formValues.fullName} onChange={onChange} />
				</label>

				{/* --- Client/Instructor --- */}
				<div className="instructorRadio">
					<p>Are you registering as an instructor?</p>
					<label>
						<p>Yes</p>
						<input
							type="radio" name="isInstructor" value="yes"
							checked={formValues.isInstructor} onChange={onChange} />
					</label>

					<label>
						<p>No</p>
						<input
							type="radio" name="isInstructor" value="no"
							checked={!formValues.isInstructor} onChange={onChange} />
					</label>
				</div>

				{/* --- Instructor Code --- */}
				{formValues.isInstructor &&
					<label>
						<label>
							Instructor Code
					</label>
						<ErrorText>{formErrors.instructorCode}</ErrorText>
						<input
							name="instructorCode" type="text" id="signup-instructor-code"
							value={formValues.instructorCode} onChange={onChange} />
					</label>
				}

				{/* ---  Submit Button --- */}
				<button id="signup-submit-button" disabled={!isFormValid}>Submit</button>

			</form>
		</SignInContainer>
	);
};

export default SignUp;