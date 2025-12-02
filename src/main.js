import CoursesList from './components/List.js'
import { initSearch } from './search.js'

const searchInput = document.getElementById('search')
const coursesContainer = document.querySelector('.courses-list')

async function init() {
	const result = await CoursesList()

	let courses = []
	let coursesListHTML = ''

	if (result.courses) {
		courses = result.courses
		coursesListHTML = result.coursesListHTML
	} else {
		coursesListHTML = result
	}

	coursesContainer.innerHTML = coursesListHTML

	initSearch({
		courses,
		container: coursesContainer,
		input: searchInput,
	})
}

init()
