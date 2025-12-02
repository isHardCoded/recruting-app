export default function Block(course) {
	return `
    <div class="courses__card">
      <img src="${course.image || 'courses/card/image.png'}" alt="${
		course.title
	}" />
      <div class="courses__card-content">
        <span class="courses__card-badge lato-regular">${course.category}</span>
        <h3 class="courses__card-title lato-bold">${course.title}</h3>
        <div class="courses__card-footer">
          <p class="courses__card-price lato-bold">$${course.price}</p>
          <p class="courses__card-name lato-regular">by ${course.author}</p>
        </div>
      </div>
    </div>
  `
}
