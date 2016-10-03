(function(module) {
  var adminView = {
    initAdminPage : function() {
      var template = Handlebars.compile($('#author-template').text());
      Article.numWordsByAuthor().forEach(function(stat) {
        $('.author-stats').append(template(stat));
      });
      $('#blog-stats .articles').text(Article.allArticles.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };
  module.adminView = adminView;
  Article.fetchAll(adminView.initAdminPage);
})(window);
