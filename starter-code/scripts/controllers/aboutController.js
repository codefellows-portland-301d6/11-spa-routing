(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO:DONE Reveal only the about section! */
    $('.tab-content').hide();
    $('#about').fadeIn('slow');
  };

  module.aboutController = aboutController;
})(window);
