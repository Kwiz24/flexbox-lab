// document.addEventListener('DOMContentLoaded', function () {
//   const searchInput = document.querySelector('input[type="text"]');
//   const trendingSection = document.getElementById('trending');
//   const trendingContent = trendingSection.querySelectorAll('p');

//   // Hide trending section initially
//   trendingSection.style.display = 'none';

//   // Toggle trending section visibility on input focus
//   searchInput.addEventListener('focus', function () {
//     trendingSection.style.display = 'block';
//   });

//   // Hide trending section on input blur
//   searchInput.addEventListener('blur', function () {
//     trendingSection.style.display = 'none';
//   });

//   // Handle form submission (just an alert for demonstration)
//   const form = document.querySelector('nav form');
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const searchTerm = searchInput.value;
//     alert('You searched for: ' + searchTerm);
//   });
// });
