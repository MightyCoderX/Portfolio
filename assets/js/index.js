const headerElem = document.querySelector('.header');
const navLinks = document.querySelector('.nav-links');
const navTrigger = document.getElementById('navTrigger');
const navbar = document.getElementById('navbar');
const heroElem = document.querySelector('.hero');
const sectionElems = document.querySelectorAll('section[class]');

const heroObserverOptions = {
    rootMargin: "-70% 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        navLinks.classList.remove('shown');
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

// showHeader();

// window.addEventListener('scroll', showHeader);

// function showHeader()
// {
//     if(scrollY>=headerElem.clientHeight)
//     {
//         headerElem.classList.add('background');
//     }
//     else
//     {
//         headerElem.classList.remove('background');
//     }

//     navLinks.classList.remove('shown');
// }

navTrigger.addEventListener('click', () =>
{
    navLinks.classList.toggle('shown');
});

document.addEventListener('click', e =>
{
    if(navLinks.classList.contains('shown') && !navbar.contains(e.target))
    {
        navLinks.classList.remove('shown');
    }
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