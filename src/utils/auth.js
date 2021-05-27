import axios from "axios";

export const signIn = (username, password) => {
	const newSignIn = { username, password };

	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('https://anywhere-fitness-3-ft.herokuapp.com/api/auth/login', newSignIn);
			console.log('user succesfully signed in');
			console.log(response);
			localStorage.setItem('token', response.data.token);
			resolve(response);
		} catch (error) {
			console.log('error trying to sign in');
			console.log(error);
			reject(error);
		}
	});
};