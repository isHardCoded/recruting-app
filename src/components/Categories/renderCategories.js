import CategoryItem from './CategoryItem.js'

export function renderCategories(categories) {
	if (!categories || !categories.length) {
		return '<div class="empty-state">Categories not found</div>'
	}

	return categories.map(category => CategoryItem(category)).join('')
}
