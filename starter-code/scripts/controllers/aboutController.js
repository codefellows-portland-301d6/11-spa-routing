(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* DONE: Reveal only the about section! */
    $('.tab-content').hide();
    console.log('this is about');
    $('#about').fadeIn();
    $('.main-nav .tab:first').click();
  };
  module.aboutController = aboutController;
})(window);
