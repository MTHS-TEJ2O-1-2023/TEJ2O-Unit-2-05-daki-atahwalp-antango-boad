"""
Created by: Daki A.B
Created on: Sep 2023
This module is Microbit finds temperature in Kelvin
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)

temperature = temperature + 273

while True:
    if button_a.is_pressed():
        display.show(temperature)
        display.show("K")
