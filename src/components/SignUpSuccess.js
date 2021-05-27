const SignUpSuccess = props => {
	return (
		<div>
			<p>
				User signed up successfully!
			</p>
			<p>Here's your token! {localStorage.getItem('token')}</p>
		</div>

	);
};

export default SignUpSuccess;
