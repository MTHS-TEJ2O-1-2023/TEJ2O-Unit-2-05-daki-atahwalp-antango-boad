/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program ...
*/

let temperature = input.temperature()

basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

basic.clearScreen()

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showNumber(input.temperature() + 273) 
  basic.showString('Kelvin')
})
