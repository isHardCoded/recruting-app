import Block from './components/Block.js'

let allCourses = []
let coursesContainer = null

export function initSearch({ courses, container, input }) {
	allCourses = courses
	coursesContainer = container

	input.addEventListener('input', handleSearch)
}

function handleSearch(event) {
	const query = event.target.value.toLowerCase()

	const filteredCourses = allCourses.filter(
		course =>
			course.title?.toLowerCase().includes(query) ||
			course.author?.toLowerCase().includes(query)
	)

	const filteredHTML = filteredCourses.map(course => Block(course)).join('')
	coursesContainer.innerHTML = filteredHTML
}
