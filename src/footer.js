import { $content } from "./index";

function renderFooter() {
    let newDiv = document.createElement('div');
    newDiv.id = 'footer';
    newDiv.innerHTML = "Made by Hewny";

    $content.appendChild(newDiv);
}

export {renderFooter}