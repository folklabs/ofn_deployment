
var system = require('system');
var args = system.args;

console.log('Loading a web page');
var page = require('webpage').create();

// Get URL from command line
var url = args[1];

page.open(url, function (status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is: ' + title);
  if (title.indexOf('Open Food Network') == -1) {
    phantom.exit(1);
  }
  phantom.exit();
});

