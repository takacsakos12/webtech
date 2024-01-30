document.addEventListener('DOMContentLoaded', function() {
    var ufcLogo = document.getElementById('ufcLogo');

    // Kattintás esemény kezelése
    ufcLogo.addEventListener('click', function() {
        toggleAnimation();
    });
});

function toggleAnimation() {
    var ufcLogo = document.getElementById('ufcLogo');
    
    if (ufcLogo.style.animationPlayState === 'paused') {
        // Ha szüneteltetve van, indítsd el
        ufcLogo.style.animationPlayState = 'running';
    } else {
        // Ha fut, szüntesd meg
        ufcLogo.style.animationPlayState = 'paused';
    }
}
