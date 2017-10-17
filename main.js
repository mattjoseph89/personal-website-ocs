// navigation drawer dropdown--------------------------------------------

window.onload = function() {

  document.querySelector('.toggleNav').addEventListener('click', function() {
    var navBar = document.querySelector('nav');
    if (navBar.className === 'clearfix') {
        navBar.className = 'clearfix none';
        var changezIndex = setTimeout(function() {
        navBar.style.zIndex = 1;
        }, 200);
    }
    else {
      navBar.style.zIndex = 0;
      navBar.className = 'clearfix';
    };
  });


  var $window = $(window);
  $window.on('resize', function (){
    var navBar = document.querySelector('nav');
      if ($window.width() > 600){
        navBar.className = 'clearfix none';
        var changezIndex = setTimeout(function() {
        navBar.style.zIndex = 1;
      }, 200);
    };
  });
};
