function transform() {
    var powerLevel = Math.floor(Math.random() * 10000) + 9000; // Random power level between 9000 and 10000
    document.getElementById('power-level').textContent = 'Power Level: ' + powerLevel;
    
    // Change Goku's image based on power level
    var gokuImage = document.getElementById('goku-image');
    if (powerLevel > 12000) {
        gokuImage.src = 'goku-super-saiyan-3.jpg';
    } else if (powerLevel > 9000) {
        gokuImage.src = 'goku-super-saiyan.jpg';
    } else {
        gokuImage.src = 'goku-normal.jpg';
    }
}
