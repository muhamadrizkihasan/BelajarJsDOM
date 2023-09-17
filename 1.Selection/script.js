// // DOM Selection
// // 1. Menghasilkan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Ujang Asep';

// // 2. Menghasilkan HTMLCollections
// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'aqua';
// }

// // 3. Menghasilkan HTMLCollections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini Diubah Dari Javascript';

// 4. Menghasilkan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'blue';
// p4.style.fontSize = '25px';

// Hanya akan mengeksekusi 1 perintah pertama yang ditemukan
// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah oleh javascript';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'Aqua';

// 5. Menghasilkan NodeList
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'aqua';
// }

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'pink';
p4.innerHTML = 'Jonathan Asep William';