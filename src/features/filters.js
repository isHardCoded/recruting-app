import { renderCourses } from '../components/Courses/renderCourses.js'

export function initCategoryFilters({ container, courses, coursesContainer }) {
	let allCourses = courses

	let activeButton =
		container.querySelector('.panel__category-btn.active') || null

	function handleCategoryClick(e) {
		const button = e.target.closest('.panel__category-btn')
		if (!button) return

		const categoryName = button.dataset.categoryName

		if (activeButton === button && categoryName === 'All') {
			return
		}

		if (activeButton === button && categoryName !== 'All') {
			button.classList.remove('active')
			activeButton = container.querySelector('[data-category-name="All"]')
			activeButton.classList.add('active')

			coursesContainer.innerHTML = renderCourses(allCourses)
			return
		}

		if (activeButton) {
			activeButton.classList.remove('active')
		}

		button.classList.add('active')
		activeButton = button

		if (categoryName === 'All') {
			coursesContainer.innerHTML = renderCourses(allCourses)
			return
		}

		const filteredCourses = allCourses.filter(
			course => course.category === categoryName
		)

		coursesContainer.innerHTML = renderCourses(filteredCourses)
	}

	container.addEventListener('click', handleCategoryClick)

	return {
		updateCourses: newCourses => {
			allCourses = newCourses
		},
	}
}
