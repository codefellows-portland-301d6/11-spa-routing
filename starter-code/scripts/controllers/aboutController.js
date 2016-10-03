(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    /* DONE: TODO: Reveal only the about section! */
      $('.main-nav').on('click', '.tab', function(e) {
        $('.tab-content').hide();
        $('#about').data('content').fadeIn();
      });


  };

  module.aboutController = aboutController;
})(window);
