// MENU STUFF:
const DISPLAY_MENU_DELAY = 1000;
const DISPLAY_MENU_LABEL_DELAY = 550;

const checkbox = document.getElementById("menu-toggle");
const menuList = document.querySelector(".menu-list");
const menuLabel = document.querySelector(".menu");

// MENU SPECIFIC STUFF (master/global):
function delayAddClassName(element, className, delayTime = 0) {
	setTimeout(
		() => {
			element.classList.add(className)
		},
		delayTime
	);
}
const openMenu = () => {
	[
		[
			menuList,
			"openMenu",
			DISPLAY_MENU_DELAY
		],
		[
			menuLabel,
			"active",
			DISPLAY_MENU_LABEL_DELAY
		],
		[
			document.body,
			"noscroll"
		]
	].forEach(args => delayAddClassName(...args));
};
function closeMenu() {
	menuList.classList.remove("openMenu");
	menuLabel.classList.remove("active");
	document.body.classList.remove("noscroll");
};
checkbox.addEventListener("input", () => {
	console.log(checkbox.checked);
	if (checkbox.checked)
		openMenu();
	else
		closeMenu();
});
