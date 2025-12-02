import { COURSE_SERVICE } from '../services/course-service'
import Block from './Block.js'

export default async function CoursesList() {
	try {
		const courses = await COURSE_SERVICE.getCourses()

		if (!courses || courses.error) {
			return { courses: [], coursesListHTML: 'Ошибка загрузки курсов' }
		}

		const coursesListHTML = courses.map(course => Block(course)).join('')

		return { courses, coursesListHTML }
	} catch (error) {
		console.error('Ошибка:', error)
		return { courses: [], coursesListHTML: 'Не удалось загрузить курсы' }
	}
}
