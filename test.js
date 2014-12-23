(function() {
  var $testBtns = $('li > button');

  window.test = {
    $el: $('#test'),
    start: function(testName) {
      this.testName = testName;
      observer.start();
      console.log('Starting test ' + testName);
      $testBtns.attr('disabled', 'disabled');
    },
    stop: function() {
      var tester = this;
      window.setTimeout(function() {
        console.log('Stopping test ' + tester.testName + '\n\n');
        delete tester.testName;
        observer.stop();
        $testBtns.removeAttr('disabled');
        test.$el.empty().text('The test will be run against this element.');
      });  
    }
  };
})();
