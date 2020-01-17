document.addEventListener('s72loaded', function(){
  let app = event.detail.app;

  // Load the classifications
  app.classificationsService.load('/classifications.all.json');
});