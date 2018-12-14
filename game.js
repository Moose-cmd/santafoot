var BootScene = new Phaser.Class({

    initalize: function BootScene() {
        Phaser.Scene.call(this, {key: 'BootScene'});
    },

    preload: function() {
        this.load.image('tiles', 'assets/spritesheet.png');
        this.load.tilemapTiledJSON('map', 'assets/map.json');
        this.load.spritesheet('player', 'assets/characterwithnoheart.png');

    },
    create: function() {
        this.scene.start('WorldScene');



    }

});

var WorldScene = new Phaser.Class({
    initalize: function BootScene() {
        Phaser.Scene.call(this, {key: 'WorldScene'});
    }
});

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