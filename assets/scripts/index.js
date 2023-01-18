



// value of 1 means menu is closed. value of 0 means it is opened
let openOrClosed = 1;

// opens menu and rotates hamburger bars
function openMenu() {
    
  
  let nav = document.querySelector("nav");
  let hamburgerBarOne = document.querySelector(".bar-1");
  let hamburgerBarTwo = document.querySelector(".bar-2");
  let hamburgerBarthree = document.querySelector(".bar-3");

  if (openOrClosed == 1) {
    
   
    nav.style.transition ='0.5s ease';
    nav.style.display = "flex";
    hamburgerBarthree.style.display = "none";
    hamburgerBarOne.style.transform = "rotate(45deg)";
    hamburgerBarTwo.style.transform = "rotate(-45deg)";
    hamburgerBarOne.style.marginBottom = "-7px";
    

    openOrClosed = 0;
  } else if (openOrClosed == 0) {
  
    nav.style.transition ='0.5s ease';
    nav.style.display = "none";
    hamburgerBarOne.style.transform = "rotate(0deg)";
    hamburgerBarOne.style.marginBottom = "0px";
    hamburgerBarTwo.style.transform = "rotate(0deg)";
    hamburgerBarthree.style.display = "block";
    openOrClosed = 1;
  } else;
}

console.log('hey world')
