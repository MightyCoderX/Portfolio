const headerElem = document.querySelector('.header');
const ulNavLinks = document.querySelector('.nav-links');
const navTrigger = document.getElementById('navTrigger');
const navbar = document.getElementById('navbar');
const heroElem = document.querySelector('.hero');
const sectionElems = document.querySelectorAll('section[class]');
const contactForm = document.getElementById('contactForm');

/* Header */

const heroObserverOptions = {
    rootMargin: "-70% 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        ulNavLinks.classList.remove('shown');
        if(!entry.isIntersecting)
        {
            headerElem.classList.add('scrolled');
        }
        else
        {
            headerElem.classList.remove('scrolled');
        }
    });
}, heroObserverOptions);

heroObserver.observe(heroElem);


/* Navbar */

navTrigger.addEventListener('click', () =>
{
    ulNavLinks.classList.toggle('shown');
});

window.addEventListener('scroll', e =>
{
    ulNavLinks.classList.remove('shown');
});

ulNavLinks.querySelectorAll('a').forEach(a =>
{
    a.addEventListener('click', () => ulNavLinks.classList.remove('shown'));
});

document.addEventListener('click', e =>
{
    if(ulNavLinks.classList.contains('shown') && !navbar.contains(e.target))
    {
        ulNavLinks.classList.remove('shown');
    }
});


/* Contact Form */

contactForm.addEventListener('submit', e =>
{
    e.preventDefault();
    const data = new FormData(e.target);
    const formStatusElem = document.createElement('p');
    
    
    fetch(e.target.action,
    {
        method: e.target.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response =>
    {
        formStatusElem.style.color = 'green';
        formStatusElem.innerText = 'Form submitted successfully!';
        contactForm.reset();
    })
    .catch(err =>
    {
        formStatusElem.style.color = 'red';
        formStatusElem.innerText = 'There was an error submitting the form!';
    })
    .finally(() =>
    {
        contactForm.insertBefore(formStatusElem, contactForm.lastElementChild);
    });
    
});

// function updateNav(section)
// {
//     const options = {
//         root: null,
//         threshold: 0,
//         rootMargin: `-10% 0px -70% 0px`
//     };

//     let observer = new IntersectionObserver((entries, observer) =>
//     {
//         entries.forEach(entry => 
//         {
//             if(entry.isIntersecting)
//             {
//                 console.log('Intersecting');
//                 const section = entry.target;
//                 Array.from(navLinks.children).forEach(li =>
//                 {
//                     const navLink = li.querySelector('a');
//                     if(navLink.href.split('#')[1] == section.id)
//                     {
//                         navLink.classList.add('active');
//                     }
//                     else
//                     {
//                         navLink.classList.remove('active');
//                     }
//                 });
//             }
//         });
//     }, options);

//     observer.observe(section);
// }

// sectionElems.forEach(updateNav);