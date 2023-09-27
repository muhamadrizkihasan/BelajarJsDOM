const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.onclick = function() {
    document.body.classList.toggle('aqua');
}

const tombolAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tombolAcakWarna.appendChild(teksTombol);
tombolAcakWarna.setAttribute('type', 'button');
tombolUbahWarna.after(tombolAcakWarna);

tombolAcakWarna.addEventListener('click', function() {
    const red = Math.round(Math.random() * 255 + 0);
    const green = Math.round(Math.random() * 255 + 0);
    const blue = Math.round(Math.random() * 255 + 0);
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
});

const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru  = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('input', function() {
    const red = sliderMerah.value;
    const green = sliderHijau.value;
    const blue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +', '+ blue +')';
});

sliderHijau.addEventListener('input', function() {
    const red = sliderMerah.value;
    const green = sliderHijau.value;
    const blue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +', '+ blue +')';
});

sliderBiru.addEventListener('input', function() {
    const red = sliderMerah.value;
    const green = sliderHijau.value;
    const blue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +', '+ blue +')';
});

document.body.addEventListener('mousemove', function(event) {
    const xPosition = Math.round((event.clientX / window.innerWidth) * 255);
    const yPosition = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPosition +','+ yPosition +',125)';
});