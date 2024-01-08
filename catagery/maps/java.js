

// navbar onscroll

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}





document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to each card title to change the color to orange on click
    const cardTitles = document.querySelectorAll('.card-title a');
    cardTitles.forEach(title => {
      title.addEventListener('click', function () {
        this.style.color = 'orange';
      });
    });
  });


 


 