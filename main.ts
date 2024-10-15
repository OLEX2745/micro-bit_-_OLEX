input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        . # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        . # # # #
        . # # # .
        . . . . #
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        . # # # #
        . # # # .
        . . # . #
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        . # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
