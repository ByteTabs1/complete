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
  
    // JavaScript For Load More Content
  
    $(".abc").slice(0, 6).show(); // Initially show the first 8 boxes
    var itemsToShow = 3; // Number of items to show on each click
    $(".load-more").on('click', function (e) {
        e.preventDefault();
        var hiddenItems = $(".abc:hidden").slice(0, itemsToShow);
        hiddenItems.show(); // Show next 4 hidden boxes
        if ($(".abc:hidden").length === 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        // Scroll to the last of the newly displayed elements
        $('html,body').animate({
            scrollTop: hiddenItems.last().offset().top
        }, 1000);
    });
    
  
  });
  
