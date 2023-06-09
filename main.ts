controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -150
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        3 . . . . . . . . . . . . . 3 
        . 3 . . . . 3 3 3 . . . . 3 . 
        . . 3 . 3 3 . 3 . 3 3 . 3 . . 
        . . . 3 . 3 . 3 . 3 . 3 . . . 
        . . . . 3 . 3 . 3 . 3 . . . . 
        . . 3 . . 3 . 3 . 3 . . 3 . . 
        . 3 . . 3 . 3 . 3 . 3 . . 3 . 
        . . 3 3 3 3 . 3 . 3 3 3 3 . . 
        . 3 . . 3 . 3 . 3 . 3 . . 3 . 
        . . . . . 3 . 3 . 3 . . . . . 
        . . . . 3 3 . 3 . 3 3 . . . . 
        . . . 3 . 3 . 3 . 3 . 3 . . . 
        . . 3 . . . 3 3 3 . . . 3 . . 
        . 3 . . . . . . . . . . . 3 . 
        3 . . . . . . . . . . . . . 3 
        `)
    mySprite.setImage(img`
        . . . . . . f f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . f f f f f f f f f f f f . . . 
        f f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f f . 
        f f . f f . f f f . f f . f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 . . . . . . . . . . . . . . 
    . . 5 2 8 2 . . . . . . . . . . 
    . . 2 . 2 8 8 2 . . . . . . . . 
    2 2 . . 8 2 2 8 8 8 2 . . . . . 
    . . . . 2 8 2 . . . 8 2 . . . . 
    . . . . . 2 8 . 2 . . 8 2 . . . 
    . . . . . . 2 8 . . 2 . 8 . . . 
    . . . . . . . 2 8 . . . 8 . . . 
    . . . . . . . . 2 8 2 8 . . . . 
    . . . . . . . . . . 8 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . 2 . . 2 . 2 . 2 . . . 
    . . . . 2 . 2 2 2 2 . 2 . . . . 
    . . . 2 . 2 2 . 2 . 2 2 . 2 . . 
    . . . . 2 . . . 2 . . . 2 . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . 2 . . . . . . . 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
info.setScore(0)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................3............................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................................................................3........................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .....................................3..........................................................................................................................
    ................................................................................................................................................................
    .........................................................................................................................................................3......
    ........................................................................3.......................................................................................
    .....................................................................................................................3..........................................
    ................................................................................................................................................................
    ...........................3....................................................................................................................................
    ................................................................................................................................................................
    .............................................................................................................................................3..................
    ................................................................................................................................................................
    ................3...............................................................................................................................................
    ................3...............................................................................................................................................
    ................3...............................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................................................3.........................................................................
    ................................................................................................................................................................
    .....................................................................................................................3..........................................
    .......................3............................3...........................................................................................................
    ........................3...................................................................................................3...................................
    ........................3............................................3..........................................................................................
    .........................3......................................................................................................................................
    .........................3......................................................................................................................................
    .........................3......................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................3......................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................................................................................................3..............
    .......................................................................................................................3........................................
    ................................................................................................................................................................
    ...................................................................................................................................3............................
    .........................................................................33333..................................................................................
    ................................................3........................33333..................................................................................
    .........................................................................33333..................................................................................
    .........................................................................33333..........................33......................................................
    .................3.......................................................33333..................................................................................
    ................................................................................................................................................................
    ...............................................3................................................................................................................
    .................................3..............................................................................................................................
    ..................................33.........................................................................................33333..............................
    .....3.......................................................................................................................33333....................eeeeeeee..
    .............................................................................................................................33333..................eeeeeeeeeeee
    ................................................................3..33........................................................33333..................eeeeeeeeeeee
    .............................................................................................................................33333..................eeeeeeeeeeee
    ....................................................................................................................................................eeeeeeeeeeee
    ...................................................................................................................................................eeeeeeeeeeeee
    ..................................................................................................33333............................................eeeeeeeeeeeee
    ..................................................................................................33333...........................................eeeeeeeeeeeeee
    ..................................................................................................33333...........................................eeeeeeeeeeeeee
    ..................................................................................................33333...........................................eeeeeeeeeeeeee
    ..................................................................................................33333...........................................eeeeeeeeeeeee.
    ..................................................................................................................................................eeeeeeeeeeeee.
    ...................................................................................................................................................d......eeeeee
    ...................................................................................................................................................d......eeeeee
    .......................................33333.......................................................................................................d......eeeeee
    .......................................33333......................................................................................................d........eeeee
    .......................................33333......................................................................................................d........eeeee
    .......................................33333..................................33333...............................................................d.............
    .......................................33333..................................33333.................................3.............................d.............
    ..............................................................................33333...............................................................d.............
    ..............................................................................33333...............................................................d.............
    ..............................................................................33333.......3......3................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    .........................................3........................................................................................................d.............
    ............................................................................................3.....................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    .....................................................................3............................................................................d.............
    ............................................................................................................3.....................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ...............3..................................................................................................................................d.............
    ................................................3................................................................................................dd.............
    ......................................................................................3..........................................................d..............
    .................................................................................................................................................d..............
    ....................................................................................................................3............................d..............
    .................................................................................................................................................d..............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................d.............
    ..................................................................................................................................................dd............
    ...................................................................................................................................................d............
    ...................................................................................................................................................d............
    ............................................................................................................3....................................ddd............
    .................................................................................................................................................dd.............
    ...eeeeee......................eeeeeeeeeeeeeeeeeeeeeeeeeee..................................................................eeeeeeeeeeeeeeeeeee..dd.............
    .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeee...........
    .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
    .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay += 100
