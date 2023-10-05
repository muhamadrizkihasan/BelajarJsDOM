const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(even) {

    // Cek Apakah Yang Di-Klik Adalah Thumb
    if( even.target.className == 'thumb' ) {
        jumbo.src = even.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            thumb.className = 'thumb';
        });

        even.target.classList.add('active');
    }

});