// Dom Traversal
const close = document.querySelectorAll('.close');
close.forEach(function(el) {
    el.addEventListener('click', function(even) {
        even.target.parentElement.style.display = 'none';
        even.preventDefault();
    });
});