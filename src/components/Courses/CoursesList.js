import { api } from '../../services/api.js'

export async function getCourses() {
	try {
		return await api.getCourses()
	} catch (error) {
		console.error('Failed to load courses:', error)
		return []
	}
}
