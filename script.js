  // JavaScript For Scroll The Slider Horizontally

  const slider = document.querySelector(".image_slider");
  
  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft; 
    scrollLeft = slider.scrollLeft; 
  });
  
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; 
    e.preventDefault(); 
    const x = e.pageX - slider.offsetLeft; 
    const walk = (x - startX); 
    slider.scrollLeft = scrollLeft - walk; 
  });



  // JavaScript For Loading More Contents
  
  document
  .getElementById("loadMoreBtn")
  .addEventListener("click", function () {
    var hiddenBoxes = document.querySelectorAll(".grid-7-box.hidden");
    var numToShow = 3;
    for (var i = 0; i < numToShow; i++) {
      if (hiddenBoxes[i]) {
        hiddenBoxes[i].classList.remove("hidden");
      }
    }
    var remainingHiddenBoxes = document.querySelectorAll(".grid-7-box.hidden");
    if (remainingHiddenBoxes.length === 0) {
      document.getElementById("loadMoreBtn").style.display = "none";
    }
  });




  $(document).ready(function () {


    // JavaScript For SideBar DropDown
  
    $('.sub-btn').click(function () {
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });
  
    // JavaScript For ScrollBar DropDown
  
    $('.nav-dropdown').hover(function () {
      $(this).find('.nav-dropdown-content').stop(true, true).slideDown();
    }, function () {
      $(this).find('.nav-dropdown-content').stop(true, true).slideUp();
    });
  
  
    // JavaScript For Showing SideBar Using Down Hamburger
  
    $('.hamburger').click(function () {
      $('.side-bar').addClass('active');
      $('.hamburger').css("visibility", "hidden");
    });
  
    // JavaScript For Closing SideBar Using Down Hamburger
  
    $('.close-btn').click(function () {
      $('.side-bar').removeClass('active');
      $('.hamburger').css("visibility", "visible");
    });
  
    // JavaScript For Showing SideBar Using Top Hamburger
  
    $('.hamburger-top').click(function () {
      $('.side-bar').addClass('active');
      $('.hamburger-top').css("visibility", "hidden");
    });
  
    // JavaScript For Closing SideBar Using Top Hamburger
  
    $('.close-btn').click(function () {
      $('.side-bar').removeClass('active');
      $('.hamburger-top').css("visibility", "visible");
    });
    
  
  });
  
