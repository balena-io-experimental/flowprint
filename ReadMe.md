# Flowprint

Thermal printed notes of your Flowdock messages. A [Resin.io](https://resin.io) project to have paper copy o
message sent directly to you on [Flowdock](flowdock.com)

## Hardware

* Raspberry Pi 3
* ESC/POS compatible thermal printer

![Printed note](img/message.jpg?raw=true "Ticket")

## Notes

Get your Flowdock API key from "Account > API Tokens".

Environmental variables to set in your Resin project:

* `FLOWDOCK_KEY`: the API Token
* `FLOWDOCK_USER`: the username on Flowdock to be referred by, together with `@`, such as `@Gergely`
* `TIMEZONE`: timezone info in the usual `Asia/Taipei` format, see e.g. [this page](http://momentjs.com/timezone/) to find the name of yours
