document.addEventListener('s72loaded', function(event){
  event.detail.app.classificationsService.load('/classifications.all.json');
});