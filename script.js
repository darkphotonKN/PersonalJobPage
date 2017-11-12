
var hideButton = document.getElementById("hideBtn");
var sideBar = document.getElementById("sideBar");


hideButton.addEventListener('click', function() {
  if(sideBar.style.width !== '12%') {
    sideBar.style.width = '12%';
    hideButton.style.marginLeft = "-50px";
    hideButton.innerHTML = "Hide</br>Menu";

  } else {
    sideBar.style.width = '0%';
    hideButton.style.marginLeft = "0px";
    hideButton.innerHTML = "Show</br>Menu";

  }


});
