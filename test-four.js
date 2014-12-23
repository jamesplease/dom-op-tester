//
// Like testTwo, but we detach the top level view.
// This leads to a single DOM op instead
// of `n+1` DOM ops.
//

(function() {
  var btn = document.querySelector('#test4');

  btn.addEventListener('click', function() {

    // Create our list, and append it to the test node
    var $list = $('<ul></ul>');
    var lis = new Array(10000);
    for(var i=0; i<lis.length; i++) {
      var $li = $('<li></li>').addClass('l'+i);
      lis[i] = $li;
      $list.append($li);
    }
    test.$el.append($list);

    // Rather than create a new tree from a template, I'm going ahead and cloning it
    var $listClone = $list.clone();

    // Kick off the test
    test.start('three');

    var $span = $('<span>').insertAfter($list);
    $list.detach();

    // Loop through the children in the cloned tree, replacing
    // them with cloned versions of the elements in the existing
    // tree. This causes 0 ops
    $listClone.children().each(function(index, li) {
      $(li).replaceWith(lis[index]);
    });

    // The only op is the replace
    $list.empty().append($listClone);
    $span.replaceWith($list);

    test.stop();
  });
})();
