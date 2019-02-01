var BattleScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BattleScene ()
    {
        Phaser.Scene.call(this, { key: 'BattleScene' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
        console.log  ('BattleScene');
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        this.scene.launch('BattleSceneUI');
        this.player = this.physics.add.sprite(275, 50, 'player', 25);
        this.player.flipX=true;
        this.player.setScale(4);
        this.enemy = this.physics.add.image(75, 50, 'fork');
        this.enemy.setScale(4);

    }
});

var BattleSceneUI = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BattleSceneUI ()
    {
        Phaser.Scene.call(this, { key: 'BattleSceneUI' });
    },

    create: function ()
    {
        console.log('BattleSceneUI');
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);
        this.graphics.strokeRect(10, 150, 300, 80);
        this.graphics.fillRect(10, 151, 299, 79);

    }
});

