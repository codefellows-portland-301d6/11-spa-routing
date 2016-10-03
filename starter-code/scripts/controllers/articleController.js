(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* DONE: TODO: Reveal only the articles section! */

    Article.fetchAll(articleView.renderIndexPage);
  };

  module.articleController = articleController;
})(window);
