console.log('Reading ArticleController');
(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    console.log('In articleController');
    /* TODO: Reveal only the articles section! */

    Article.fetchAll(articleView.renderIndexPage);
  };

  module.articleController = articleController;
})(window);
