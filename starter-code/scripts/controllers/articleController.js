(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Reveal only the articles section! */
    +page('/', articleController.reveal);
    +page('/about', aboutController.reveal);
  };
  
  module.articleController = articleController;
})(window);
