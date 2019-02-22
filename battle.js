var Character = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,

    initialize: function Character(scene, x, y, texture, frame) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    },

    setAttributes: function (type, hp, damage)
    {
        this.type = type;
        this.hp = hp;
        this.damage = damage;
    },
    status: function() {
        var text = this.type + ' has HP ' + this.hp;
        return text;
    },
    attack: function(opponent) {
        opponent.hp -= this.damage;
    }

});

var Enemy = new Phaser.Class({
    Extends: Character,
});

var Player = new Phaser.Class({
    Extends: Character,
});

var BattleScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BattleScene ()
    {
        Phaser.Scene.call(this, { key: 'BattleScene' });
    },

    preload: function ()
    {
    },

    create: function () {
        console.log('alek is awesome!');

        var alek = new Enemy(this, 50, 50);
        alek.setAttributes('hacker', 80, 2000);
        console.log(alek.hp);
        console.log(alek.damage);
        console.log(alek.status());
        var evan = new Enemy(this, 50, 50);
        evan.setAttributes('coder', 999999, 999999);
        console.log(evan.hp);
        console.log(evan.damage);
        console.log(evan.status());

        evan.attack(alek);
        console.log(evan.status());
        console.log(alek.status());


        console.log('BattleScene');
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        this.scene.launch('BattleSceneUI');
        this.player = this.physics.add.sprite(275, 50, 'player', 25);
        this.player.flipX = true;
        this.player.setScale(4);

        this.anims.create({
            key: 'spacebar',
            frames: this.anims.generateFrameNumbers('guy',  { start:39, end: 48 }),
            frameRate: 10,
            repeat: -1
        });

        this.enemy1 = this.physics.add.sprite(50, 30, 'guy', 0);
        this.enemy1.setScale(3);
        this.enemy1.anims.play ('spacebar');

        this.enemy2 = this.physics.add.sprite(50, 80, 'guy', 0);
        this.enemy2.setScale(4);
        this.enemy2.anims.play ('spacebar');
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
