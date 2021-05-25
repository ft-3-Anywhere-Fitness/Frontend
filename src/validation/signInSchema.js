import * as yup from 'yup'

const signInSchema = yup.object().shape( {
    email: yup
        .string()
        .trim()
        .required('Email is required')
        .email('A valid email is required'),
    password: yup
        .string()
        .trim()
        .required("Password is required"),
})

export default signInSchema