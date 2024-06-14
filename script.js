var d = new Date();
year.innerHTML = d.getFullYear();

// Definieren der Medienabfragen
const mobileQuery = window.matchMedia('(max-width: 375px)');
const tabletQuery = window.matchMedia('(max-width: 768px)');

// Funktion zum Überprüfen der Medienabfragen und Zurückgeben des Gerätetyps
function getDeviceType() {
    if (mobileQuery.matches) {
        return 'mobile';
    } else if (tabletQuery.matches) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

// Funktion zum Umgang mit Änderungen der Medienabfrage
function handleMediaQueryChange() {
    const deviceType = getDeviceType();
    imgKeyboard.src = './assets/' + deviceType + '/image-keyboard.jpg';
    imgPhoneKeyboard.src = './assets/' + deviceType + '/image-phone-and-keyboard.jpg';
    imgGlassKeyboard.src = './assets/' + deviceType + '/image-glass-and-keyboard.jpg';
    console.log(`Current device type: ${deviceType}`);
}

// Listener für Änderungen der Medienabfragen hinzufügen
mobileQuery.addEventListener('change', handleMediaQueryChange);
tabletQuery.addEventListener('change', handleMediaQueryChange);

// Initiale Überprüfung
handleMediaQueryChange();
