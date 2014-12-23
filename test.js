//
// window.test
// Use this API to start and stop tests
//
// #el
// A handy reference to div#test
//
// #start( testName )
// Logs a message to the console, starts a performance test,
// starts logging mutation events on div#test, and disables
// our buttons, so that new tests cannot be started
// Be sure to pass a `testName`!
//
// #stop
// Logs how long the test took, and resets everything
// that #start set up
//

(function() {

  // The buttons for starting tests
  var $testBtns = $('li > button');

  window.test = {

    // The test element
    $el: $('#test'),

    // Start a test
    start: function(testName) {
      this.testName = testName;
      observer.start();
      console.log('Starting test ' + testName);
      this.startTime = performance.now();
      $testBtns.attr('disabled', 'disabled');
    },

    // Stop a test
    stop: function() {
      var tester = this;
      window.setTimeout(function() {
        console.log('Stopping test ' + tester.testName);
        console.log('Total time: ', performance.now() - tester.startTime, '\n\n');
        delete tester.testName;
        delete tester.startTime;
        observer.stop();
        $testBtns.removeAttr('disabled');
        test.$el.empty().text('The test will be run against this element.');
      });  
    }
  };
})();
