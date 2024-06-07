function FormValidation(event) {
  const first_line = document.getElementsByClassName('first-line')[0];
  const second_line = document.getElementsByClassName('second-line')[0];
  const name = document.getElementById('name').value;
  const phone_no = document.getElementById('phone').value;
  const email = document.getElementById('EMail').value;
  const address = document.getElementById('Address').value;
  const subject = document.getElementById('Subject').value;
  const description = document.getElementById('description').value;

  // Reset error messages
  document.getElementById('nameError').innerText = '';
  document.getElementById('phoneError').innerText = '';
  document.getElementById('addressError').innerText = '';
  document.getElementById('subjectError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('descriptionError').innerText = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+91[0-9]{10}$/;

  let isValid = true;

  if (name === "") {
      document.getElementById('nameError').innerText = 'Please enter your name.';
      first_line.style.marginBottom = "20px";
      isValid = false;
  } else {
      first_line.style.marginBottom = ""; 
  }

  if (isValid && !emailRegex.test(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid e-mail address.';
      first_line.style.marginBottom = "20px";
      isValid = false;
  }

  if (isValid && address === "") {
      document.getElementById('addressError').innerText = 'Please enter your address.';
      second_line.style.marginBottom = "20px";
      isValid = false;
  }

  if (isValid && !phoneRegex.test(phone_no)) {
      document.getElementById('phoneError').innerText = 'Please enter a valid 10-digit phone number.';
      second_line.style.marginBottom = "20px";
      isValid = false;
  }

  if (isValid && subject === "") {
      document.getElementById('subjectError').innerText = 'Please enter your subject.';
      isValid = false;
  }

  if (isValid && description.trim() === "") {
      document.getElementById('descriptionError').innerText = 'Please enter your description.';
      isValid = false;
  }

  if (isValid) {
    alert('Your message was sent successfully!');
    return true;
  }

  event.preventDefault();
  return false;
}






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

