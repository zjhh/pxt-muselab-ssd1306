
MuseOLED.init(128, 64)
MuseOLED.writeStringNewLine("the quick brown fox jumped over the lazy dog?")
MuseOLED.writeStringNewLine("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG!")
basic.pause(1000)
MuseOLED.clear()
MuseOLED.writeString("Your magic number is ")
MuseOLED.writeNum(23 * 3)
MuseOLED.writeStringNewLine("!")
MuseOLED.writeNumNewLine(1)
basic.pause(100)
MuseOLED.writeNumNewLine(2)
basic.pause(100)
MuseOLED.writeNumNewLine(3)
basic.pause(1000)
for (let i = 0; i < 100; i++) {
    MuseOLED.drawLoading(i)
}
basic.pause(1000)
MuseOLED.clear()
MuseOLED.drawRectangle(10, 10, 60, 60)
MuseOLED.drawLine(0, 0, 128, 64)
MuseOLED.drawLine(0, 64, 128, 0)