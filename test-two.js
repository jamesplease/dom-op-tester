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
    test.start('two');

    $list.contents().detach();

    // Loop through the children in the cloned tree, replacing
    // them with the children in the existing tree. This gives
    // us 4 removal ops
    $listClone.children().each(function(index, li) {
      $(li).replaceWith(lis[index]);
    });

    // The 5th op is the replace
    test.$el.find('ul').append($listClone.contents());

    test.stop();
  });
})();
