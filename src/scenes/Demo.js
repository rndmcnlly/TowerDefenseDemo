class Demo extends Phaser.Scene {
    constructor() {
        super("demo");
    }

    preload() {
        this.load.spritesheet("towerDefense", "assets/towerDefense_tilesheet.png", {frameWidth: 64, frameHeight: 64});
        this.load.tilemapTiledJSON("level", "assets/level1.json");
    }

    create() {
        this.level = this.add.tilemap("level");
        this.tileset = this.level.addTilesetImage("towerDefense_tilesheet", "towerDefense");
        this.level.createLayer("background", this.tileset, 0, 0);
        this.level.createLayer("doodads", this.tileset, 0, 0);

        let socketLayer = this.level.getLayer("sockets");
        for(let row of socketLayer.data) {
            for(let tile of row) {
                if(tile.index > 0) {
                    let socket = new Socket(
                        this,
                        tile.pixelX+this.level.tileWidth/2,
                        tile.pixelY+this.level.tileHeight/2, "towerDefense",
                        tile.index-1);
                    this.add.existing(socket);
                }
            }
        }

        
        let makePath = (name) => {
            let pathLayer = this.level.getObjectLayer("paths");
            let pathData = this.level.findObject(pathLayer, o => o.name == name);
            let path = this.add.path(pathData.x, pathData.y);
            for(let {x, y} of pathData.polyline) {
                path.lineTo(x+pathData.x, y+pathData.y);
            }
            return path;
        }

        let primaryPath = makePath("Primary");
        let secondaryPath = makePath("Secondary");
        
        for(let i = 0; i < 10; i++) {
            let {x, y} = primaryPath.getStartPoint();
            let unit = this.add.follower(primaryPath, x, y, "towerDefense", 271);
        
            unit.startFollow({
                delay: 500*i,
                duration: 15000,
                repeat: -1,
                rotateToPath: true
            });
        }

        for(let i = 0; i < 3; i++) {
            let {x, y} = secondaryPath.getStartPoint();
            let unit = this.add.follower(secondaryPath, x, y, "towerDefense", 270);
            unit.scale = 2;
        
            unit.startFollow({
                delay: 1000+1000*i,
                duration: 20000,
                repeat: -1,
                rotateToPath: true
            });
        }

    }
}