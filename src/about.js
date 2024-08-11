import './style.css'

export default function About() {
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add('about');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('texts')

    const textOne = document.createElement('p');
    textOne.textContent = "NO ABOUT US HERE!"

    const textTwo = document.createElement('p');
    textTwo.textContent = "GET OUT NOW!"
    
    contentDiv.appendChild(textOne);
    contentDiv.appendChild(textTwo);

    aboutDiv.appendChild(contentDiv);

    return aboutDiv;
}