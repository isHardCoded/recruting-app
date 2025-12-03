import { renderCourses } from '../components/Courses/renderCourses.js'

export function initSearch({ courses, container, input }) {
	let allCourses = courses

	function handleSearch(event) {
		const query = event.target.value.toLowerCase()

		const filteredCourses = allCourses.filter(
			course =>
				course.title?.toLowerCase().includes(query) ||
				course.author?.toLowerCase().includes(query)
		)

		container.innerHTML = renderCourses(filteredCourses)
	}

	input.addEventListener('input', handleSearch)

	return {
		updateCourses: newCourses => {
			allCourses = newCourses
		},
	}
}
