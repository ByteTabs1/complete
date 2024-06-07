
$(document).ready(function () {


  // JQuery For SideBar DropDown

  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  // JQuery For ScrollBar DropDown

  $('.nav-dropdown').hover(function () {
    $(this).find('.nav-dropdown-content').stop(true, true).slideDown();
  }, function () {
    $(this).find('.nav-dropdown-content').stop(true, true).slideUp();
  });


  // JQuery For Showing SideBar Using Down Hamburger

  $('.hamburger').click(function () {
    $('.side-bar').addClass('active');
    $('.hamburger').css("visibility", "hidden");
  });

  // JQuery For Closing SideBar Using Down Hamburger

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.hamburger').css("visibility", "visible");
  });

  // JQuery For Showing SideBar Using Top Hamburger

  $('.hamburger-top').click(function () {
    $('.side-bar').addClass('active');
    $('.hamburger-top').css("visibility", "hidden");
  });

  // JQuery For Closing SideBar Using Top Hamburger

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.hamburger-top').css("visibility", "visible");
  });


});



