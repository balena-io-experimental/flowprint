#!/usr/bin/env python
"""
Print text coming in as command line arguments
"""
import sys
from escpos import *
from time import sleep

# use lsusb -v
Epson = printer.Usb(0x0483, 0x5740, 1, 0x81, 0x03)

SPACES = 5
LINELENGTH=16
# Strange limitation on line width, need investigation

if len(sys.argv) > 1:
    Epson.text("\n"*SPACES)
    lines = []
    for i in range(1, len(sys.argv)):
        line = sys.argv[i]
        for fragment in [line[i:i+LINELENGTH] for i in range(0, len(line), LINELENGTH)]:
            lines += [fragment]
    print(lines)
    for i in range(len(lines)):
        Epson.text("{}\n".format(lines[i]))
    Epson.text("\n"*SPACES)
    Epson.cut()

