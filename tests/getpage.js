
console.log('Loading a web page');
var page = require('webpage').create();
var url = 'https://openfoodnetwork.org.au';
page.open(url, function (status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is: ' + title);
  phantom.exit();
});

