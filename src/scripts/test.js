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
  window.test = {

    create: function(definition) {
      var $li = $('<li><button>Run ' + definition.name + '</button></li>');
      $('.test-buttons').append($li);

      $li.on('click', function() {
        var testObj = {
          before: definition.before,
          test: definition.test
        };
        testObj.before();
        window.setTimeout(function() {
          window.test.start(definition.name);
          testObj.test();
          window.test.stop();
        });
      });
    },

    // The test element
    $el: $('#test'),

    // Start a test
    start: function(testName) {
      this._count = 0;
      this.testName = testName;
      observer.start();
      console.log('Starting "' + testName + '"');
      this.startTime = performance.now();
      $('li > button').attr('disabled', 'disabled');
    },

    // Stop a test
    stop: function() {
      var tester = this;
      window.setTimeout(function() {
        console.log('--------------');
        console.log('"' + tester.testName +'" results:');
        console.log('Attached node ops:', tester._count);
        console.log('Total time: ', performance.now() - tester.startTime);
        console.log('--------------\n\n');
        delete tester.testName;
        delete tester.startTime;
        delete this._count;
        observer.stop();
        $('li > button').removeAttr('disabled');
        test.$el.empty().text('The test will be run against this element.');
      });  
    }
  };
})();
