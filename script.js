
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
  var contact = document.getElementById("contact");
  var projects = document.getElementById("projects");


  resume.addEventListener('click', function() {
    subText.innerHTML = 'View resume click <a href>here</a>.';
    subText.style.fontSize = '20px';
    subText.style.marginLeft = '0px';
    subText.style.marginTop = '102px'; // return to original margin so text is below name
    subText.style.fontWeight = 'normal';

  });

  home.addEventListener('click', function() {
    subText.innerHTML = 'I&#39;m an aspiring Front End Web, Java, and Android Developer.</br></br>Familiar: JQuery, Angular, MySQL, NodeJS.</br>Experienced: HTML5/CCS3, Javascript, ReactJS, Java, and Python.</br>MOBILE: (+886)925711860</br>EMAIL: darkphoton20@gmail.com</br>';
    subText.style.fontSize = '14px';
    subText.style.marginLeft = '0px';
    subText.style.marginTop = '102px'; // return to original margin so text is below name
    subText.style.fontWeight = 'normal';

  });

  contact.addEventListener('click', function() {
    subText.innerHTML = 'For Work, Web Design, or Assistance Please Contact Me Via</br>MOBILE: (+886)925711860</br>EMAIL: darkphoton20@gmail.com</br>';
    subText.style.fontSize = '20px';
    subText.style.marginLeft = '50%';
    subText.style.marginTop = '-280px'; // put content at the top of the page
    subText.style.fontWeight = 'bold';

  });

  projects.addEventListener('click', function() {
    subText.innerHTML = '<u>List of Projects</u>';
    subText.style.fontSize = '22px';
    subText.style.marginLeft = '32%';
    subText.style.marginTop = '-280px'; // put content at the top of the page
    subText.style.fontWeight = 'bold';
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
