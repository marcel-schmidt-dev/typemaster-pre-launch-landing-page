var d = new Date();
year.innerHTML = d.getFullYear();

const mobileQuery = window.matchMedia('(max-width: 375px)');
const tabletQuery = window.matchMedia('(max-width: 768px)');

function getDeviceType() {
    if (mobileQuery.matches) {
        return 'mobile';
    } else if (tabletQuery.matches) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

function handleMediaQueryChange() {
    const deviceType = getDeviceType();
    imgKeyboard.src = './assets/' + deviceType + '/image-keyboard.jpg';
    imgPhoneKeyboard.src = './assets/' + deviceType + '/image-phone-and-keyboard.jpg';
    imgGlassKeyboard.src = './assets/' + deviceType + '/image-glass-and-keyboard.jpg';
}

mobileQuery.addEventListener('change', handleMediaQueryChange);
tabletQuery.addEventListener('change', handleMediaQueryChange);

handleMediaQueryChange();
