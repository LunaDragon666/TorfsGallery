// Navigation bar ~ Main menu field
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


// Disable copying images
function nocontext(e) {
  var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
  if (clickedTag == "IMG")
    return false;
}

document.oncontextmenu = nocontext;

// Gallery links
