// javascripts
$(document).ready(function(){
  banner();
  breadcrumb();
});



function banner() {
  var bannerMock;
  if(!$('.js-banner-mock')){
    return false;
  } else {
    bannerMock = $('.js-banner-mock');
  }

  setTimeout(function(){
    bannerMock.addClass('banner-mockup--animate');
  },200);
}


function breadcrumb(){
  if(!$('.breadcrumb') == true){
    return false;
  }
  var item = $('.breadcrumb__item').last();

  setTimeout(function(){
    item.addClass('breadcrumb__item--animate');
  },200);

}
