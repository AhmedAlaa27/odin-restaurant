import Home from './home';
import Menu from './menu';
import About from './about';
import './style.css'

function pageLoad() {
    const content = document.querySelector('#content');

    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const aboutBtn = document.querySelector('.about-btn');

    homeBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(Home());
    });

    menuBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(Menu());
    });

    aboutBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(About());
    });

    content.appendChild(Home());

    return content;
}

document.body.appendChild(pageLoad());