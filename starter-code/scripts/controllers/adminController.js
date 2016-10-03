(function(module) {
  var adminController = {};

  adminController.reveal = function() {
    /* TODO: Reveal only the articles section! */
    $('.tab-content').hide();
    $('#blog-stats').fadeIn();
  };

  module.adminController = adminController;
})(window);
