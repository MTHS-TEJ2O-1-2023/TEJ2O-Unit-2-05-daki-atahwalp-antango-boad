/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program ...
*/

/// variable for temperature 

let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  // input
  temperatureKelvin = input.temperature()

  // process
  temperatureKelvin = (temperatureKelvin + 273.15)
  temperatureKelvin = Math.round(temperatureKelvin)

  // output
  basic.clearScreen()
  basic.showString('The temperature is: ' +temperatureKelvin.toString() + 'K')
})