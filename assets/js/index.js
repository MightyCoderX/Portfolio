const headerElem = document.querySelector('.header');
const navLinks = document.querySelector('.nav-links');
const navTrigger = document.getElementById('navTrigger');

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
    if(navLinks.classList.has('shown'))
    {
        setTimeout(() =>, 100);
        navTrigger.blur();
    }
});