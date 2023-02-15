window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("navigation").style.backgroundColor = "#F7FDFF";
    document.getElementById("navigation").style.boxShadow = "0px 2px 20px rgba(0, 0, 0, 0.1)";
    document.getElementById("navigation").style.paddingTop = "10px";
    document.getElementById("navigation").style.paddingBottom = "10px";
  } else {
    document.getElementById("navigation").style.backgroundColor = "transparent";
    document.getElementById("navigation").style.boxShadow = "none";
    document.getElementById("navigation").style.paddingTop = "20px";
    document.getElementById("navigation").style.paddingBottom = "8px";
  }
}