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

let navItem2 = document.querySelectorAll('nav a')[1];
navItem2.innerText = siteContent['nav']['nav-item-2'];

let navItem3 = document.querySelectorAll('nav a')[2];
navItem3.innerText = siteContent['nav']['nav-item-3'];

let navItem4 = document.querySelectorAll('nav a')[3];
navItem4.innerText = siteContent['nav']['nav-item-4'];

let navItem5 = document.querySelectorAll('nav a')[4];
navItem5.innerText = siteContent['nav']['nav-item-5'];

let navItem6 = document.querySelectorAll('nav a')[5];
navItem6.innerText = siteContent['nav']['nav-item-6'];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// -------- cta ---------
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
