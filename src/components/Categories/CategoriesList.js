import { api } from '../../services/api.js'

export async function getCategories() {
	try {
		return await api.getCategories()
	} catch (error) {
		console.error('Failed to load categories:', error)
		return []
	}
}
