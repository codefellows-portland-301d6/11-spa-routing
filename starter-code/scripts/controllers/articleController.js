(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO:DONE Reveal only the articles section! */
    $('.tab-content').hide();
    $('#about').fadeIn('slow');
  };

  module.articleController = articleController;
})(window);
