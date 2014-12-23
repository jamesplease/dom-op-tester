(function() {
  var btn = document.querySelector('#test3');

  btn.addEventListener('click', function() {

    // Create our list, and append it to the test node
    var $list = $('<ul><li class="one"></li><li class="two"></li><li class="three"></li><li class="four"></li></ul>');
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
