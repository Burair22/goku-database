function transform() {
    var powerLevel = Math.floor(Math.random() * 10000) + 9000;
    document.getElementById('power-level').textContent = 'Power Level: ' + powerLevel;
    
    var gokuImage = document.getElementById('goku-image');
    if (powerLevel > 12000) {
        gokuImage.src = 'goku-super-saiyan-3.jpg';
    } else if (powerLevel > 9000) {
        gokuImage.src = 'goku-super-saiyan.jpg';
    } else {
        gokuImage.src = 'goku-normal.jpg';
    }
}
