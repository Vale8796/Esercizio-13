var data = new Date();
let ora = data.getHours();

if (ora > 5 && ora < 12) {
    document.getElementById('saluto').innerHTML = `Buongiorno! Sono le ${data.getHours()}:${data.getMinutes()}.`;
} else if (ora > 12 && ora < 18) {
    document.getElementById('saluto').innerHTML = `Buon Pomeriggio! Sono le ${data.getHours()}:${data.getMinutes()}.`;
} else {
    document.getElementById('saluto').innerHTML = `Buonasera! Sono le ${data.getHours()}:${data.getMinutes()}.`;
};
