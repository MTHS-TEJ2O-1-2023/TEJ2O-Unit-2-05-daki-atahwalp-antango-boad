/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program ...
*/

let randomNumber: number
let temperature = input.temperature()

basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showNumber(input.temperature())
    basic.showNumber(input.temperature() + 273.15) 
    basic.showString('Kelvin')
})
