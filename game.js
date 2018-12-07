var BootScene = new Phaser.Class();
var WorldScene = new Phaser.Class();

var config = {
    type: phaser.SVG_MARKER_ORIENT_AUTO
    parent: 'content'
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: true
        }
    },
    scene: [
        BootScene,
        WorldScene
    ]
};

var game = new Phaser.Game(config);