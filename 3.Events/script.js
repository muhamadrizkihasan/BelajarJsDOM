const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

// Jika Menggunakan Cara Handler Maka Akan menimpa Events sebelumnya
p2.onclick = function() {
    p2.style.backgroundColor = 'aqua';
}
p2.onclick = function() {
    p2.style.color = 'blue';
}

// Jika Menggunakan addEventListener() Maka Tidak Akan menimpa Events sebelumnya
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'aqua';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});

// Menambahkan List Baru Saat Events Diclick
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});
