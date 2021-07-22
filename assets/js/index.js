const headerElem = document.querySelector('.header');
const navLinks = document.querySelector('.nav-links');
const navTrigger = document.getElementById('navTrigger');
const navbar = document.getElementById('navbar');

showHeader();

window.addEventListener('scroll', showHeader);

function showHeader()
{
    if(scrollY>=headerElem.clientHeight)
    {
        headerElem.classList.add('background');
    }
    else
    {
        headerElem.classList.remove('background');
    }

    navLinks.classList.remove('shown');
}

navTrigger.addEventListener('click', () =>
{
    navLinks.classList.toggle('shown');
});

document.addEventListener('click', e =>
{
    console.log(e.path);
    if(navLinks.classList.contains('shown') && !navbar.contains(e.target))
    {
        navLinks.classList.remove('shown');
    }
});