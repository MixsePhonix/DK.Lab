document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 100
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})

function animateOnScrollY() {
    const elements = document.querySelectorAll('.animate_scroll_Y');
  
    function checkInView() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkInView);
    window.addEventListener('load', checkInView);
}
  
animateOnScrollY();

function animateOnScrollX() {
    const elements = document.querySelectorAll('.animate_scroll_X');
  
    function checkInView() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkInView);
    window.addEventListener('load', checkInView);
  }
  
animateOnScrollX();



let btns = document.querySelectorAll('.button_more');

for (let button_more of btns) {
  button_more.addEventListener('click', function() {
    let card = this.closest('.card');
    card.classList.toggle('open');
    
    if (card.classList.contains('open')) {
      this.textContent = "∧";
    } else {
      this.textContent = "∨";
    }
  });
}



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open")
  })
})