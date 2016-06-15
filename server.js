var moment = require('moment-timezone'),
    PythonShell = require('python-shell'),
    Session = require('flowdock').Session;

var session = new Session(process.env.FLOWDOCK_KEY);

var user = process.env.FLOWDOCK_USER,
    timezone = process.env.TIMEZONE;

// Start reading all the flows
session.flows( function(err, flows) {
  var anotherStream, flowIds;
  flowIds = flows.map(function(f) {
    return f.id;
  });
  anotherStream = session.stream(flowIds);
  return anotherStream.on('message', function(msg) {
    console.log('message from stream:', msg);
    var date = moment(msg.sent).tz(timezone).format('h:mma');
    console.log(date);
    if (msg.event == 'message') {
      console.log(msg.content);
      var tags = msg.content.match(/(@([A-Za-z]+[A-Za-z0-9]+))/g);
      if (tags) {
	tags.forEach(function(tag) {
	  console.log("Tag:"+tag);
	  if ((tag === user) || (tag == '@team')) {
	    console.log('HIT!!')
	  }
	});
      }
    }
  });
});
