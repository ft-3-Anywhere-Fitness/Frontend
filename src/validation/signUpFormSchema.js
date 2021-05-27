import * as yup from 'yup';

const schema = yup.object().shape({
	email:
		yup.string().trim()
			.required('A valid e-mail address is required')
			.email('A valid e-mail address is required'),

	password:
		yup.string()
			.required("Password is required")
			.min(8, "Passwords must be at least 8 characters")
			.matches(/[a-z]/, "Passwords must include at least one lowercase letter")
			.matches(/[A-Z]/, "Passwords must include at least one uppercase letter")
			.matches(/\d/, 'Passwords must include at least one number'),

	// passwordConfirm:
	// 	yup.string()
	// 		.required("Passwords must match")
	// 		.oneOf([yup.ref('password')]),

	fullName:
		yup.string().trim()
			.required("A full name is required"),

	isInstructor:
		yup.boolean()
			.optional(),

	instructorCode:
		yup.string().trim()
			.optional()
});

export default schema;
