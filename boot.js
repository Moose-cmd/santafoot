var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },

    preload: function ()
    {
        this.load.image('splash', 'assets/splash.png');

        // map tiles
        this.load.image('tiles', 'assets/spritesheet.png');

        // map in json format
        this.load.tilemapTiledJSON('map', 'assets/map.json');

        // our two characters
        this.load.spritesheet('player', 'assets/characterwithnoheart.png', { frameWidth: 16, frameHeight: 16 });
    },

    create: function ()
    {
        var image = this.add.image(160, 120, 'splash');
        image.displayWidth = 320;
        image.displayHeight = 240;

        this.add.text(50, 150,'Press anywhere to play (:' ,{ fontSize: '13px', fill: '#fff' });

        this.input.on('pointerdown', function (pointer) {
            this.scene.start('WorldScene');
        }, this);
    }



});