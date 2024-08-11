import PizzaIcon from './pizza.png'
import './style.css'

export default function Home() {
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home');

    const pizzaIcon = new Image();
    pizzaIcon.src = PizzaIcon;
    pizzaIcon.classList.add('img');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('texts')

    const textOne = document.createElement('p');
    textOne.textContent = "WE MAKE THE BEST PIZZA EVER!"

    const textTwo = document.createElement('p');
    textTwo.textContent = "COME TO US NOW!!!!!!"
    
    contentDiv.appendChild(textOne);
    contentDiv.appendChild(textTwo);

    homeDiv.appendChild(pizzaIcon);
    homeDiv.appendChild(contentDiv);

    return homeDiv;
}