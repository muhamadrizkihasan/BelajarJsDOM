// 1.Manipulasi Elements
// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>Neng Saula Syaukillah</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';
// Apapun yang ada di section akan ditimpa seolah-olah ditimpa

// 2.Manipulasi Node
// Buat Element Baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan Tulisan Ke Dalam Paragraf
pBaru.appendChild(teksPBaru);

// Simpan pBaru Di Akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// Untuk Lebih Spesifiknya
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// Menghapus
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Mengubah
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'aqua';
liBaru.style.backgroundColor = 'aqua';
h2Baru.style.backgroundColor = 'aqua';