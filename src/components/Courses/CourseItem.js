const categoryColors = {
	Marketing: '#FF6B6B',
	Management: '#5A87FC',
	'HR & Recruting': '#F89828',
	Design: '#F52F6E',
	Development: '#7772F1',
	default: '#F89828',
}

export default function CourseItem(course) {
	const badgeColor = categoryColors[course.category] || categoryColors.default

	return `
    <div class="courses__card">
      <img src="${course.image || 'courses/card/image.png'}" alt="${
		course.title
	}" />
      <div class="courses__card-content">
        <span 
          class="courses__card-badge lato-regular" 
          style="background-color: ${badgeColor}"
        >
          ${course.category}
        </span>

        <h3 class="courses__card-title lato-bold">${course.title}</h3>

        <div class="courses__card-footer">
          <p class="courses__card-price lato-bold">$${course.price}</p>
          <p class="courses__card-name lato-regular">by ${course.author}</p>
        </div>
      </div>
    </div>
  `
}
