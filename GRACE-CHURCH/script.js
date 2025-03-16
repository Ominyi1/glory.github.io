const image = document.getElementById   ('blinkingImage');
    function blinkingImage() {
        if (image.style.visibility === 'hidden') {
            image.style.visibility = 'visible';
        }else {
            image.style.visibility = 'hidden';
        }
    }
    setInterval(blinkingImage, 1400); 