A live programming demo for integrating tilemap data from [Tiled](https://www.mapeditor.org/) into [Phaser](https://phaser.io/) games (cleaned up after the presentation)

Highlights:
- Assets used with attribution from https://www.kenney.nl/assets/tower-defense-top-down
- Terrain brushes used to quickly paint background tile layers
- Basic tiles used to add isolated doodads on top of background tiles
- Basic tiles on a different layer used to define sockets for tower defense units (where other tutorials would more likely use object layers, this shows an alternative for griddy game data)
- Polyline objects on an object layer used to define paths
- Tiles from socket layer of tilemap used to instantiate custom `Socket` game objects (with mouseover animations)
- Oriented airplane sprites follow paths defined in the map

Frustrations:
- There should be some more direct way to loop over the sparsely define tiles on the `sockets` layer.
- The path loading code is clunky; I should have looked for a specific example of using Tiled's paths in Phaser.
