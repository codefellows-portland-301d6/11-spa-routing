(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Reveal only the about section! */
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
