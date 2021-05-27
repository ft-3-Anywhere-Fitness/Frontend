import styled from 'styled-components';

// styled components
export const SignInContainer = styled.section`
	max-width: 20em;
	text-align: left;
	padding: 2%;
	margin: 5% auto;
	/* background-color: #808080; */
	background-color: #f6f6f6;
	color: #2d2941;
	/* text-shadow: 0px 0px 10px black; */
	/* box-shadow: 0px 0px 10px black; */
	border-radius: 8px;
	border: 5px solid #434f63;

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	h2 {
		margin: .5em 0em .2em;
		text-align: center;
	}

	button {
		width: 40%;
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

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;

	label {
		font-weight: 500;
		margin: .5em;
	}

	input {
		padding: .5em;
		font-size: 1.2em;
		border: 1px solid black;
	}

	input.invalid {
		border: 1px solid #e92200;
	}

	input:focus {
		box-shadow: 0 0 0 4px #0088FF33;
	}

	input.invalid:focus {
		box-shadow: 0 0 0 4px #e9220044;
	}

	input:focus-visible {
		outline: none;
	}
`;

export const ErrorText = styled.div`
	color: white;
	min-height: 1em;
	font-size: 1em;
	text-shadow: none;
	margin-left: 1em;
	margin-top: .5em;
`;