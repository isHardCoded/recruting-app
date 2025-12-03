import { renderCourses } from './components/Courses/renderCourses.js'
import { renderCategories } from './components/Categories/renderCategories.js'
import { getCourses } from './components/Courses/CoursesList.js'
import { getCategories } from './components/Categories/CategoriesList.js'
import { initSearch } from './features/search.js'
import { initCategoryFilters } from './features/filters.js'

class App {
	constructor() {
		this.courses = []
		this.categories = []
		this.search = null
		this.filters = null

		this.searchInput = document.getElementById('search')
		this.coursesContainer = document.querySelector('.courses-list')
		this.categoriesContainer = document.querySelector('.panel__categories')
	}

	async init() {
		try {
			await this.loadData()
			this.render()
			this.bindEvents()
		} catch (error) {
			this.handleError(error)
		}
	}

	async loadData() {
		this.showLoading()

		const [courses, categories] = await Promise.all([
			getCourses(),
			getCategories(),
		])

		this.courses = courses
		this.categories = categories
	}

	render() {
		this.coursesContainer.innerHTML = renderCourses(this.courses)

		const allCategory = {
			id: 'all',
			name: 'All',
			count: this.courses.length,
		}

		const categoriesWithAll = [allCategory, ...this.categories]
		this.categoriesContainer.innerHTML = renderCategories(categoriesWithAll)

		const firstBtn = this.categoriesContainer.querySelector(
			'.panel__category-btn'
		)
		if (firstBtn) firstBtn.classList.add('active')
	}

	bindEvents() {
		this.search = initSearch({
			courses: this.courses,
			container: this.coursesContainer,
			input: this.searchInput,
		})

		this.filters = initCategoryFilters({
			container: this.categoriesContainer,
			courses: this.courses,
			coursesContainer: this.coursesContainer,
		})
	}

	showLoading() {
		this.coursesContainer.innerHTML = '<div class="loading">Загрузка...</div>'
		this.categoriesContainer.innerHTML =
			'<div class="loading">Загрузка...</div>'
	}

	handleError(error) {
		console.error('Application error:', error)
		this.coursesContainer.innerHTML = `
      <div class="error-state">
        <p>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</p>
        <button onclick="location.reload()">Попробовать снова</button>
      </div>
    `
	}
}

export default App
