(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
