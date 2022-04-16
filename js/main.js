
//Mostrar el Sidebar

const navMenu = document.querySelector('#sidebar'),
navToggle = document.querySelector('#nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-sidebar')
    })
    
};


//ocultar sidebar
if(navClose) {
    navClose.addEventListener('click', ()  => {
        navMenu.classList.remove('show-sidebar')
    })
};
console.log(navClose)
// interactividad en Habilidades

const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => { 
    tab.addEventListener('click', ()=> {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContent => {
            tabContent.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove('skills__active')
        })

        tab.classList.add('skills__active')
    })
});


// Mixitup 

let mixerPorfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// links Active Work

const linkWorks = document.querySelectorAll('.work__item');

function activeWork(){
    linkWorks.forEach(i=> i.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWorks.forEach(i=> i.addEventListener('click',activeWork))

//Work popups

document.addEventListener('click',(e) =>{
    if(e.target.classList.contains('work__button')){
        togglePorfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePorfolioPopup(){
    document.querySelector('.porfolio__popup').classList.toggle('open');
}



document.querySelector('.porfolio__popup-close').addEventListener("click",togglePorfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    
    document.querySelector(".porfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".porfolio__popup-body").innerHTML = portfolioItem.querySelector(".porfolio__item-details").innerHTML;

  
    
   
}

///Services Modal
const modalViews = document.querySelectorAll('.services__modal'),
        modelBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn , i) =>{
    modelBtn.addEventListener('click',() => { 
        modal(i)
    })
})
modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click',()=> {
        modalViews.forEach((modalViews)=> {
            modalViews.classList.remove('active-modal')
        })
    })
})

// Swipper Testimonial

let swiper = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
   576: {
      slidesPerView: 2,
      
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    
  },
  });
// input animation 
const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add('.focus')
}
 
function blurfunc(){
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurfunc);
})

//***********************scroll bar  */

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll',navHightLighter);


function navHightLighter(){
    //obtener el scrooll actual position
    let scrollY = window.pageYOffset;
    

    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight;
        const sectionTop = current.offsetTop - 50 ,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}

