import { API_URL } from '../shared/constants.js'

async function fetchData(endpoint) {
	try {
		const response = await fetch(`${API_URL}${endpoint}`)
		if (!response.ok) throw new Error(`HTTP ${response.status}`)
		return await response.json()
	} catch (error) {
		console.error(`Error fetching ${endpoint}:`, error)
		throw error
	}
}

export const api = {
	getCourses: () => fetchData('/courses'),
	getCategories: () => fetchData('/categories'),
}
