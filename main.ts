controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myBall2 = carnival.createProjectileBallFromSprite(img`
        . . . . . . . . c . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . c . e . c . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myBall)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(-1)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.setImage(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        bbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbb
        .bbbbbbbbbbbbbb.
        .bbbbbbbbbbbbbb.
        ..ccc......ccc..
        ..cfc......cfc..
        ..ccc......ccc..
        ................
        `)
    info.changeScoreBy(1)
    music.baDing.play()
})
let projectile: Sprite = null
let myBall2: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(img`
    . . . . . . . . b . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . b . e . b . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys()
myBall.setTraceMulti(carnival.Tracers.Cross)
let mybooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
mybooth.z = 20
let statusbar = statusbars.create(120, 6, StatusBarKind.Energy)
statusbar.setColor(5, 10)
statusbar.setBarBorder(2, 15)
statusbar.bottom = 120
myBall.variablePower(statusbar, 30, 60)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`target`, 50, 0)
    projectile.bottom = 56
    projectile.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})