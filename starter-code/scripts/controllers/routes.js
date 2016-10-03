/* TODO: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */
page('/', firstRoute);
page('/about', aboutRoute);

function firstRoute() {
  console.log('FIRST ROUTE');
  articleController.reveal();
}

function aboutRoute() {
  console.log('ABOUT ROUTE');
  aboutController.reveal();
}

/* TODO: --DONE!-- What function do we call to activate page.js?
    Fire it off now, to execute it: */
page();
