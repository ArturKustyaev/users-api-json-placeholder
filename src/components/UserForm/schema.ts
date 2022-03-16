import * as yup from 'yup'

export const schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^([^0-9]*)$/, 'field must not contain numbers')
		.required('Enter name'),
	username: yup.string().required('Enter username'),
	email: yup.string().email('Invalid email').required('Enter email'),
	street: yup.string().required('	Enter your name'),
	city: yup
		.string()
		.matches(/^([^0-9]*)$/, 'field must not contain numbers')
		.required('Enter city'),
	zipcode: yup
		.string()
		.matches(/^([0-9-]*)$/, 'field must not contain letters')
		.required('Enter zipcode'),
	phone: yup.string().required('Enter phone'),
	website: yup.string().required('Enter website'),
	comment: yup.string()
})
