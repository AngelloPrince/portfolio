/*==============TOGGLE ICON NAVBAR=============*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/*==============SCROLL=============*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*==============STICKY NAVBAR=============*/ 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==============REMOVE TOGGLE ICON AND NAVBAR=============*/ 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


   /*==============SCROLL REVEAL=============*/ 
   ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });

  /*==============TYPED TEXT JS=============*/ 
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'FreeLancer.', 'Developer Junior.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  })

  /*==============INFO DESPLEGABLE=============*/ 
/* SKILLS HTML */
  let hideText_btn = document.getElementById('hideText_btn');
  let hideText = document.getElementById('hideText');

  hideText_btn.addEventListener('click', toggleText);

  function toggleText(){
    hideText.classList.toggle('show');
  }
/* SKILLS CSS */

  let hideTextcss = document.getElementById('hideText_css');
  let hideCss = document.getElementById('hideCss');

  hideText_css.addEventListener('click', toggleTextcss);

  function toggleTextcss(){
    hideCss.classList.toggle('show');
  }

/* SKILLS JS */

let hideTextJs = document.getElementById('hideText_js');
let hideJs = document.getElementById('hideJs');

hideText_js.addEventListener('click', toggleTextjs);

function toggleTextjs(){
  hideJs.classList.toggle('show');
}

/* SKILLS REACT*/
let hideTextReact = document.getElementById('hideText_react');
let hideReact = document.getElementById('hideReact');

hideText_react.addEventListener('click', toggleTextreact);

function toggleTextreact(){
  hideReact.classList.toggle('show');
}


/* SKILLS BOOTSTRAP*/
let hideTextBs = document.getElementById('hideText_bs');
let hideBs = document.getElementById('hideBs');

hideText_bs.addEventListener('click', toggleTextbs);

function toggleTextbs(){
  hideBs.classList.toggle('show');
}


/* SKILLS Github*/
let hideTextGh = document.getElementById('hideText_gh');
let hideGh = document.getElementById('hideGh');

hideText_gh.addEventListener('click', toggleTextgh);

function toggleTextgh(){
  hideGh.classList.toggle('show');
}


/* SKILLS GIT*/
let hideTextGit = document.getElementById('hideText_git');
let hideGit = document.getElementById('hideGit');

hideText_git.addEventListener('click', toggleTextgit);

function toggleTextgit(){
  hideGit.classList.toggle('show');
}

/* SKILLS WORDPRESS*/
let hideTextWp = document.getElementById('hideText_wp');
let hideWp = document.getElementById('hideWp');

hideText_wp.addEventListener('click', toggleTextwp);

function toggleTextwp(){
  hideWp.classList.toggle('show');
}
