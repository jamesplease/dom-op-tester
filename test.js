(function() {
  var $testBtns = $('li > button');

  window.test = {
    $el: $('#test'),
    start: function(testName) {
      this.testName = testName;
      observer.start();
      console.log('Starting test ' + testName);
      this.startTime = performance.now();
      $testBtns.attr('disabled', 'disabled');
    },
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
