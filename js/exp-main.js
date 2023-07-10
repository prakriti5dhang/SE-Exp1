/*
Lab: 
Exp:
File Name: main.js
Author: Prakriti Dhang*/

$(document).ready(function() {
  $('.navbar-nav .nav-link').click(function() {
    $('.navbar-nav .nav-link').removeClass('active'); // Remove active class from all links
    $(this).addClass('active'); // Add active class to clicked link
  });
});

