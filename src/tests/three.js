window.test.create({
  name: 'three',

  before: function() {
    this.$list = $('<ul></ul>');
    this.lis = new Array(10000);
    for(var i=0; i<this.lis.length; i++) {
      var $li = $('<li>hi</li>').addClass('l'+i);
      this.lis[i] = $li;
      this.$list.append($li);
    }
    test.$el.append(this.$list);

    this.$listClone = this.$list.clone();
  },

  test: function() {
    var $span = $('<span>').insertAfter(this.$list);
    this.$list.detach();

    var self = this;
    this.$listClone.children().each(function(index, li) {
      $(li).replaceWith(self.lis[index]);
    });

    this.$list.empty().append(this.$listClone);
    $span.replaceWith(this.$list);
  }
});
