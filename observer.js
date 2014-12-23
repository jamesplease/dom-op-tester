//
// Exposes window.observer
// This is used internally by window.test. It is
// recommended that you use that API instead.
//
// For the sake of documentation, the API is:
//
// #start - Start logging mutation events on the element
// #stop - Stop logging mutation events on the element
//

(function() {

  // The element that we will be observing
  var target = document.querySelector('#test');

  // Anytime a mutation happens, we log the time and type to the console
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      test._count++;
    });
  });

  // Configuration for the observer
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };

  // Expose our API
  window.observer = {
    start: function() { observer.observe(target, config); },
    stop: function() { observer.disconnect(); }
  }
})();
