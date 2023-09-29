function getPilihanComputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'semut' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'semut' ) return ( comp == 'gajah' ) ? 'MENANG!' : 'KALAH!';
}

function acak() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pilih) {
    pilih.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilih.className;

        acak();

        setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        }, 1000);
    });
});

// const pilihGajah = document.querySelector('.gajah');
// pilihGajah.addEventListener('click', function() {
    // const pilihanComputer = getPilihanComputer();
    // const pilihanPlayer = pilihGajah.className;
    // const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // const imgComputer = document.querySelector('.img-komputer');
    // imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    // const info = document.querySelector('.info');
    // info.innerHTML = hasil;
// });

// const pilihOrang = document.querySelector('.orang');
// pilihOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pilihSemut = document.querySelector('.semut');
// pilihSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });