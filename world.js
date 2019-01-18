var WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function WorldScene ()
    {
        Phaser.Scene.call(this, { key: 'WorldScene' });
    },

    preload: function ()

    {

        var songs = ['assets/bensound-dubstep.mp3', 'assets/bensound-endlessmotion.mp3', 'assets/bensound-summer.mp3', 'assets/CatAstroPhi_shmup_normal.wav', 'assets/bensound-creativeminds.mp3',];
        var randomsong = Math.floor(Math.random() * 4);  // 0 ~ 3
        this.load.audio('song', songs[randomsong]);
        this.load.audio('OoOo0Oo0OfF', 'assets/438912__thedavedude__homemadeoof.wav');
    },

    create: function ()
    {
        music = this.sound.add ('song');
        music.setLoop(true); // loop: true/false
        music.play();
        var map = this.make.tilemap({ key: 'map' });

        var tiles = map.addTilesetImage('spritesheet', 'tiles');

        var grass = map.createStaticLayer('Grass', tiles, 0, 0);
        var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
        obstacles.setCollisionByExclusion([-1]);

        this.player = this.physics.add.sprite(50, 100, 'player', 6);

        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true;

        //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
            frameRate: 10,
            repeat: -1
        });

        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.player, obstacles);

        this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        for(var i = 0; i < 30; i++) {
            var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
            // parameters are x, y, width, height
            this.spawns.create(x, y, 20, 20);
        }
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
    },

    onMeetEnemy:function() {
        alert('Enemy!!!');
    },
    update: function (time, delta)
    {
        this.player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-80);
            this.player.flipX=true;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(80);
            this.player.flipX=false;
        }

        // Veritical movement
        if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(-80);
        }
        else if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(80);
        }


        if (this.cursors.left.isDown)
        {
            this.player.anims.play('right', true);
        }
        if (this.cursors.right.isDown)
        {
            this.player.anims.play('left', true);
        }
        if (this.cursors.up.isDown)
        {
            this.player.anims.play('up', true);
        }
        if (this.cursors.down.isDown)
        {
            this.player.anims.play('down', true);
        }

    }

});
