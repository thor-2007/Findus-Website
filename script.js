// Get the button and the collapse element
const collapseElement = document.getElementById('demo');
const toggleIcon = document.getElementById('toggle-icon');

// Add event listener to toggle the arrow icon based on collapse state
collapseElement.addEventListener('show.bs.collapse', function () {
    toggleIcon.classList.remove('bi-caret-down-fill');
    toggleIcon.classList.add('bi-caret-up-fill');
});

collapseElement.addEventListener('hide.bs.collapse', function () {
    toggleIcon.classList.remove('bi-caret-up-fill');
    toggleIcon.classList.add('bi-caret-down-fill');
});