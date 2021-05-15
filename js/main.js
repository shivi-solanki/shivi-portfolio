window.addEventListener("scroll", function(){
  const header = document.querySelector("nav");
  header.classList.toggle('sticky', window.scrollY > 0);
});

var icon = document.getElementById("icon");

icon.onclick = function(){
      document.body.classList.toggle("white-theme");
      if(document.body.classList.contains("white-theme")){
          icon.innerHTML = "<i class='bx bxs-moon' ></i>" ;
}
    else{
       icon.innerHTML ="<i class='bx bx-sun'></i>" ;
    }
}
var icon = document.getElementById("icon");

icon.onclick = function(){
      document.body.classList.toggle("white-theme");
      if(document.body.classList.contains("white-theme")){
          icon.innerHTML = "<i class='bx bxs-moon' ></i>" ;
}
    else{
       icon.innerHTML ="<i class='bx bx-sun'></i>" ;
    }
}

  AOS.init();
      var typed = new Typed('.type', {

              strings: ['Web Developer.', 'Graphic Designer.', 'Front-end developer.'],
              typeSpeed: 70,
              backSpeed: 70,
              loop: true,
              showCursor: true
      });