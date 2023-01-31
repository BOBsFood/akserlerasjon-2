radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("z", receivedNumber)
})
basic.showString("BOB 2")
radio.setGroup(42)
serial.writeLine("Akserlerasjon")
basic.forever(function () {
	
})
