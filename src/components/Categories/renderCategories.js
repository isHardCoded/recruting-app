import CategoryItem from './CategoryItem.js'

export function renderCategories(categories) {
	if (!categories || !categories.length) {
		return '<div class="empty-state">Категории не найдены</div>'
	}

	return categories.map(category => CategoryItem(category)).join('')
}
