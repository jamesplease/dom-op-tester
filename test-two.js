//
// This demonstrates that the simple replace
// method causes `n` DOM operations.
// In this case, there are 4 items, so there are
// a total of 5 ops. 4 removal ops + 1 replace op.
//

(function() {
  var btn = document.querySelector('#test2');

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
    test.start('two');

    // Loop through the children in the cloned tree, replacing
    // them with the children in the existing tree. This gives
    // us 4 removal ops
    $listClone.children().each(function(index, li) {
      $(li).replaceWith(test.$el.find('.'+li.className));
    });

    // The 5th op is the replace
    test.$el.find('ul').replaceWith($listClone);

    test.stop();
  });
})();
