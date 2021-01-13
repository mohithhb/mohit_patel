$(document).ready(function()
{

  // $("#searchbar .search-label").on("click", function(e){
  //   e.preventDefault();
  //   $("#searchbar").toggleClass("collapsed");
  // });
  
  $('#services-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    navText:["<img src='images/left-arrow-removebg-preview.png'>","<img src='images/right-arrow-removebg-preview.png'>"],
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:false,
            dots:true
        },
        1200:{
            items:4,
            nav:true,
            loop:true,
            dots:false
        }
  }
})


$('#clients-carousel').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  navText:["","<img src='images/right-removebg-preview.png'>"],
  autoplay:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:true
      },
      992:{
          items:2,
          nav:true,
          dots:false
      },
      1200:{
          items:2,
          nav:true,
          loop:true,
          dots:false
      }
}
})

$('#brands').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  autoplay:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots:true
      },
      600:{
          items:2,
          nav:false,
          dots:true
      },
      992:{
          items:3,
          nav:false,
          dots:true
      },
      1200:{
          items:4,
          nav:false,
          loop:true,
          dots:true
      }
}
})

});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
