//
// Like testTwo, but instead of simply replacing the nodes
// we first clone them. This leads to a single DOM op instead
// of `n+1` DOM ops.
//

(function() {
  var btn = document.querySelector('#test3');

  btn.addEventListener('click', function() {

    // Create our list, and append it to the test node
    var $list = $('<ul></ul>');
    for(var i=0; i<10000; i++) {
      $list.append($('<li></li>').addClass('l'+i));
    }
    test.$el.append($list);

    // Rather than create a new tree from a template, I'm going ahead and cloning it
    var $listClone = $list.clone();

    // Kick off the test
    test.start('three');

    // Loop through the children in the cloned tree, replacing
    // them with cloned versions of the elements in the existing
    // tree. This causes 0 ops
    $listClone.children().each(function(index, li) {
      $(li).replaceWith(test.$el.find('.'+li.className).clone(true, true));
    });

    // The only op is the replace
    test.$el.find('ul').replaceWith($listClone);

    test.stop();
  });
})();
