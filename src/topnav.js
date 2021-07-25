import {$content} from './index';

function renderNav() {
    const navMenuItems = ["HOME", "MENU", "LOCATION"];
    let newDiv = document.createElement('div');
    newDiv.id = 'topnav';

    let newUl = document.createElement('ul')
    
    navMenuItems.forEach((menu) => {
        let newLi = document.createElement('li');
        newLi.innerHTML = menu;
        newUl.appendChild(newLi);
    })

    newDiv.appendChild(newUl)
    $content.appendChild(newDiv)
}

export {renderNav}