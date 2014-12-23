//
// Exposes window.observer
// #start - Start logging mutation events on the element
// #stop - Stop logging mutation events on the element
//
// Used to build new tests
//

(function() {
  var target = document.querySelector('#test');

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log('@ ' + performance.now() + '; type: ' + mutation.type);
    });
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true, subtree: true };

  window.observer = {
    start: function() {
      observer.observe(target, config);
    },
    stop: function() { observer.disconnect(); }
  }
})();
