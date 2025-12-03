import CourseItem from './CourseItem.js'

export function renderCourses(courses) {
	if (!courses || !courses.length) {
		return '<div class="empty-state"><p class="lato-regular">Курсы не найдены</p></div>'
	}

	return courses.map(course => CourseItem(course)).join('')
}
