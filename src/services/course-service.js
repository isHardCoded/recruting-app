import { API_URL } from '../shared/constants'

export const COURSE_SERVICE = {
	getCourses: async () => {
		try {
			const response = await fetch(`${API_URL}/courses`)
			return await response.json()
		} catch (e) {
			return e
		}
	},
}
