// THIS LOOKS LIKE IT'S FOR THE HOMEPAGE:
const DISPLAY_HEADER_DELAY = 500;
const headerImg = document.querySelector(".header-img");

// THIS LOOKS LIKE IT'S FOR THE HOMEPAGE:
const cvButton = document.getElementById("cvButton");
const [
	profile,
	work,
	skills,
	languages,
	education
] = document.querySelectorAll("article > section");

cvButton.addEventListener("click", () => {
	// SOLUTION 1:
	// const pageHeader = document.querySelector("header");
	// const headerHeight = pageHeader.offsetHeight;
	// window.scrollTo({
	// 	top: headerHeight
	// });

	// SOLUTION 2:
	// const mainElem = document.querySelector("main");
	// const { top } = mainElem.getBoundingClientRect();
	// window.scrollBy({ top });

	// SOLUTION 3:
	// scroll to #main
	//navigate to projects
	location = "/projects"; 
});

function adjustPosition(element, ...others) {
	if (window.innerWidth >= 960) {
		// above.getBoundingClientRect().bottom - beside.getBoundingClientRect().bottom
		const distance =
			others
				.map(element => element.getBoundingClientRect().bottom)
				.reduce((a, b) => a - b);

		if (distance <= 0)
			return element.style.marginTop = `${distance}px`;
	}
	element.style.marginTop = 0;
}
const calibrate = () => {
	[
		[
			languages,
			skills,
			profile
		],
		[
			education,
			languages,
			work
		],
		[
			work,
			profile,
			skills
		]
	].forEach(elements => adjustPosition(...elements));
	window.requestAnimationFrame(calibrate);
}
calibrate();
// THAT LOOKS LIKE THE END OF HOMEPAGE STUFF

function delayAddClassName(element, className, delayTime = 0) {
	setTimeout(
		() => {
			element.classList.add(className)
		},
		delayTime
	);
}

// THIS IS HOMEPAGE SPECIFIC!
// when the page loads, animation for the image elements:
delayAddClassName(
	headerImg,
	"endposition",
	DISPLAY_HEADER_DELAY
);

