import { $content } from "./index";

function renderHome() {
    let newDiv = document.createElement('div')
    newDiv.id = 'home'
    newDiv.innerHTML = 'SUSHI HOUSE'

    let newBtn = document.createElement('button');
    newBtn.innerHTML = 'VIEW OUR MENU'

    newDiv.appendChild(newBtn);

    $content.appendChild(newDiv)
}

export {renderHome}