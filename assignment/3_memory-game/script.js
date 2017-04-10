console.log('Test Sourced');

var onReady2 = function() {
  console.log('memory game doc ready');

  //TODO Add your code below to attach your event listeners to functions
  $('#revealHide').on('click',revealHide);
  $('.cardDiv').on('click', singleClickFunc);

  $('.cardImg').hide();
};// end onReady2

// on document ready run the onReady2 function
$(document).ready(onReady2);

// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality
  if ($('.cardImg').is(':visible')) {
    $('.cardImg').hide();
  } else {
    $('.cardImg').toggle();
  }// end if statement
}// end revealHide

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {

  //TODO add your code here to get the desired functionality
  if ($(this).children('.cardImg').is(':visible')) {
    $(this).children('.cardImg').hide();
  } else {
    $(this).children('.cardImg').toggle();
  }// end if statement
}// end singleClickFunc
