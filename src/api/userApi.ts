import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000
})

export const userApi = {
	fetchUsers: (): Promise<AxiosResponse> => {
		return instance.get('/users')
	},
	fetchUserById: (id: string): Promise<AxiosResponse> => {
		return instance.get(`/users/${id}`)
	}
}
