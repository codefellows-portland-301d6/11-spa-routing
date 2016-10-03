(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Reveal only the about section! */
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  module.aboutController = aboutController;
})(window);
