//
// This is a simple test that demonstrates
// that the mutation observer logs our changes
//

(function() {
  var btn = document.querySelector('#test1');

  btn.addEventListener('click', function() {
    test.start('one');
    var originalText = test.$el.text();
    test.$el.empty().text(originalText);
    test.stop();
  });
})();
