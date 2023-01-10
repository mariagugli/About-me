
/* Para abrir layer al apretar el botón correspondiente */

const btnOrigen = document.querySelector('.btn-origen');

btnOrigen.addEventListener('click', () => {
	document.querySelector('.layer-origen').style.display = "flex";
});

const btnCat = document.querySelector('.btn-cat');

btnCat.addEventListener('click', () => {
	document.querySelector('.layer-cat').style.display = "flex";
});
const btnWatchlist = document.querySelector('.btn-watchlist');

btnWatchlist.addEventListener('click', () => {
	document.querySelector('.layer-watchlist').style.display = "flex";
});

const btnViajes = document.querySelector('.btn-viajes');

btnViajes.addEventListener('click', () => {
	document.querySelector('.layer-viajes').style.display = "flex";
});

const btnHobbies = document.querySelector('.btn-hobbies');

btnHobbies.addEventListener('click', () => {
	document.querySelector('.layer-hobbies').style.display = "flex";
});

const btnFotografa = document.querySelector('.btn-fotografa');

btnFotografa.addEventListener('click', () => {
	document.querySelector('.layer-fotografa').style.display = "flex";
});



/* Para cerrar layers extra */
const closeLayerCat = document.querySelector('.close-cat')

closeLayerCat.addEventListener('click', () => {
	document.querySelector('.layer-cat').style.display = "none";
});


const closeLayerWatchlist = document.querySelector('.close-watchlist')

closeLayerWatchlist.addEventListener('click', () => {
	document.querySelector('.layer-watchlist').style.display = "none";
});


const closeLayerOrigen = document.querySelector('.close-origen')

closeLayerOrigen.addEventListener('click', () => {
	document.querySelector('.layer-origen').style.display = "none";
});


const closeLayerViajes = document.querySelector('.close-viajes')

closeLayerViajes.addEventListener('click', () => {
	document.querySelector('.layer-viajes').style.display = "none";
});


const closeLayerFotografa = document.querySelector('.close-fotografa')

closeLayerFotografa.addEventListener('click', () => {
	document.querySelector('.layer-fotografa').style.display = "none";
});


const closeLayerHobbies = document.querySelector('.close-hobbies')

closeLayerHobbies.addEventListener('click', () => {
	document.querySelector('.layer-hobbies').style.display = "none";
});



