
/* side bar -REMOVED FOR NOW-
function menu(button) {


  var sideBar = document.getElementById("sideBar");


  // if the hide button is clicked it will hide menu if it's shown or show it if it's hidden
  button.addEventListener('click', function() {
    if(sideBar.style.width !== '12%') {
      sideBar.style.width = '12%';
      button.style.marginLeft = "-50px";
      button.innerHTML = "Hide</br>Menu";
    } else {
      sideBar.style.width = '0%';
      button.style.marginLeft = "0px";
      button.innerHTML = "Show</br>Menu";
    }
  });
}
*/
function subText(event, action) {
  var subText = document.getElementById("sub-text");
  subText.addEventListener(event, function() {
    action;
  });
}

function navigation() {
  var subText = document.getElementById("sub-text");
  var resume = document.getElementById("resume");
  var home = document.getElementById("home");

  resume.addEventListener('click', function() {
    subText.innerHTML = 'View resume click <a href>here</a>.';
    subText.style.fontSize = '20px';
  });

  home.addEventListener('click', function() {
    subText.innerHTML = 'I&#39;m an aspiring Front End Web, Java, and Android Developer.</br></br>Day-to-Day: Angular, MySQL, NodeJS.</br>Experienced in HTML5/CCS3, Javascript, ReactJS, Java, and Python.</br>MOBILE: (+886)925711860</br>EMAIL: darkphoton20@gmail.com</br>';
    subText.style.fontSize = '13px';
  });
}

// iniate all JS functionality
function init() {
  //var hideButton = document.getElementById("hideBtn");
  //menu(hideButton);
  navigation();
}


// load page functionality
init();
