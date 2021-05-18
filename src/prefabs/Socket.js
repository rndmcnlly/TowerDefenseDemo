class Socket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.setInteractive();
        this.on('pointerover', this.over, this);
        this.on('pointerout', this.out, this);
        this.on('pointerdown', this.down, this);
    }

    over() {
        this.scene.tweens.add({
            targets: this,
            scale: 1.33,
            duration: 250
        });
    }

    out() {
        this.scene.tweens.add({
            targets: this,
            scale: 1,
            duration: 250
        });
    }

    down() {
        this.scene.tweens.add({
            targets: this,
            angle: 360,
            duration: 1000,
            ease: 'sine',
        });
    }
}