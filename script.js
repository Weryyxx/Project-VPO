
burder_menu = document.querySelector(".burger_menu_mobile");


burder_menu.addEventListener("click", function() {
  document.querySelector(".sidebar_mobile").classList.toggle("sidebar_mobile_active");
  

  if (document.querySelector(".mobile_search_container").classList.contains("mobile_search_container_active")) {
      document.querySelector(".mobile_search_container").classList.remove("mobile_search_container_active")
  }
});

search_icon_mobile = document.querySelector(".search_icon_mobile");


search_icon_mobile.addEventListener("click", function() {
  
  document.querySelector(".mobile_search_container").classList.toggle("mobile_search_container_active");
  
  if (document.querySelector(".sidebar_mobile").classList.contains("sidebar_mobile_active")) {
      document.querySelector(".sidebar_mobile").classList.remove("sidebar_mobile_active")
  }

});


close_mobile_search = document.querySelector(".close_mobile_search");

close_mobile_search.addEventListener("click", function() {
  document.querySelector(".mobile_search_container").classList.remove("mobile_search_container_active");
});





let yprev = window.pageYOffset; 

header = document.querySelector(".header");

window.addEventListener('scroll', () => {
  const y = window.pageYOffset;
  if (yprev > y) {
    header.classList.remove("header_hide");
  } else {
    header.classList.add("header_hide");
  }
  yprev = y;
});





