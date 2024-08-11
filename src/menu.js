import './style.css'
import MenuIcon from './menu.png'

export default function Menu() {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu');

    const menuIcon = new Image();
    menuIcon.src = MenuIcon;
    menuIcon.classList.add('img');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('texts')

    const textOne = document.createElement('p');
    textOne.textContent = "I TOLD YOU TO EAT!"

    // const textTwo = document.createElement('p');
    // textTwo.textContent = "I TOLD YOU TO EAT!"
    
    contentDiv.appendChild(textOne);
    menuDiv.appendChild(menuIcon);
    // contentDiv.appendChild(textTwo);

    menuDiv.appendChild(contentDiv);

    return menuDiv;
}