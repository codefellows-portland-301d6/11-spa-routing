(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    /* DONE: TODO: Reveal only the about section! */
    $('.tab-content').hide();
    $('#about').data('content').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
