window.test.create({
  name: 'two',

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
    var self = this;
    this.$listClone.children().each(function(index, li) {
      $(li).replaceWith(self.lis[index].clone(true));
    });

    test.$el.find('ul').append(this.$listClone.contents());
  }
});
