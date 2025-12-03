export default function CategoryItem(category) {
	return `
    <button 
      class="panel__category-btn lato-bold" 
      data-category-id="${category.id}"
      data-category-name="${category.name}"
    >
        ${category.name}
        <span class="panel__category-count lato-black">${category.count}</span>
    </button>
  `
}
