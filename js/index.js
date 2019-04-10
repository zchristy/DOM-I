const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// --------- Nav ----------
let nav = document.querySelector('nav');

let navItem1 = document.querySelectorAll('nav a')[0];
navItem1.innerText = siteContent['nav']['nav-item-1'];
navItem1.style.color = 'green';

let navItem2 = document.querySelectorAll('nav a')[1];
navItem2.innerText = siteContent['nav']['nav-item-2'];
navItem2.style.color = 'green';

let navItem3 = document.querySelectorAll('nav a')[2];
navItem3.innerText = siteContent['nav']['nav-item-3'];
navItem3.style.color = 'green';

let navItem4 = document.querySelectorAll('nav a')[3];
navItem4.innerText = siteContent['nav']['nav-item-4'];
navItem4.style.color = 'green';

let navItem5 = document.querySelectorAll('nav a')[4];
navItem5.innerText = siteContent['nav']['nav-item-5'];
navItem5.style.color = 'green';

let navItem6 = document.querySelectorAll('nav a')[5];
navItem6.innerText = siteContent['nav']['nav-item-6'];
navItem6.style.color = 'green';

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let newItem1 = document.createElement('a');
newItem1.innerHTML = 'World!';
newItem1.href = '#';
newItem1.style.color = 'green';
nav.appendChild(newItem1);

let newItem2 = document.createElement('a');
newItem2.innerHTML = 'Hello...';
newItem2.href = '#';
newItem2.style.color = 'green';
nav.insertBefore(newItem2, navItem1);

// -------- cta ---------
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// -------- Main Content ---------
// -- Top Content --
// Features
let featuresH4 = document.querySelectorAll('.text-content h4')[0];
featuresH4.innerHTML = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelectorAll('.text-content p')[0];
featuresContent.innerHTML = siteContent['main-content']['features-content'];

// About
let aboutH4 = document.querySelectorAll('.text-content h4')[1];
aboutH4.innerHTML = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('.text-content p')[1];
aboutContent.innerHTML = siteContent['main-content']['about-content'];

// Middle Image
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// -- Bottom Content --
// Services
let servicesH4 = document.querySelectorAll('.text-content h4')[2];
servicesH4.innerHTML = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelectorAll('.text-content p')[2];
servicesContent.innerHTML = siteContent['main-content']['services-content'];

// Product
let productH4 = document.querySelectorAll('.text-content h4')[3];
productH4.innerHTML = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('.text-content p')[3];
productContent.innerHTML = siteContent['main-content']['product-content'];

// Vision
let visionH4 = document.querySelectorAll('.text-content h4')[4];
visionH4.innerHTML = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('.text-content p')[4];
visionContent.innerHTML = siteContent['main-content']['vision-content'];

// -------- Contact ---------
let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

let address = document.querySelectorAll('.contact p')[0];
address.innerHTML = siteContent['contact']['address'];

let phone = document.querySelectorAll('.contact p')[1];
phone.innerHTML = siteContent['contact']['phone'];

let email = document.querySelectorAll('.contact p')[2];
email.innerHTML = siteContent['contact']['email'];

// -------- Footer ---------
let copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent['footer']['copyright'];
