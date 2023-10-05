const container = document.querySelector('.container');

container.addEventListener('click', function(even) {
    if( even.target.className == 'close' ) {
        even.target.parentElement.style.display = 'none';
        even.preventDefault();
    }
})