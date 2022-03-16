import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000
})

export const userApi = {
	fetchUsers: (sort: string | null): Promise<AxiosResponse> => {
		return instance.get('/users', {
			params: {
				_sort: sort
			}
		})
	},
	fetchUserById: (id: string): Promise<AxiosResponse> => {
		return instance.get(`/users/${id}`)
	}
}
