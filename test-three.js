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

    // Loop through the children in the cloned tree, replacing
    // them with cloned versions of the elements in the existing
    // tree. This causes 0 ops
    $listClone.children().each(function(index, li) {
      $(li).replaceWith(lis[index]);
    });

    // The only op is the replace
    test.$el.find('ul').append($listClone.contents());

    test.stop();
  });
})();
