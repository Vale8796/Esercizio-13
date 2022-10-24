var dataAttuale = new Date();
var giorno = dataAttuale.getDate();
var mese = dataAttuale.getMonth();
var anno = dataAttuale.getFullYear();

const mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

document.getElementById('dataOdierna').innerHTML = dataAttuale;

document.getElementById('giorno').innerHTML += giorno;
document.getElementById('mese').innerHTML += mesi[mese];

document.getElementById('data').innerHTML += `${giorno}/${mesi[mese]}/${anno}`;

document.getElementById('europe').innerHTML += `${giorno}-${mese}-${anno}`;





