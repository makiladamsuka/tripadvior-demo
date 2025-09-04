document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
  

        navLinks.forEach(otherLink => {
          otherLink.classList.remove('active');
        });
  

        this.classList.add('active');
  


      });
    });
});



var message = "Where to ?";

const show = document.getElementById("message"); 
show.textContent = message; 



const prompt = ["Where to ?",
                "Stay somewhere great",
                "Do something fun",
                "Find places to eat", 
                "Find the best flight", 
                "Vacation rentals"];


const search_prompt = ["Places to go, things to do, hotels..",
                  "Hotel name or destination",
                  "Attraction, activity or destination",
                  "Resaurant or destination", 
                  "Find the best flight", 
                  "Destination"];
  
  
  const buttonIds = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ];
  
  
  for (let i = 0; i < buttonIds.length; i++) {
    const button = document.getElementById(buttonIds[i]);
    if (button) {
      button.addEventListener("click", function() {
        console.log(prompt[i]);
        message = prompt[i];
        const show = document.getElementById("message"); 
        show.textContent = message; 

        
        const searchBar = document.getElementById("searchBar");
        searchBar.placeholder = search_prompt[i];
        
      });
    }
  }


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 10000); 
}

const sliderWrapper = document.getElementById('sliderWrapper');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.nav-button.prev');
        const nextButton = document.querySelector('.nav-button.next');
        const slideWidth = slides[0].offsetWidth + 10; // Image width + margin
        let currentIndex = 0;

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
            nextButton.style.display = currentIndex < slides.length - 4 ? 'block' : 'none';
        }

        function moveSlider(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex > slides.length - 4) {
                currentIndex = slides.length - 4;
            }
            updateSlider();
        }


        updateSlider();



        window.addEventListener('resize', () => {
            slideWidth = slides[0].offsetWidth + 10;
            updateSlider();
        });
  
        
        
const navbar = document.querySelector('.navbar');
const scrollThreshold = 300; 

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});
